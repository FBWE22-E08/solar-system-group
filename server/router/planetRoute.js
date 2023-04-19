import express from 'express';
import { getPlanets, numOfMoons, numberOfMoons } from '../controller/planetController.js';

//* we will create functions to request data inside the controller and import them here!
//* we define all the endpoints for each request here

const router = express.Router();

router.route("/").get(getPlanets)
router.route("/numberOfMoons/:pick").get(numOfMoons)
router.route("/numOfMoons/:pick").get(numOfMoons)

export default router;