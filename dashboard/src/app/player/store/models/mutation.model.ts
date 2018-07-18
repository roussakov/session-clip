export interface Mutation {
	data: any,
	offset: number,
	type: 	"attributes_change" |
			"added_nodes"       |
			"removed_nodes"     |
			"page_scroll"       |
			"view_port_change"  |
			"mouse_move"
}

export interface MouseMove {
	x: number,
	y: number
}

export interface AttributesChange {
	newAttr: Attribute[],
	nodeId: number
}

export interface Attribute {
	value: string,
	name: string
}

export interface ViewPortChange {
	height: number,
	width: number
}

export interface AddedNode {
	_id: number,
	attr: Attribute[],
	previousSibling: number,
	nodeName: string,
	nodeType: number,
	parentId: 488,
	childNodes: AddedNode[]
}
