import {Recordable} from "../../../common/modules/recordable";

export interface Input extends Recordable {
    value: string;
    id: string;
}