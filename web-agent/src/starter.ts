import {startDOMInitialStateCollector} from "./modules/node-mutation-recorder/dom-collector";
import {startDOMMutationCollector} from "./modules/node-mutation-recorder/dom-mutation-collector";
import {startEventCollector} from "./modules/event-recorder/event-collector";
import {startSession} from "./core/start-session";

export interface SessionClipApplication {
    stop(): void
}

export interface BackgroundProcess {
    stop(): void;
}

export const startApplication = (): Promise<SessionClipApplication> =>
    startSession().then(() => {
        startDOMInitialStateCollector();

        const backgroundProcesses: BackgroundProcess[] = [
            startDOMMutationCollector(),
            startEventCollector()
        ];

        return {
            stop: () => backgroundProcesses.forEach(process => process.stop())
        }
    });

