/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let longest = 0
    for(let i=0 ; i<sentences.length ;i++){
        let numberofword = sentences[i].split(' ').length
        if(numberofword > longest){
            longest = numberofword
        }
    }

    return longest
};