import express from 'express';
import { getPlanets, numberOfMoons, numOfMoons } from '../controller/planetController.js';

//* we will create functions to request data in the CONTROLLER, and import them here!
//* we define all the endpoints for each request here

const router = express.Router();

router.route("/").get(getPlanets)
router.route("/numOfMoons/:pick").get(numberOfMoons)
// router.route("/numOfMoons/:pick").get(numOfMoons) - advanced approach from planetController, line 44

export default router;