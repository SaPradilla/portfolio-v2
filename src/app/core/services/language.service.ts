import { Injectable, signal } from '@angular/core';
import { Translation } from '../models/translation.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    private readonly langKey = 'language';
    public currentLang = signal<string>('es');
    private translations = signal<Translation>({});

    constructor(private http: HttpClient) {
        this.loadInitialLanguage();
    }

    private async loadInitialLanguage(): Promise<void> {
        const storedLang = localStorage.getItem(this.langKey);
        // get the language from the browser, if it's not 'en' or 'es' use 'es'
        const browserLang = navigator.language.split('-')[0];
        const defaultLang = storedLang || (browserLang === 'en' || browserLang === 'es' ? browserLang : 'es');
        await this.setLanguage(defaultLang);
    }

    async toggleLanguage(): Promise<void> {
        const newLang = this.currentLang() === 'es' ? 'en' : 'es';
        await this.setLanguage(newLang);
    }

    private async setLanguage(lang: string): Promise<void> {
        try {
            // load the translations file
            const translations = await this.http
            .get<Translation>(`assets/i18n/${lang}.json`)
                .toPromise();

            this.translations.set(translations || {});
            this.currentLang.set(lang);
            localStorage.setItem(this.langKey, lang);
        } catch (error) {
            console.error('Error loading translations:', error);
        }
    }

    translate(key: string): string {
        return this.translations()[key] || key;
    }
}
