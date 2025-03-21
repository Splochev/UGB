import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule, NavigationComponent],
  template: `
    <main>
      <app-navigation/>
      <section>
        <router-outlet/>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent { }
