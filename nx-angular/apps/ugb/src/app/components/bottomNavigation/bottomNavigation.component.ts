import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../button/Button.component";

@Component({
    selector: 'app-bottom-navigation',
    imports: [RouterModule, CommonModule, ButtonComponent],
    template: `
      <nav class="md:hidden fixed bottom-0 left-0 w-full py-3 px-6 bg-gray-900 text-white shadow-lg flex justify-around overflow-x-auto whitespace-nowrap gap-6">
          <app-button [isLink]="true" [routerLink]="['/food']" content="Food" variant="basic"/>
          <app-button [isLink]="true" [routerLink]="['/calorie-calculator']" content="Calorie Calculator" variant="basic"/>
          <app-button [isLink]="true" [routerLink]="['/one-rep-max-calculator']" content="1 Rep Max Calculator" variant="basic"/>
      </nav>
  `,
    styleUrls: []
})
export class BottomNavigationComponent { }
