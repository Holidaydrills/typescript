import { RequestHandlerInterface } from "./RequestHandlerInterface";

export class BaseController implements RequestHandlerInterface {
    handleGetRequest() {
        return "Handle GET requests";
    }
    baseHandleRequest() {
        return "BaseController says hello!";
    }
}