import { Injectable, signal } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class LinkService {
    currentPage = signal(window.location.pathname);

    constructor(private router: Router) {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => {
                this.currentPage.set(window.location.pathname);
            });
    }

    getPath() {
        return this.currentPage();
    }
}
