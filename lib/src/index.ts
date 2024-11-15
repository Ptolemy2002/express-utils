import {Request, Response, NextFunction, ErrorRequestHandler, RequestHandler} from "express";
import {ParsedQs} from "qs";
import {RouteParameters} from "express-serve-static-core";

export function asyncErrorHandler<
    Route extends string,
    P = RouteParameters<Route>,
    ResBody = any,
    ReqBody = any,
    ReqQuery = ParsedQs,
    LocalsObj extends Record<string, any> = Record<string, any>
>(fn: RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>): RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj> {
    return (
        req: Request<P, ResBody, ReqBody, ReqQuery, LocalsObj>, res: Response<ResBody, LocalsObj>, next: NextFunction
    ) => {
        return Promise
            .resolve(fn(req, res, next))
            .catch(next);
    };
}

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