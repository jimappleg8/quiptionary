import React from 'react';
import Table from 'react-bootstrap/Table';

const SourceBlock = (props) => {
  
  const source = props.source;
  const defSource = props.defSource;
  
  return (
    <div>
      <Table striped bordered size="sm">
        <tbody>
            <tr>
              <th style={{width: '25%'}}>Source ID:</th>
              <td>{source.id}</td>
            </tr>
            <tr>
              <th>Description:</th>
              <td><span dangerouslySetInnerHTML={{__html: source.description}}></span></td>
            </tr>
            <tr>
              <th>Author:</th>
              <td>{source.author}</td>
            </tr>
            <tr>
              <th>Published Date:</th>
              <td>{source.publishedDate}</td>
            </tr>
            <tr>
              <th>Citation:</th>
              <td><span dangerouslySetInnerHTML={{__html: source.citation}}></span></td>
            </tr>
            <tr>
              <th>Notes:</th>
              <td>{source.notes}</td>
            </tr>
        </tbody>
      </Table>
      <h4>Definition-specific information</h4>
      <Table striped bordered size="sm">
        <tbody>
            <tr>
              <th style={{width: '25%'}}>Details:</th>
              <td>{defSource.details}</td>
            </tr>
            <tr>
              <th>Attributed To:</th>
              <td>{defSource.attributedTo}</td>
            </tr>
            <tr>
              <th>Cited Source:</th>
              <td><span dangerouslySetInnerHTML={{__html: defSource.citedSource}}></span></td>
            </tr>
            <tr>
              <th>Is Primary:</th>
              <td>{(defSource.isPrimary == 0) ? 'false' : 'true'}</td>
            </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default SourceBlock;