import { Component } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { ProgressBar } from 'primeng/progressbar';
import { BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-languages-and-skills',
  imports: [AccordionModule, CardModule, ProgressBar, CommonModule],
  templateUrl: './languages-and-skills.component.html',
  styleUrl: './languages-and-skills.component.css'
})
export class LanguagesAndSkillsComponent {
      programmingLanguages: any[];
      languages: any[];
      skills: any[];
      competences: any[];
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
            name: "C#",
            progress: '60'
          },
          {
            name: "ASP.NET",
            progress: '50'
          },
          {
            name: "SQL",
            progress: '40'
          },
          {
            name: "JavaScript",
            progress: '40'
          },
          {
            name: "HTML/CSS",
            progress: '40'
          }
        ];

        this.languages = [
          {
            name: "Nederlands",
            progress: '90'
          },
          {
            name: "Engels",
            progress: '90'
          }
        ];

        this.skills = [
           {
            name: "Scrum",
            progress: '60'
          },
          {
            name: "Git",
            progress: '50'
          }
        ];

        this.competences = ["Luisterend", "Betrouwbaar", "Doorzettingsvermogen", "Leergierig"];
      }
}
