const express = requirel ('express')

const app = express























app.get('/',(req, res) => {
    res.send('hello world')
})


app.listen(port, () => {
console.log ('web server')
})