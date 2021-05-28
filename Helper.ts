import Label from "sap/m/Label";
import ODataModel from "sap/ui/model/odata/v4/ODataModel";
export class Helper {
    someMethod() {
        let label = new Label();
        let oDataModel = new ODataModel({serviceUrl: "someUrl", synchronizationMode: "None"});
        oDataModel.bindList("somePath").create().created().then(() => {
            //Some entity was created
        })
        label.getText();
        return true;
    }
}