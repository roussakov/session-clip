import {ViewportResize} from "../models/viewport-resize";
import {Scroll} from "../models/scroll";
import {MouseMove} from "../models/mouse-move";
import {MouseClick} from "../models/mouse-click";
import {RecordingsService, recordingsServiceInstance} from "../../../core/services/recordings.service";
import {Input} from "../models/input";

export class EventRecorderService {

    constructor(private recordingsService: RecordingsService) {}

    recordViewPortResize = (record:ViewportResize) => this.recordingsService.send("viewPortResizeRecord", record);
    recordScroll = (record:Scroll) => this.recordingsService.send("scrollRecord", record);
    recordMouseMove = (record:MouseMove) => this.recordingsService.send("mouseMoveRecord", record);
    recordMouseClick = (record:MouseClick) => this.recordingsService.send("mouseClickRecord", record);
    recordInput = (record:Input) => this.recordingsService.send("inputRecord", record);
}

export const eventRecorderServiceInstance = new EventRecorderService(recordingsServiceInstance);