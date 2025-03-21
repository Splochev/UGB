import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-button',
    imports: [RouterModule, CommonModule],
    template: `
    <ng-container *ngIf="isLink; else button">
      <a [routerLink]="routerLink" [class]="buttonClass" [attr.target]="target">{{ content }}</a>
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
    @Input() onClick: () => void = () => { return; }

    get buttonClass() {
        const baseClass = 'transition-all duration-300 ease-in-out transform cursor-pointer';
        const effect = 'hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary active:scale-95';

        switch (this.variant) {
            case 'flat':
                return `${baseClass} ${effect} bg-primary text-white px-4 py-2 rounded-full 
                hover:bg-primary-light
                `;
            case 'contained':
                return `${baseClass} ${effect} bg-transparent text-primary px-4 py-2 rounded-full 
                border-2 border-primary hover:bg-primary hover:text-white`;
            case 'basic':
            default:
                return `${baseClass} hover:text-primary`;
        }
    }
}
