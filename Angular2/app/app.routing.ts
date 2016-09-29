import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./NotFound/app.NotFoundComponent";
import { ProfileComponent } from "./Profile/profile.component";
import { AccountComponent } from "./Account/account.component";

const appRoutes: Routes = [
    {
        path: "app", pathMatch: "full", children: [
            {
                path: ""
            }
        ]
    },
    {
        path: "Profile", component: ProfileComponent
    },
    {
        path: "Account", component: AccountComponent
    },
    {
        path: "", redirectTo: "/app", pathMatch: "full"
    },
    {
        path: "**", component: NotFoundComponent, outlet: "ErrorContent"
    }
];

export const appRoutingProviders: any[] = [

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);