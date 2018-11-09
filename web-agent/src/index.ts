import {SessionClipApplication, startApplication} from "./starter";

const sessionClipPublicApi = () => {

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

/**
 * Don't allow sessionclip instances multiplicity
 */
if (!window["sessionClip"]) {
    window["sessionClip"] = sessionClipPublicApi();
}
