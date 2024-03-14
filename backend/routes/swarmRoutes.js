import express from "express";
import { Swarm } from "../models/swarm.js";

const router = express.Router();

// Route to create a Swarm
router.post('/', async (req, res) => {
    try {
        if (
            !req.body.swarmNumber ||
            !req.body.location ||
            !req.body.swarmDate

        ) {
            return res.status(400).send({
                message: "Send all required fields"
            });
        }

        const newSwarm = {
            swarmNumber: req.body.swarmNumber,
            location: req.body.location,
            swarmDate: req.body.swarmDate,

        };
        const swarm = await Swarm.create(newSwarm);

        return res.status(201).send(swarm);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
})

// Route to all Swarms
router.get('/', async (req, res) => {
    try {
        const swarms = await Swarm.find({});

        return res.status(200).json(swarms);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})

// Route for getting Swarm by ID
router.get('/:id', async (req, res) => {
    try {

        const { id } = req.params;

        const swarm = await Swarm.findById(id);

        return res.status(200).json(swarm);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})

// Route to update Swarm
router.put("/:id", async (req, res) => {
    try {
        if (!req.body.swarmNumber ||
            !req.body.location ||
            !req.body.swarmDate

        ) {
            return res.status(400).send({
                message: "Must fill out all required fields",
            });
        }

        const { id } = req.params;
        const result = await Swarm.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).json({ message: 'Swarm not found' })
        }

        return res.status(200).send({ message: "Swarm updated Successfully" })

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
})

// Route to Delete a Swarm
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Swarm.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: "Swarm not found" });
        }
        return res.status(200).send({ message: "Swarm Deleted Successfully" })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
})

export default router;