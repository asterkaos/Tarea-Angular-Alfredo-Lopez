import { Component} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  template: `
  <mat-toolbar color="primary">

    <a [routerLink]="['/']">My Store</a>
    
    <span class="spacer"></span>
    <app-cart class="mouseHouver" (click)="goToCheckout"()></app-cart>
  </mat-toolbar>`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) { }

  goToCheckout(): void {
    this.router.navigate(['/checkout']);
  }
}

