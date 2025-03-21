import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-bottom-navigation',
    imports: [RouterModule, CommonModule],
    template: `
    <nav class="md:hidden fixed bottom-0 left-0 w-full py-3 px-6 bg-gray-900 text-white shadow-lg flex justify-around">
      <a [routerLink]="['/food']" class="text-green-500 hover:text-green-600 transition-all duration-300">Food</a>
      <a [routerLink]="['/calorie-calculator']" class="text-green-500 hover:text-green-600 transition-all duration-300">Calorie Calculator</a>
      <a [routerLink]="['/one-rep-max-calculator']" class="text-green-500 hover:text-green-600 transition-all duration-300">1 Rep Max Calculator</a>
    </nav>
  `,
    styleUrls: []
})
export class BottomNavigationComponent { }
