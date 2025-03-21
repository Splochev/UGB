import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterModule],
  template: `
    <nav class="navigation">
      <section>
        <div>logo</div>
      </section>
      <section>
        <a [routerLink]="['/food']">Food</a>
        <a [routerLink]="['/calorie-calculator']">Calorie Calculator</a>
        <a [routerLink]="['/one-rep-max-calculator']">1 Rep Max Calculator</a>
      </section>
      <section>
        <a [routerLink]="['/']">Log in</a>
        <a extended [routerLink]="['/sign-up']">
          Sign up
        </a>
      </section>
    </nav>
  `,
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

}
