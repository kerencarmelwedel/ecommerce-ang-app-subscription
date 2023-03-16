const express = require("express");
const router = express.Router();
const db = require("../database/db");

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
    const {page = 1, limit = 10} = req.query;

    let startValue;
    let endValue;

    if (page > 0) {
        startValue = page * limit - limit; // 0,10,20,30
        endValue = page * limit;
    } else {
        startValue = 0;
        endValue = 10;
    }

    // db.query(
    //   `SELECT p.id, p.title, p.image, p.price, p.short_desc, p.quantity,
    //       c.title as category FROM products p JOIN categories c ON
    //           c.id = p.cat_id LIMIT ${startValue}, ${limit}`,
    //   (err, results) => {
    //     if (err) console.log(err);
    //     else res.json(results);
    //   }
    // );
    res.json([
            {
                id: 123,
                title: 'my product',
                image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wsj.com%2Fstory%2Fjames-webb-space-telescope-see-the-first-images-sent-back-to-earth-4f4de83f&psig=AOvVaw1CQQiAMFHtwglPOM3ITLpx&ust=1678883145389000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLj7q5212_0CFQAAAAAdAAAAABAK',
                price: 42,
                short_desc: 'this is amazing',
                quantity: 1,
                category: 'artistic'
            },
            {
                id: 12345,
                title: 'my product 2',
                image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dfamous%2Bart&psig=AOvVaw2s24l3rc-fIlgh1x8PhZHB&ust=1678878137536000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjYgsqi2_0CFQAAAAAdAAAAABA3',
                price: '45',
                short_desc: 'this is really amazing',
                quantity: 1,
                category: 'artistic'
            }
        ]
    );
});

// GET SINGLE PRODUCT BY ID
router.get("/:productId", async (req, res) => {
    const {productId} = req.params;

    db.query(
        `SELECT p.id, p.title, p.image, p.images, p.description, p.price, p.quantity, p.short_desc,
        c.title as category FROM products p JOIN categories c ON
            c.id = p.cat_id WHERE p.id = ${productId}`,
        (err, results) => {
            if (err) console.log(err);
            else res.json(results[0]);
        }
    );
});

module.exports = router;
