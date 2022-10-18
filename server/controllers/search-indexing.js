const stem = require( 'wink-porter2-stemmer' );

const phraseToArray = (phrase) => {
  if (phrase === null || phrase == '') {
    return [];
  }
  // split into words (while removing the punctuation)
  // from https://stackoverflow.com/questions/49718279/javascript-remove-string-punctuation-and-split-into-words
  const words = phrase.toLowerCase().match(/\b[\w']+\b/g);
  return words;
}

// Converts an array of words into an array of stemmed words for indexing
//
const stemWords = (wordArray) => {
	
	// stem words
  let stemmedWords = [];
  wordArray.forEach(word => {
    stemmedWords.push(stem(word));
  });
	
	return stemmedWords;
}

// Removes common words from a phrase before stemming.
//
// This list is not definitive; there may be a better list that we
// can use, but this will do for now.
//
const removeStopWords = (words) => {
  const stopWords = ['i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', 'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', 'her', 'hers', 'herself', 'it', 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'this', 'that', 'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very'];

  return words.filter(x => !stopWords.includes(x));
}

module.exports = {
  phraseToArray,
  stemWords,
  removeStopWords
}