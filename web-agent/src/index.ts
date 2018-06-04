import {startDomCollector} from "./modules/node-mutation-recorder/dom-collector";
import {startDomObserver} from "./modules/node-mutation-recorder/dom-observer";
import {startEventCollector} from "./modules/event-recorder/event-collector";


//register bootstrap pipeline
startDomCollector();
startDomObserver();
startEventCollector();