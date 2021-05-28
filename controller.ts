

// const handleRequest = () => {
//     return "Hello There!";
// }

import { AnotherHelper } from "./AnotherHelper";
import { BaseController } from "./BaseController";
import { Helper } from "./Helper";

// exports.handleRequest = handleRequest;

export class Controller extends BaseController {
    handleRequest() {
        const helper = new Helper();
        this.callTheHelper(helper);
        const anotherHelper = new AnotherHelper();
        this.callTheHelper(anotherHelper);
        const localHelper = {
            someMethod: () => {
                return true;
            },
            anotherMethod: () => {
                return false;
            }
        }
        this.callAnotherHelper(localHelper);
        return "Hello There!";
    }

    callTheHelper(helper: Helper) {
        return helper.someMethod();
    }

    callAnotherHelper(anotherHelper: AnotherHelper) {
        return anotherHelper.someMethod();
    }
}