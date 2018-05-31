export interface AddedNode {
    id:number,
    nodeType:number,
    nodeName:string,
    attributes?:any[],
    parentId?:number,
    prevSiblingId?:number
}