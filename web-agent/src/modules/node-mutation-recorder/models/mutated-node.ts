import {Recordable} from "../../../common-modules/recordable";

export interface MutatedNode extends Recordable {
    id:number,
    attributes:any[]
}