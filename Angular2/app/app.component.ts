import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserService,IUser } from "./Services/UserService";
import { Subscription } from "rxjs/Rx";
@Component({
        moduleId: module.id,
        selector: "ag-app",
        templateUrl: "app.html",
        providers: []
})// test
export class AppComponent implements OnInit, OnDestroy {
    public title: string;
    public LoggedInUser: string = "";

    private UserSub: Subscription;

    public constructor(private uService: UserService) { 
        this.title = "Application";
        this.uService.SetLoggedInUser(1);// this is setting up the 'current user prop in the service.
    }
    ngOnInit() {
        this.UserSub = this.uService.LoggedInUser$.subscribe((x: IUser) => {
            if (this.LoggedInUser !== x.Username) {
                this.LoggedInUser = x.Username;
            }
        });
    }
    ngOnDestroy() {
        this.UserSub.unsubscribe();
    }
}

