module.exports = (req, res) => {
    res.status(404)
    const content = 'Ошибочка 404 :('
    res.send(content);
    }