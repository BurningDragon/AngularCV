import { Component } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { ProgressBar } from 'primeng/progressbar';
import { BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-languages-and-skills',
  imports: [AccordionModule, CardModule, ProgressBar, CommonModule, TranslatePipe],
  templateUrl: './languages-and-skills.component.html',
  styleUrl: './languages-and-skills.component.css'
})
export class LanguagesAndSkillsComponent {
      programmingLanguages: any[];
      languages: any[];
      skills: any[];
      isPhone: boolean = false;
        isTablet: boolean = false;
      
        ngOnInit() {
          this.responsive.observe([Breakpoints.Handset]).subscribe(result => {
            this.isPhone = false;
      
            if(result.matches){
              this.isPhone = true;
            }
          });
      
           this.responsive.observe([Breakpoints.WebPortrait, Breakpoints.Large]).subscribe(result => {
            this.isTablet = false;
      
            if(result.matches){
              this.isTablet = true;
            }
          });
        }

      constructor(private responsive: BreakpointObserver){
        this.programmingLanguages = [
          {
            name: "C#"
          },
          {
            name: "ASP.NET"
          },
          {
            name: "SQL",
            progress: '40'
          },
          {
            name: "JavaScript"
          },
          {
            name: "HTML/CSS"
          }
        ];

        this.languages = [
          {
            name: "nl-skills"
          },
          {
            name: "en-skills"
          }
        ];

        this.skills = [
           {
            name: "Scrum"
          },
          {
            name: "Git"
          }
        ];
      }
}
