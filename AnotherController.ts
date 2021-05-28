import { AbstractController } from "./AbstractController";

export class AnotherController extends AbstractController {
    baseHandleRequest(): string {
        return "AnotherController says hello!";
    }

}