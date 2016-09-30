import { Component, OnInit,OnChanges,OnDestroy } from "@angular/core";
import { IUser,User, UserService } from "../Services/UserService";
import { Subscription } from "rxjs/Rx";

@Component({
    moduleId: module.id,
    selector: "ag-profile",
    templateUrl: "index.html",
    providers: []
    
})
export class ProfileComponent implements OnInit, OnDestroy {

    private User = new User(0,'1','1','1','1');
    public constructor(private uService: UserService) {      
    }    
    public saveChanges(event) {
        this.uService.Update(this.User);
        if (this.User.id === this.uService.LoggedInUserId) {
            this.uService.SetLoggedInUser(this.User.id);
        }
    }
    get diagnostic() {
        return JSON.stringify(this.User);
    }
    ngOnInit() {
        this.uService.CurrentUser$.subscribe((x: IUser) => {
            this.User = x;
        })
        this.uService.User(this.uService.LoggedInUserId);
        
    }
    ngOnDestroy() {
    }
}