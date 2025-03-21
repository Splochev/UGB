import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../button/Button.component";

@Component({
  selector: 'app-navigation',
  imports: [RouterModule, CommonModule, ButtonComponent],
  template: `
    <nav class="bg-secondary text-tertiary shadow-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <!-- a placeholder square for my logo-->
        <div class='w-20 h-8 bg-primary square'></div>
        <div class="space-x-6 hidden md:flex">
          <app-button [isLink]="true" [routerLink]="['/food']" content="Food" variant="basic"/>
          <app-button [isLink]="true" [routerLink]="['/calorie-calculator']" content="Calorie Calculator" variant="basic"/>
          <app-button [isLink]="true" [routerLink]="['/one-rep-max-calculator']" content="1 Rep Max Calculator" variant="basic"/>
        </div>
        <div class="space-x-4">
          <app-button [isLink]="true" [routerLink]="['/']" content="Log in" variant="basic"/>
          <app-button [isLink]="true" [routerLink]="['/sign-up']" content="Sign up" variant="flat"/>
        </div>
      </div>
    </nav>
  `,
  styleUrls: []
})
export class NavigationComponent {
}