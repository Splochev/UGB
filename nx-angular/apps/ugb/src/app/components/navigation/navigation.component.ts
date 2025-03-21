import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  imports: [RouterModule, CommonModule],
  template: `
    <nav class="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <!-- Logo Section (pushed to the right) -->
        <div class="text-3xl font-bold text-green-500 ml-4">
          Ur Gym Bud
        </div>

        <!-- Links Section -->
        <div class="space-x-6 hidden md:flex">
          <a [routerLink]="['/food']" class="hover:text-green-500 transition-all duration-300">Food</a>
          <a [routerLink]="['/calorie-calculator']" class="hover:text-green-500 transition-all duration-300">Calorie Calculator</a>
          <a [routerLink]="['/one-rep-max-calculator']" class="hover:text-green-500 transition-all duration-300">1 Rep Max Calculator</a>
        </div>

        <!-- Login / Sign up Section -->
        <div class="space-x-4">
          <a [routerLink]="['/']" class="text-green-500 hover:text-white transition-all duration-300">Log in</a>
          <a [routerLink]="['/sign-up']" class="bg-green-500 text-gray-900 px-4 py-2 rounded-full hover:bg-green-600 transition-all duration-300">Sign up</a>
        </div>
      </div>
    </nav>
  `,
  styleUrls: []
})
export class NavigationComponent {
}