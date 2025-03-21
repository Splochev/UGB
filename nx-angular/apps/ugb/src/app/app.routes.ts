import { Routes } from '@angular/router';
import { LogInComponent } from './Pages/log-in/log-in.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';

export const routes: Routes = [
    {
        path: '',
        component: LogInComponent,
        title: 'Sign In'
    },
    {
        path: 'sign-up',
        component: SignUpComponent,
        title: 'Sign Up'
    }
];
