import { ErrorCode, HttpExceptions } from "./root";

export class UnauthorizedException extends HttpExceptions {
    constructor(message: string, errorCode: ErrorCode){
        super(message, errorCode, 401, null);
    }
}