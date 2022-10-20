
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const arraySymbol = ['a', 'b', 'c', 'd', 'e', 'f','c','i','s']

function uniqueId() {
    let rand = [];
    for(i=0; i < 15; i++) {
        rand.push(String(getRandomArbitrary(0,9)+arraySymbol[getRandomArbitrary(0,8)]))
    }
    return rand.join('');
}

class Books {
    constructor(title="", description="", authors="", favorites="",fileCover = '',fileName='', fileBook = '', id = uniqueId()) {
        this.title = title;
        this.description = description;
        this.authors = authors;
        this.favorites = favorites;
        this.fileCover = fileCover;
        this.fileName = fileName;
        this.fileBook = fileBook;
        this.id = id;        
    }
}

module.exports = {Books};