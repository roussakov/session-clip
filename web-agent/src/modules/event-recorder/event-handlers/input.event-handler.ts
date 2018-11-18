import {EventListener} from "../../../common/decorators/event-listener.class-decorator";
import {BaseEventHandler} from "./base-event-handler";
import {InputData} from "../models/input.data";
import {getUUID} from "../../../common/modules/node-mutator/node-mutator";
import {createRecord} from "../../../common/modules/recordable";

@EventListener({
    targetEl: window,
    eventName: "input"
})
export class InputEventHandler extends BaseEventHandler {

    handler(e: Event): void {
        const inputData: InputData = {
            id: getUUID(e.target),
            value: e.target.value,
        };

        this.eventRecorderService.recordInput(createRecord("input", inputData));
    }

}