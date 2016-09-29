"use strict";
var router_1 = require("@angular/router");
var app_NotFoundComponent_1 = require("./NotFound/app.NotFoundComponent");
var profile_component_1 = require("./Profile/profile.component");
var account_component_1 = require("./Account/account.component");
var appRoutes = [
    {
        path: "app", pathMatch: "full", children: [
            {
                path: ""
            }
        ]
    },
    {
        path: "Profile", component: profile_component_1.ProfileComponent
    },
    {
        path: "Account", component: account_component_1.AccountComponent
    },
    {
        path: "", redirectTo: "/app", pathMatch: "full"
    },
    {
        path: "**", component: app_NotFoundComponent_1.NotFoundComponent, outlet: "ErrorContent"
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map