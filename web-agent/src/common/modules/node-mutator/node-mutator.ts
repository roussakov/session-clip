import {generateUUID} from "../uuid-generator/uuid-generator.service";

export interface SessionClipNode extends Node {
    SESSION_CLIP_ID: number;
}

export const setUUID = (node: SessionClipNode): void => {
    node.SESSION_CLIP_ID = generateUUID();
};

export const getUUID = (node: SessionClipNode) => {
    return node.SESSION_CLIP_ID;
};