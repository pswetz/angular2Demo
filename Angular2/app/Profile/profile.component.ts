import { Component, OnInit,OnChanges,OnDestroy } from "@angular/core";
import { IUser,User, UserService } from "../Services/UserService";
import { Subscription } from "rxjs/Rx";
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule } from "@angular/forms";
@Component({
    moduleId: module.id,
    selector: "ag-profile",
    templateUrl: "index.html",
    providers: []
})
export class ProfileComponent implements OnInit, OnDestroy {

    private currentUserSub: Subscription;
    private userFormGroup: FormGroup;
    public constructor(private uService: UserService, private formBuilder: FormBuilder) {   

        uService.User(uService.LoggedInUserId);

        uService.CurrentUser$.subscribe( (x: User) => {
            this.userFormGroup = formBuilder.group({
                Username: [x.Username],
                Firstname: [x.Firstname],
                Lastname: [x.Lastname],
                Email: [x.Email]
            });
        })

        uService.CurrentUser$.subscribe( function(x:User) {
            this.userFormGroup = formBuilder.group({
                Username: [x.Username],
                Firstname: [x.Firstname],
                Lastname: [x.Lastname],
                Email: [x.Email]
            });
        })
    }
    
    public saveChanges(event) {
        debugger;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.currentUserSub.unsubscribe();
    }
}