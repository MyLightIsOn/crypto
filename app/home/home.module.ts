import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

import { HttpClientModule } from '@angular/common/http';
import { CryptoService } from '~/crypto.service';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        HttpClientModule
    ],
    declarations: [
        HomeComponent
    ],
    providers: [
        CryptoService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
