import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { WorkExperienceCardComponent } from "../basecomponents/work-experience-card/work-experience-card.component";
import { EducationCardComponent } from '../basecomponents/education-card/education-card.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-experience',
  imports: [TimelineModule, WorkExperienceCardComponent, CardModule, EducationCardComponent, CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  experience: any[];
  isPhone: boolean = false;
  isTablet: boolean = false;

  constructor(private responsive: BreakpointObserver) {
    this.experience = [
      {
        functionTitle: "work.nocore.function-title",
        companyName: "Nocore Group BV",
        location: "Uden",
        timespan: "work.nocore.timespan",
        description: "work.nocore.description",
        icon: "pi pi-briefcase",
        isEducation: false
      },
      {
        functionTitle: "work.anycoin.function-title",
        companyName: "Anycoin Direct",
        location: "Veghel",
        timespan: "work.anycoin.timespan",
        description: "work.anycoin.description",
        icon: "pi pi-briefcase",
        isEducation: false
      },
      {
        functionTitle: "work.ycn.function-title",
        companyName: "Young Capital Next",
        location: "Eindhoven",
        timespan: "work.ycn.timespan",
        description: "work.ycn.description",
        icon: "pi pi-briefcase",
        isEducation: false
      },
      {
        functionTitle: "work.whyellow.function-title",
        companyName: "Whyellow",
        location: "Eindhoven",
        timespan: "work.whyellow.timespan",
        description: "work.whyellow.description", icon: "pi pi-briefcase",
        isEducation: false
      },
      {
        course: "education.fontys.course",
        institute: "Fontys Hogescholen",
        location: "Eindhoven",
        degree: "education.degree-obtained",
        timespan: "2015 - 2020",
        additionalInformation: "education.fontys.additional-information",
        isEducation: true,
        icon: "pi pi-graduation-cap",
      },
      {
        course: "education.leijgraaf.course",
        institute: "ROC de Leijgraaf",
        location: "Veghel",
       degree: "education.degree-obtained",
        timespan: "2011 - 2015",
        additionalInformation: "",
        isEducation: true,
        icon: "pi pi-graduation-cap",
      },
      {
        course: "education.vmbo.course",
        institute: "Udens College VMBO",
        location: "Uden",
        degree: "education.degree-obtained",
        timespan: "2007 - 2011",
        additionalInformation: "",
        isEducation: true,
        icon: "pi pi-graduation-cap",
      }
    ];
  }

  ngOnInit() {
    this.responsive.observe([Breakpoints.Handset]).subscribe(result => {
      this.isPhone = false;

      if (result.matches) {
        this.isPhone = true;
      }
    });

    this.responsive.observe([Breakpoints.WebPortrait, Breakpoints.Large]).subscribe(result => {
      this.isTablet = false;

      if (result.matches) {
        this.isTablet = true;
      }
    });
  }
}
