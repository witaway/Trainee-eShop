const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello world!!! Another one.')
});

//kekeke
app.listen(port, () => {
    console.log(`Stated on http://localhost:${port}`)
})
