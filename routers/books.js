const express = require('express');
const router = express.Router();
const { Books } = require('../models/Books');

const stor = {
    book: []
}
const arrayNum = [1, 2, 3, 4];
arrayNum.map(function (el) {
    const newbook = new Books(`title ${el}`,
        `description ${el}`, `authors ${el}`, `favorites ${el},`,
        `fileCover ${el}`, `fileName ${el}`, `белый.jpg`)
    stor.book.push(newbook)
})

router.get('/', (req, res) => {
    const { book } = stor;
    res.render("books/index", {
        title: "Books",
        books: book
    })
})

router.get('/create', (req, res) => {
    res.render("books/create", {
        title: "ToDo | create",
        books: {},
    });
});

router.post('/create', (req, res) => {
    const { book } = stor;
    const { title, description, authors, favorites,
        fileCover, fileName, fileBook } = req.body

    const newBook = new Books(title, description, authors, favorites, fileCover, fileName, fileBook)
    book.push(newBook)

    res.redirect('/books')
})

router.get('/:id', (req, res) => {
    const { book } = stor;
    const { id } = req.params

    const idx = book.findIndex(el => el.id === id);

    if (idx !== -1) {
        res.render("books/view", {
            title: "Books | view",
            books: book[idx]
        })
    } else {
        res.status(404).redirect('/404')
    }
})

router.get('/update/:id', (req, res) => {
    const { book } = stor;
    const { id } = req.params
    const idx = book.findIndex(el => el.id === id);

    if (idx !== -1) {
        res.render('books/update', {
            title: 'Books | update',
            books: book[idx]
        })
    } else {
        res.status(404).redirect('/404')
    }
})

router.post('/update/:id', (req, res) => {
    const { book } = stor;
    const { id } = req.params;
    const { title, description, authors, favorites,
        fileCover, fileName } = req.body
    const idx = book.findIndex(el => el.id === id);

    if (idx !== -1) {
        book[idx] = {
            ...book[idx],
            title, description, authors, favorites,
            fileCover, fileName
        }
        res.redirect(`/books/${id}`)
    } else {
        res.status(404).redirect('/404')
    }
})

router.post('/delete/:id', (req, res) => {
    const { book } = stor;
    const { id } = req.params;
    const idx = book.findIndex(el => el.id === id);

    if (idx !== -1) {
        book.splice(idx, 1);
        res.redirect('/books');
    } else {
        res.status(404).redirect('/404');
    }
})

module.exports = router;