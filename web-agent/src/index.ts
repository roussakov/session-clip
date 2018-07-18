import {startDomInitialStateCollector} from "./modules/node-mutation-recorder/dom-collector";
import {startDomObserver} from "./modules/node-mutation-recorder/dom-observer";
import {startEventCollector} from "./modules/event-recorder/event-collector";
import {startSession} from "./core/start-session";

startSession().then(() => {
    //run recorder algorithm
    startDomInitialStateCollector();
    startDomObserver();
    startEventCollector();
});