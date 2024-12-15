import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGear, faBars, faXmark, faCircleHalfStroke, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ThemeService } from '../../core/services/theme.service';
import { LanguageService } from '../../core/services/language.service';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [FontAwesomeModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    animations: [
        trigger('menuToggle', [
            state('open', style({
                opacity: 1,
                display: 'flex'
            })),
            state('closed', style({
                opacity: 0,
                display: 'none'
            })),
            transition('open <=> closed', [
                animate('0.3s ease-in-out')
            ])
        ]),
        trigger('menuOptionsToggle', [
            state('open', style({
                height: '*',
                padding: '*',
                borderColor: '*',
                backgroundColor: '*',
            })),
            state('closed', style({
                height: '0',
                padding: '0',
                borderColor: 'transparent',
                backgroundColor: 'transparent',
            })),
            transition('open <=> closed', [
                animate('0.3s ease-in-out')
              ])
        ])
    ]
})
export class NavbarComponent {
    // ICONS
    faGear: any = faGear;
    faBars: any = faBars;
    faXmark: any = faXmark;
    faCircleHalfStroke: any = faCircleHalfStroke;
    faLanguage: any = faLanguage;

    menuMobile = false;
    menuOptions = false;

    private service: ThemeService = inject(ThemeService);
    theme = this.service.theme;

    private langService: LanguageService = inject(LanguageService);
    currentLang = this.langService.currentLang;
  
    async toggleLanguage(mobile?:boolean) {
        await this.langService.toggleLanguage();
        if(mobile) this.handleMenuMobile();
        else this.handleMenuOptions();
    }


    translate(key: string): string {
        return this.langService.translate(key);
    }


    toggle(mobile?:boolean){
        this.service.toggleTheme();
        if(mobile) this.handleMenuMobile();
        else this.handleMenuOptions();

    }

    handleMenuMobile() {
        this.menuMobile = !this.menuMobile;
    }

    handleMenuOptions() {
        this.menuOptions = !this.menuOptions;
    }

}
