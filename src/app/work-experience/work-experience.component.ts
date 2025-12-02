import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { WorkExperienceCardComponent } from "../basecomponents/work-experience-card/work-experience-card.component";
import { EducationCardComponent } from '../basecomponents/education-card/education-card.component';
import { BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-experience',
  imports: [TimelineModule, WorkExperienceCardComponent, CardModule, EducationCardComponent, CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  experience:any[];
  isPhone: boolean = false;
  isTablet: boolean = false;
  
  constructor(private responsive: BreakpointObserver){
    this.experience = [
      {
        functionTitle: "Software Ontwikkelaar", 
        companyName: "Nocore Group BV", 
        location: "Uden",
        timespan: "oktober 2022 - juli 2024",
        description: `Bij Nocore heb ik gewerkt aan hun verloningsplatform dat is geschreven in ASP.NET met een MSSQL database. 
                      Hierbij heb ik nieuwe functionaliteiten toegevoegd en bugs opgelost. 
                      Ik heb ook 2e lijns support geleverd om problemen waar klanten tegenaan liepen op te lossen.`, 
        icon: "pi pi-briefcase",
        isEducation: false
      },
      {
        functionTitle: "Developer", 
        companyName: "Anycoin Direct", 
        location: "Veghel", 
        timespan: "augustus 2021 - augustus 2022", 
        description: `Bij Anycoin Direct heb ik nieuwe functionaliteiten toegevoegd en bugfixes gedaan. Ik heb onder andere gewerkt met C#/.NET en Angular.
                      Daarnaast heb ik hier kennis gemaakt met Event Sourcing en CQRS`, 
        icon: "pi pi-briefcase",
        isEducation: false
      },
      {
        functionTitle: "IT Trainee", 
        companyName: "Young Capital Next", 
        location: "Eindhoven", 
        timespan: "januari 2021 - juni 2021", 
        description: `Bij Young Capital Next heb ik verschillende trainingen gevolgd en daarbij verschillende certificaten behaald.`, 
        icon: "pi pi-briefcase",
        isEducation: false
      },
      {
        functionTitle: "Afstudeer stagiaire ICT", 
        companyName: "Whyellow", 
        location: "Eindhoven", 
        timespan: "september 2019 - januari 2020", 
        description: `Bij deze afstudeerstage heb ik onderzoek gedaan naar de mogelijkheden en beperkingen van locatiegebaseerde Augmented Reality met ARCore in een Android app. 
                      Hierbij heb ik ook een uitbreiding gemaakt voor een Android app als voorbeeld van de mogelijkheden.
                      Voor de Android app heb ik gewerkt met Kotlin en om het project in goede banen te leiden is er gebruik gemaakt van Scrum waarbij alles werd bijgehouden in Jira.`, 
        icon: "pi pi-briefcase",
        isEducation: false
      },
      {
        course: "HBO ICT Software Engineering",
        institute: "Fontys Hogescholen",
        location: "Eindhoven",
        degree: "Behaald",
        timespan: "2015-2020",
        additionalInformation: "Minor Virtual Reality gevolgd",
        isEducation: true,
        icon: "pi pi-graduation-cap",
      },
      {
        course: "MBO Onderwijsassistent",
        institute: "ROC de Leijgraaf",
        location: "Veghel",
        degree: "Behaald",
        timespan: "2011-2015",
        additionalInformation: "",
        isEducation: true,
        icon: "pi pi-graduation-cap",
      },
      {
        course: "VMBO Theoretisch",
        institute: "Udens College VMBO",
        location: "Uden",
        degree: "Behaald",
        timespan: "2007-2011",
        additionalInformation: "",
        isEducation: true,
        icon: "pi pi-graduation-cap",
      }
    ];
  }

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
}
