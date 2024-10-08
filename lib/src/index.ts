import {Request, Response, NextFunction, ErrorRequestHandler, RequestHandler} from "express";

export const asyncErrorHandler = (fn: RequestHandler) => (req: Request, res: Response, next: NextFunction) => {
    return Promise
        .resolve(fn(req, res, next))
        .catch(next);
};

export type ErrorOrNextOptions = {
    status?: number;
    message?: string;
};
export function errorOrNext({status=500, message="Internal Server Error"}: ErrorOrNextOptions={}): ErrorRequestHandler {
    return function (err, _, res, next) {
        if (err) {
            res.status(status).json({message});
        } else {
            next();
        }
    };
}