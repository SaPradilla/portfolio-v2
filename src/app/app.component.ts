import { Component, inject, OnInit } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ThemeService } from './core/services/theme.service';
import { AboutComponent } from './pages/about/about.component';
import { NewsComponent } from "./components/news/news.component";
import { SkillsComponent } from './pages/skills/skills.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    NewsComponent,
    SkillsComponent,
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
