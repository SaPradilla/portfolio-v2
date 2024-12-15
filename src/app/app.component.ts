import { Component, inject, OnInit } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ThemeService } from './core/services/theme.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        HomeComponent,
        NavbarComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    title = 'portfolio';
    
    private service: ThemeService = inject(ThemeService);
    
    theme = this.service.theme;
    
    ngOnInit(): void {
        this.service.getTheme();

    }
}
