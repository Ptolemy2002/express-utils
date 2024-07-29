export const asyncErrorHandler = fn => (req, res, next) => {
    return Promise
        .resolve(fn(req, res, next))
        .catch(next);
};

export function errorOrNext({status=401, message="Unauthorized"}={}) {
    return function (err, _, res, next) {
        if (err) {
            res.status(status).json({message});
        } else {
            next();
        }
    };
}