import {SessionClipPublicApi} from "../../index";

declare global {
    interface Window {
        sessionClip: SessionClipPublicApi;
    }
}

export const exposeOnWindow = (window: Window, sessionClipPublicApiInstance: SessionClipPublicApi) => {
    if (!window.sessionClip) {
        window.sessionClip = sessionClipPublicApiInstance;
    }
};