import {Recordable} from "../../../common-modules/recordable";

export interface ViewportResize extends Recordable {
    width:number;
    height:number;
}