import {Injectable } from "@angular/core";
import { Http, Headers,Response } from "@angular/http";
import { UserData } from "../MoqDataApi/UserData";
import { Observable, Subject, ReplaySubject, BehaviorSubject} from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()
export class UserService {
    public LoggedInUserId: number;
    private LoggedInUser = new BehaviorSubject<IUser>(new User(0,'','','',''));
    public LoggedInUser$ = this.LoggedInUser.asObservable().share();

    private CurrentUser = new BehaviorSubject<IUser>(new User(0, '', '', '', ''));
    public CurrentUser$ = this.CurrentUser.asObservable().share();

    private _httpService: Http;

    public constructor(httpService: Http) {
        this._httpService = httpService;
    }    
    public SetLoggedInUser(id: number) {
        return this._httpService.get(`${UserData.Url}/${id}`)
            .map((x: Response) => x.json())
            .subscribe( (data:any) => {
                if (data.data) { data = data.data; }
                this.LoggedInUserId = data.id;
                this.LoggedInUser.next(data);
            });
    }

    public User(id: number) {
        return this._httpService.get(`${UserData.Url}/${id}`)
            .map((x: Response) => x.json())
            .subscribe( (data:any )=> {
                if (data.data) { data = data.data; }
                this.CurrentUser.next(data);
            });
    }
    public Update(user: IUser) {
        return this._httpService.put(`${UserData.Url}/${user.id}`
            , JSON.stringify(user)
            , {
                headers: new Headers({ 'Content-Type': 'application/json' })
            })
            .map((x: Response) => 
                x.json()
            )
            .subscribe((data: any) => {   
                //if (data.data) { data = data.data; }            
                this.LoggedInUser.map(x => x.id === user.id).subscribe((data: any) => {
                    this.LoggedInUserId = user.id;
                    //this.SetLoggedInUser(user.id);
                });                
                this.CurrentUser.next(user);
            });
    }
    /*
    public Users() {
        return this._httpService.get(UserData.Url)
            .map((x: Response) => x.json())
            .subscribe((data: IUser[]) => {
                this.UserList.next(data);
            });
    }
    */
    public remove(id: number) {
        this._httpService.delete(UserData.Url + `/${id}`)
            .map((res: Response) => res.json())
    }
};

export class User implements IUser {
    public id: number;
    public Username: string;
    public Firstname: string;
    public Lastname: string;
    public Email: string;
    public constructor(userId:number, userName:string, firstName: string, lastName: string, email: string) {
        this.id = userId;
        this.Username = userName;
        this.Firstname = firstName;
        this.Lastname = lastName;
        this.Email = email;
    }
}
export interface IUser {
    id: number;
    Username: string;
    Firstname: string;
    Lastname: string;
    Email: string;
};