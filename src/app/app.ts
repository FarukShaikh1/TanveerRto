import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'RTO services';
  isDarkMode: boolean = false;
  showThemeButton = true;

  ngOnInit() {
    this.initializeThemeFromStorage();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    try {
      localStorage.setItem('app-theme', this.isDarkMode ? 'dark' : 'light');
    } catch { }
    this.applyTheme();
  }

  private applyTheme() {
    const body = document.body;
    if (this.isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }

  initializeThemeFromStorage() {
    try {
      const stored = localStorage.getItem('app-theme');
      this.isDarkMode = stored === 'dark';
      this.applyTheme();
    } catch {
      this.isDarkMode = false;
    }
  }


  hideThemeButton() {
    this.showThemeButton = false;
  }

}
