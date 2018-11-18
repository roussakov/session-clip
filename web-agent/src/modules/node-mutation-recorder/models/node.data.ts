export interface NodeDataAttributes {
    name: string,
    value: string | null
}

export interface NodeData {
    id: number,
    nodeType: number,
    nodeName: string,
    attributes?: NodeDataAttributes[],
    parentId?: number,
    value?: string,
    prevSiblingId?: number
}