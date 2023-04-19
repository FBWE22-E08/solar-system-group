//* SERVER FOR SOLAR SYSTEM
import express from 'express'
import cors from 'cors';

const app = express();
const port = 5000

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res)=> {
    res.status(200).send(`<h1>Welcome to our port ${port} 🐱</h1>`)
})

app.listen(port, () => {
    console.log(`app is up and running @ http://localhost:${port}`) 
 });
 