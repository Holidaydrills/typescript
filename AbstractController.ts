export abstract class AbstractController {
    handleGetRequest() {
        return "Handle GET requests";
    }
    abstract baseHandleRequest(): string;
}