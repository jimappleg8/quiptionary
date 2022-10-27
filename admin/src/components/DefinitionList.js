import React from 'react'
import api from '../api'
import { useTable } from 'react-table'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';


const MyTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })
  
  return (
    <Table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}


const DefinitionList = ({ results }) => {
  
  let words = '';
  let matches = [];
  let related = [];
  if (results.data) {
    words = results.data.words || '';
    matches = results.data.matches || [];
    related = results.data.related || [];
    related = related.sort((a, b) => {
      return a.entryWord.localeCompare(b.entryWord, undefined, {sensitivity: 'base'});
    });
  }


  const handleUpdateDefn = ( id ) => {
    window.location.href = `/definitions/update/${id}`;
  }

  const handleDeleteDefn = async ( id ) => {
    if (
      window.confirm(
        `Do you want to delete the definition ${id} permanently?`,
      )
    ) {
     await api.removeDef(id);
      window.location.reload();
    }
  }


  
  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
        filterable: true,
      },
      {
        Header: 'Word',
        accessor: 'entryWord',
        filterable: true,
      },
      {
        Header: 'Definition',
        accessor: 'definition',
        filterable: true,
      },
      {
        Header: 'Attributed To',
        accessor: 'attributedTo',
      },
      {
        Header: 'Update',
        accessor: '',
        Cell: (props) => {
          const rowId = props.row.original.id;
          return (
            <div style={{color: "#ef9b0f", cursor: "pointer"}} onClick={() => handleUpdateDefn(rowId)}>
              Update
            </div>
          );
        }
      },
      {
        Header: 'Delete',
        accessor: '',
        Cell: (props) => {
          const rowId = props.row.original.id;
          return (
            <div style={{color: "#ff0000", cursor: "pointer"}} onClick={() => handleDeleteDefn(rowId)}>
              Delete
            </div>
          );
        }
      },
    ],
    []
  )

  return (
    <Container>
      <MyTable columns={columns} data={matches} />
    </Container>
  )
}

export default DefinitionList;