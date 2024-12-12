import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('I WANT TO DO YOUR BACKEND');
})

app.listen(8088, () => {
    console.log("Listening on port 8088!");
})