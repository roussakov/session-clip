import {EventHandler} from "./event-handler";
import {EventRecorderService} from "../services/event-recorder.service";

export abstract class BaseEventHandler implements EventHandler {
    constructor(protected eventRecorderService: EventRecorderService) {}

    abstract handler(event: Event, windowRef: Window): void
}