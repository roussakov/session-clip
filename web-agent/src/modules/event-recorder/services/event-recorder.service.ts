import {RecordingsService, recordingsServiceInstance} from "../../../core/services/recordings.service";
import {Recordable} from "../../../common/modules/recordable";

//todo: revisit implementation
export class EventRecorderService {

    constructor(private recordingsService: RecordingsService) {
    }

    recordViewPortResize = (record: Recordable) => this.recordingsService.send("viewPortResizeRecord", record);
    recordWindowScroll = (record: Recordable) => this.recordingsService.send("windowScrollRecord", record);
    recordInnerScroll = (record: Recordable) => this.recordingsService.send("innerScrollRecord", record);
    recordMouseMove = (record: Recordable) => this.recordingsService.send("mouseMoveRecord", record);
    recordMouseClick = (record: Recordable) => this.recordingsService.send("mouseClickRecord", record);
    recordInput = (record: Recordable) => this.recordingsService.send("inputRecord", record);
}

export const eventRecorderServiceInstance = new EventRecorderService(recordingsServiceInstance);