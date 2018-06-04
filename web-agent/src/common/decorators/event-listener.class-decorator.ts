export interface EventListenerParameters {
    target:Window | Document | Element,
    eventName:string;
}

export function EventListener(options: EventListenerParameters):any {
    return (target: any) => {
        return (...args:any[]): any => {
            const instance = new target(...args);

            options.target.addEventListener(options.eventName, (e:Event) => instance.handler(e, window));

            return instance;
        }
    }
}