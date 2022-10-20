const express = require('express');
const bp = require('body-parser')
const { json } = require('express');

const booksApiRouter = require('./routers/api/books')
const errorMiddleware = require('./middleware/error')
const loggerMiddleware = require('./middleware/logger')
const indexRouter = require('./routers/index');
const booksRouter = require('./routers/books')

const app = express();
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.set('view engine', 'ejs');

app.use(loggerMiddleware)


app.use('/', indexRouter)
app.use('/books', booksRouter)
app.use('/api/books', booksApiRouter)
app.use('/public', express.static(__dirname + "/public"));
/* app.use('/books') */

app.use(errorMiddleware)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`=== start server PORT ${PORT} ===`)
})
