import { Component, inject, OnInit, OnDestroy, effect } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';

@Component({
    selector: 'app-typewriter',
    standalone: true,
    imports: [],
    templateUrl: './typewriter.component.html',
    styleUrl: './typewriter.component.scss'
})
export class TypewriterComponent implements OnInit, OnDestroy {

    private languageService: LanguageService = inject(LanguageService);

    profesions: string[] = [];
    currentProfessionIndex: number = 0;
    fullText: string = '';
    displayedText: string = '';
    index: number = 0;
    speed: number = 300;

    constructor() {
        effect(() => {
            this.languageService.currentLang();
            this.updateProfessions();
            this.resetTypewriter();
        });
    }

    ngOnInit(): void {
        this.updateProfessions();
        this.typeWriter();
    }

    ngOnDestroy(): void {
        // No es necesario desuscribirse de los efectos
    }

    updateProfessions(): void {
        this.profesions = [
            this.languageService.translate('Desarrollador backend'),
            this.languageService.translate('Desarrollador frontend'),
            this.languageService.translate('Diseñador gráfico'),
        ];
        this.fullText = this.profesions[this.currentProfessionIndex];
    }

    resetTypewriter(): void {
        this.currentProfessionIndex = 0;
        this.fullText = this.profesions[this.currentProfessionIndex];
        console.log(this.fullText);
        this.displayedText = '';
        this.index = 0;
        this.typeWriter();
    }

    typeWriter(): void {
        if (this.index < this.fullText.length) {
            this.displayedText += this.fullText.charAt(this.index);
            this.index++;
            setTimeout(() => this.typeWriter(), this.speed);
        } else {
            this.currentProfessionIndex = (this.currentProfessionIndex + 1) % this.profesions.length;
            this.fullText = this.profesions[this.currentProfessionIndex];
            this.displayedText = '';
            this.index = 0;
            setTimeout(() => this.typeWriter(), this.speed);
        }
    }
}
