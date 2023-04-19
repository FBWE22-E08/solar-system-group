//* A. get the entire planet data with a default endpoint "/" ==> http://localhost:5000/planets

import planets from "../planets-dataset.js";

export const getPlanets = async (req, res, next) => {
  try {
    const data = await planets;
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

//* B. get a planet with the most moons || one with no moons with an endpoint "/numOfMoons/:pick" ==> http://localhost:5000/planets/numOfMoons/:pick

// if pick(req.params) is "/most", please get the planet with the most moons, and if pick(req.params) is "/none", please get the planet with no moons.

//* Solution 1: Basic Approach
export const numberOfMoons = async (req, res, next) => {
    try {
      const { pick } = req.params;
      if (pick === "most") {
        //* get the highest value from each planet's number of moons
        const highestNum = Math.max(
          ...planets.map((planet) => planet.numberOfMoons)
        );
        //* find THE PLANET with the highest value from the number of moons
        const theFound = planets.find(planet => planet.numberOfMoons === highestNum)
        res
          .status(200)
          .json(
            `The planet with the most moons is ${theFound.name}, with ${theFound.numberOfMoons} moons.`
          );
      } else if (pick === "none") {
          const noMoons = planets.filter(planet => planet.numberOfMoons === 0)
        res
        .status(200)
        .json(noMoons.map(noMoon => noMoon.name))
          
      } else res.status(400).send("bad request");
    } catch (error) {
        next(error)
    }
  };

  
//* Solution 2: advanced approach
//Bravo, Celine!
export const numOfMoons = async (req, res, next) => {
  try {
    const pick = req.params.pick.toLowerCase();
    if (pick === "most") {
      const mostMoons = planets.reduce((prev, current) =>
        prev.numberOfMoons > current.numberOfMoons ? prev : current
      );
      res
        .status(200)
        .send(
          `The planet with the most moons is ${mostMoons.name}, with a ${mostMoons.numberOfMoons} moons`
        );
    } else if (pick === "none") {
      const nonMoon = planets.find((planet) => planet.numberOfMoons === 0);
      const planetsArray = [];
      planetsArray.push(nonMoon.name);

      res.status(200).send(planetsArray);
    } else res.status(400).send("bad request");
  } catch (error) {
    next(error);
  }
};

