import { Subject, Observable } from 'rxjs';

export class CommonService
{
    private LogOutEvent = new Subject<any>();

    EmitLogOutEvent() {
        this.LogOutEvent.next();
    }

    SubscribeToLogOutEvent(): Observable<any> {
        return this.LogOutEvent.asObservable();
    }
}