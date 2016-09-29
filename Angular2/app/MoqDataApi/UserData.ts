import { InMemoryDbService } from "angular2-in-memory-web-api";
import { User } from "../Services/UserService";
export class UserData implements InMemoryDbService {
    public static Url:string = "/MoqDataApi/users";
    public createDb() {
        let users: User[] = [
            new User(1, "user1", "1", "lname1", "1@gmail.com"),
            new User(2, "user2", "2", "laname2", "2@gmail.com"),
            new User(3, "user3", "3", "laname3", "3@gmail.com"),
            new User(4, "user4", "4", "laname4", "4@gmail.com")
        ];
        return { users };
    }
}
