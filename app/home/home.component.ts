import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { CryptoService } from '~/crypto.service';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    public cryptos;

    constructor(
        public cryptoService: CryptoService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.cryptoService.getCrypto().subscribe(
            res => this.cryptos = res,
            () => {},
            () => {
            this.cryptoService.getBTCValue(this.cryptos);
            
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
