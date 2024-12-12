import express, {Express, Request, Response} from 'express';

const app:Express = express();

app.get('/', (req:Request, res:Response) => {
    res.send("I WANT TO DO YOUR BACKEND");
})

app.listen(8088, () => {
    console.log("Listening on port 8088");
})