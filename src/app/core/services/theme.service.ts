import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly themeKey = 'theme';
  public theme =  signal<string>('')

  getTheme(): void {
    const storedTheme = localStorage.getItem(this.themeKey);
    if (!storedTheme) {
      const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const detectedTheme = userPrefersDark ? 'dark' : 'light';
      localStorage.setItem(this.themeKey, detectedTheme);
      this.setTheme(detectedTheme);
    } else {
      this.setTheme(storedTheme);
    }
  }

  toggleTheme(): void {
    const theme = this.theme() === 'dark' ? 'light' : 'dark';
    localStorage.setItem(this.themeKey, theme);
    this.setTheme(theme);
  }


  private setTheme(theme: string): void {
    this.theme.set(theme);
  }
}
