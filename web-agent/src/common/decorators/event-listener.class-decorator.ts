export interface EventListenerParameters {
    targetEl:Window | Document | Element,
    eventName:string;
    capture?: boolean
}

export function EventListener(options: EventListenerParameters):any {

    const {targetEl, eventName, capture = false} = options;
    return (target: any) => {
        return (...args:any[]): any => {
            const instance = new target(...args);

            const eventHandler = (e: Event) => instance.handler(e, window);
            targetEl.addEventListener(eventName, eventHandler, capture);
            instance.unsubscribe = () => targetEl.removeEventListener(eventName, eventHandler, capture);

            return instance;
        }
    }
}