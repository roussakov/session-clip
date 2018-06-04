export class EventRecorderService {

    private events:any[] = [];

    record = (event:any) => this.events.push(event);

}