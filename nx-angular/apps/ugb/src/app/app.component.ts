import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BottomNavigationComponent } from "./components/bottomNavigation/bottomNavigation.component";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule, NavigationComponent, BottomNavigationComponent],
  template: `
    <main>
      <app-navigation/>
      <section>
        <router-outlet></router-outlet>
      </section>
      <app-bottom-navigation/>
    </main>
  `,
  styleUrls: [],
})
export class AppComponent { }
