const db = require("../database/db");

exports.createSubscriptions = async (params) => {
    const {name, email} = params;

    if (!name) throw {message: "name was not provided", statusCode: 400};
    if (!email) throw {message: "email was not provided", statusCode: 400};

    return new Promise((resolve, reject) => {
        db.query(
            `INSERT INTO subscriptions VALUES (?)`,
            [name, email],
            (err, result) => {
                if (err) reject({message: "New subscription failed", statusCode: 500});
            }
        )
        resolve({
            message: `subscription was successfully created`,
            statusCode: 201,
        })
    })
}

exports.getSubscriptions = async (params) => {
    const {name, email} = params;

    if (!name) throw {message: "name was not provided", statusCode: 400};
    if (!email) throw {message: "email was not provided", statusCode: 400};

    return new Promise((resolve, reject) => {
        db.query(
            `SELECT * FROM subscriptions`,
            (err, result) => {
                if (err) reject({message: err, statusCode: 500});

                if (result.length === 0)
                    reject({message: "No subscriptions were found", statusCode: 400});

                resolve({
                    statusCode: 200,
                    message: `${result.length} subscriptions were found`,
                    data: result,
                });
            }
        );
    });
};