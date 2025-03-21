import { Component, Input, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LinkService } from '../../services/link.service';

@Component({
    selector: 'app-button',
    imports: [RouterModule, CommonModule],
    template: `
    <ng-container *ngIf="isLink; else button">
      <a 
      [routerLink]="routerLink" 
      [class]="buttonClass" 
      [attr.target]="target"
      >
      {{ content }}
    </a>
    </ng-container>
    <ng-template #button>
    <button [class]="buttonClass" (click)="onClick()">
        <ng-content></ng-content>
      </button>
    </ng-template>
  `,
    styleUrls: []
})
export class ButtonComponent {
    @Input() isLink = false;
    @Input() variant: 'basic' | 'flat' | 'contained' = 'basic';
    @Input() content = '';
    @Input() routerLink: string[] = [];
    @Input() target = '_self';
    @Input() onClick: () => void = () => { console.log(this.routerLink[0]); };
    linkService = inject(LinkService);

    get buttonClass() {
        const baseClass = 'transition-all duration-300 ease-in-out transform cursor-pointer';
        const effect = 'hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary active:scale-95';
        const isActiveLink = this.isLink && this.linkService.getPath() === this.routerLink[0];
        const activeClass = isActiveLink ? 'underline text-primary-light' : '';


        switch (this.variant) {
            case 'flat':
                return `${baseClass} ${effect} ${activeClass} bg-primary text-tertiary px-4 py-2 rounded-full 
                hover:bg-primary-light
                `;
            case 'contained':
                return `${baseClass} ${effect} ${activeClass} bg-transparent text-primary px-4 py-2 rounded-full 
                border-2 border-primary hover:bg-primary hover:text-tertiary`;
            case 'basic':
            default:
                return `${baseClass} ${activeClass} hover:text-primary`;
        }
    }
}
