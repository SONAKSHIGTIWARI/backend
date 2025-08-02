import express from "express"
import {
    getRandomTechnology,
    getFiltredTechnologies,
    getTechnologyBasedOnId,
    getTechnologyByIdFilter
} from "../controllers/controller.js";

let router = express();

router.get("/random", getRandomTechnology);

router.get("/filter", getFiltredTechnologies);

// Use this for id-based filter route
router.get("/filterbyid/:id", getTechnologyByIdFilter);

export { router };
