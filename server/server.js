//* SERVER FOR SOLAR SYSTEM
import express from 'express'
import cors from 'cors';
import planetRoute from './router/planetRoute.js'
import satelliteRoute from './router/satelliteRoute.js'

const app = express();
const port = 5000

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res)=> {
    res.status(200).send(`<h1>Welcome to our port ${port} 🐱</h1>`)
})

app.use('/satellite', satelliteRoute) //http://localhost:5000/satellites
app.use('/planets', planetRoute) //http://localhost:5000/planets/

app.listen(port, () => {
    console.log(`app is up and running @ http://localhost:${port}`) 
 });
 