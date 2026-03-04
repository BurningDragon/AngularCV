import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { Select } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TranslateService, TranslatePipe, _ } from "@ngx-translate/core";
import { ToolbarModule } from 'primeng/toolbar';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenubarModule, ToggleSwitchModule, FormsModule, Select, TranslatePipe, ToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyCV';
  items: MenuItem[] = [];
  checked = false;
  languages = ["en", "nl"];
  currentLanguage = 'en';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(this.languages);

    const savedLanguage = localStorage.getItem('language') || 'en';
    this.translate.setFallbackLang(savedLanguage);
  }

  ngOnInit() {
    const savedLanguage = localStorage.getItem('language') || 'en';
    this.switchLanguage(savedLanguage);
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    if (element != null) element.classList.toggle('darkmode');
  }

  switchLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.setFallbackLang(language);
    this.translate.use(language);
    localStorage.setItem('language', language);
    this.initializeItems();
  }

  async initializeItems() {
    await firstValueFrom(this.translate.get("languages.en"));
   this.items = [
          {
            label: this.translate.instant('routes.home'),
            icon: 'pi pi-home',
            routerLink: '/home'
          },
          {
            label: this.translate.instant('routes.workexperience'),
            icon: 'pi pi-briefcase',
            routerLink: '/workexperience'
          },
          {
            label: this.translate.instant('routes.licences-and-certificates'),
            icon: 'pi pi-list-check',
            routerLink: '/licences-and-certificates'
          },
          {
            label: this.translate.instant('routes.languages-and-skills'),
            icon: 'pi pi-code',
            routerLink: '/languages-and-skills'
          }
        ];
      }
}
