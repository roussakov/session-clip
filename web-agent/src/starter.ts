import {startDomInitialStateCollector} from "./modules/node-mutation-recorder/dom-collector";
import {startDomObserver} from "./modules/node-mutation-recorder/dom-observer";
import {startEventCollector} from "./modules/event-recorder/event-collector";
import {startSession} from "./core/start-session";

export interface SessionClipApplication {
    stop(): void
}

export const startApplication = (): Promise<SessionClipApplication> =>
    startSession().then(() => {
        startDomInitialStateCollector();

        const backgroundProcesses = [
            startDomObserver(),
            startEventCollector()
        ];

        return {
            stop: () => backgroundProcesses.forEach((process: any) => process.stop())
        }
    });

