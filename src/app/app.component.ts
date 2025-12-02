import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenubarModule, ToggleSwitchModule, FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyCV';
  items : MenuItem[] | undefined;
  checked = false;

  ngOnInit() {
    this.initializeItems();
    this.selectLanguage();
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    if(element != null) element.classList.toggle('darkmode');
  }

  selectLanguage(){
        this.initializeItems();
  }

  initializeItems() {
    this.items = [
        {
          label: 'Home',
          icon: 'pi pi-home',
          routerLink: '/home'
        },
        {
          label: 'Werkervaring en Opleidingen',
          icon: 'pi pi-briefcase',
          routerLink: '/workexperience'
        },
        {
          label: 'Licenties en Certificaten',
          icon: 'pi pi-list-check',
          routerLink: '/licences-and-certificates'
        },
        {
          label: 'Talen, Competenties en Vaardigheden',
          icon: 'pi pi-code',
          routerLink: '/languages-and-skills'
        }
      ];
    }
}
