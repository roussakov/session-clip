import {Recordable} from "../../../common/modules/recordable";

export interface AddedNode extends Recordable {
    id:number,
    nodeType:number,
    nodeName:string,
    attributes?:any[],
    parentId?:number,
    value?: string,
    prevSiblingId?:number
}