import {startDomCollector} from "./modules/node-mutation-recorder/dom-collector";
import {startDomObserver} from "./modules/node-mutation-recorder/dom-observer";

//register bootstrap pipeline
startDomCollector();
startDomObserver();