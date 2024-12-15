import { Component, inject } from '@angular/core';
import { TypewriterComponent } from '../../components/typewriter/typewriter.component';
import { LanguageService } from '../../core/services/language.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [TypewriterComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    
    private langService: LanguageService = inject(LanguageService);

    translate(key: string): string {
        return this.langService.translate(key);
    }
}
