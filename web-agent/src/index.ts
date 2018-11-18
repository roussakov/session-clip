import {SessionClipApplication, startApplication} from "./starter";
import {exposeOnWindow} from "./core/utils/expose-on-window";

export interface SessionClipPublicApi {
    start(): void;
    stop(): void;
}

const sessionClipPublicApi = (): SessionClipPublicApi => {

    let application: Promise<SessionClipApplication>;

    return {
        start: (): void => {
            application = startApplication()
        },
        stop: (): void => {
            application.then(app => app.stop())
        }
    }
};

exposeOnWindow(window, sessionClipPublicApi());
