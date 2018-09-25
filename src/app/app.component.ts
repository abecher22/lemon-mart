import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  template: `
    <mat-toolbar color="primary" fxLayoutGap="8px">
      <button mat-icon-button><mat-icon>menu</mat-icon></button>
      <a mat-icon-button routerLink="/home"><mat-icon svgIcon="lemon"></mat-icon><span class="mat-h2">LemonMart</span></a>
      <span class="flex-spacer"></span>
      <button mat-mini-fab routerLink="/user/profile" matToolTip="Profile" aria-label="User Profile"><mat-icon>account_circle</mat-icon>
      </button>
      <button mat-mini-fab routerLink="/user/logout" matToolTiop="Logout" aria-lable="Logout"><mat-icon>lock_open</mat-icon></button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = "lemon-mart";
  constructor(iconRegistry: MatIconRegistry, sanitzer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      "lemon",
      sanitzer.bypassSecurityTrustResourceUrl("assets/images/icons/lemon.svg")
    );
  }
}
