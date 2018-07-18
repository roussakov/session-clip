export interface Nodes {
	[key: number]: HTMLElement
}

export class FlatDom {

  private nodes:Nodes = {};

  public find = (id: number): any => this.nodes[ id ];

  public add = (id: number, element: HTMLElement): void => {
    this.nodes[ id ] = element
  };

}
