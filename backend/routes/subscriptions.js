const express = require("express");
const router = express.Router();
const subscriptionController = require("../controllers/subscriptionController");
const app = require("express/lib/router");
const db = require("../database/db");
router.get("/", async (req, res) => {

    res.json([
            {
                name: "Joni",
                email: "mitch@gmai.com"
            },
            {
                name: "jimi",
                email: "hendrix@gmail.com"
            }
        ]
    );
});

router.post("/subscriptions/submit-form", subscriptionController.create_subscriptions);


module.exports = router;
