import {Recordable} from "../../../common/modules/recordable";

export interface InnerScroll extends Recordable {
    x:number,
    y:number
    nodeId: any
}