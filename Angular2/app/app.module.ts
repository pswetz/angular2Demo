import { NgModule }       from "@angular/core";
import { BrowserModule }  from "@angular/platform-browser";
import { routing, appRoutingProviders  } from "./app.routing";
import { FormsModule }    from "@angular/forms";
import { AppComponent } from "./app.component";
import { NotFoundComponent } from "./NotFound/app.NotFoundComponent";
import { ProfileComponent } from "./Profile/profile.component";
import { AccountComponent } from "./Account/account.component";
import { UserService } from "./Services/UserService";
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule } from "@angular/forms";
import { UserData } from "./MoqDataApi/UserData";
import { InMemoryWebApiModule } from "angular2-in-memory-web-api";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        ReactiveFormsModule,
        InMemoryWebApiModule.forRoot(UserData, { delay:50 })
    ],
    declarations: [
        AppComponent, ProfileComponent,AccountComponent,NotFoundComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        appRoutingProviders, UserService
    ]
})
export class AppModule { }