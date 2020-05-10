import { Subject } from 'rxjs';

export class AuthService
{
    private loginEvent:Subject<boolean> = new Subject<boolean>();

    public EmitLoginEvent(data) {
        this.loginEvent.next(data);
    }

    public GetLoginEvent(){
        return this.loginEvent.asObservable();
    }
}