import {collectDom} from "./modules/node-mutation-recorder/dom-collector";
import {observeDom} from "./modules/node-mutation-recorder/dom-observer";

//register bootstrap pipeline
collectDom();
observeDom();