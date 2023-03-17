const {
    getSubscriptions,
    createSubscriptions,
} = require("../services/subscriptionService");

exports.create_subscriptions = async (req, res, next) => {
    const {name, email} = req.body;
    createSubscriptions({name, email})
        .then((result) => {
            res.status(result.statusCode).send({...result});
        })
        .catch((err) => {
            const {statusCode = 400, message} = err;
            res.status(statusCode).send({message}) && next(err);
        });
};

exports.get_subscriptions = async (req, res, next) => {
    const {name, email} = req.query;
    getSubscriptions({name, email})
        .then((result) => {
            const {message, data} = result;
            res.status(200).send({message, data});
        })
        .catch((err) => {
            const {statusCode = 400, message} = err;
            res.status(statusCode).send({message}) && next(err);
        });
};
