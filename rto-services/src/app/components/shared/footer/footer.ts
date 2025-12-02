import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
  standalone: true
})
export class Footer {
  title = 'Rto Services';
  isDarkMode: boolean = false;
  showThemeButton = true;
  contact = {
    address: 'Amravati, Maharashtra, India',
    location: 'Indira Chauk, Nerpinglai',
    mobile: '+918888869198',
    whatsapp: '+918888869198',
    email: 'tanveershaikhlucky@gmail.com',
    website: 'www.rto-services.com'};

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

