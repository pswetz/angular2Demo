import { Component, OnInit,OnChanges,OnDestroy } from "@angular/core";
import { IUser,User, UserService } from "../Services/UserService";
import {Subscription} from "rxjs/Rx";
@Component({
    moduleId: module.id,
    selector: "ag-profile",
    templateUrl: "index.html",
    providers: []
})
export class ProfileComponent implements OnInit, OnDestroy {
    public User: IUser = new User(-1,"","","","");
    private currentUserSub: Subscription;
    public constructor(private uService: UserService) {   
        if (this.User === undefined || this.User.id < 0) {
            this.uService.User(this.uService.LoggedInUserId);
        }  
    };
    public onKey(newValue: string,field:string) {
        if (this.User.hasOwnProperty(field)) {
            if (this.User[field] !== newValue) {
                this.User[field] = newValue;
            }
        }
        this.uService.Update(this.User);
    }
    ngOnInit() {
        this.currentUserSub = this.uService.CurrentUser$.subscribe( (x: IUser) => {
            if (this.User === undefined || this.User.id < 0 || this.User.id !== x.id)
                this.User = x;
        }, error => {
            console.log(`error in ProfileComponent ${error}`);
            // handle errors
        });        
    }
    ngOnDestroy() {
        this.currentUserSub.unsubscribe();
    }
}