"use strict";
var UserService_1 = require("../Services/UserService");
var UserData = (function () {
    function UserData() {
    }
    UserData.prototype.createDb = function () {
        var users = [
            new UserService_1.User(1, "pswetz", "Paul", "Swetz", "pswetz@gmail.com"),
            new UserService_1.User(2, "user2", "2", "laname2", "2@gmail.com"),
            new UserService_1.User(3, "user3", "3", "laname3", "3@gmail.com"),
            new UserService_1.User(4, "user4", "4", "laname4", "4@gmail.com")
        ];
        return { users: users };
    };
    UserData.Url = "/MoqDataApi/users";
    return UserData;
}());
exports.UserData = UserData;
//# sourceMappingURL=UserData.js.map