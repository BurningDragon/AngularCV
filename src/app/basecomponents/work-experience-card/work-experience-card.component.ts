import { Component, Input } from '@angular/core';
import { Fieldset } from 'primeng/fieldset';
import { BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-work-experience-card',
  imports: [Fieldset],
  templateUrl: './work-experience-card.component.html',
  styleUrl: './work-experience-card.component.css'
})
export class WorkExperienceCardComponent {
  @Input({ required: true })
  functionTitle!: string;

  @Input({ required: true })
  companyName!: string;

  @Input({ required: true })
  timespan!: string;
  
  @Input({ required: true })
  description!: string;

  @Input({ required: true })
  location!: string;

   isPhone: boolean = false;
   isTablet: boolean = false;

     constructor(private responsive: BreakpointObserver){}
   
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
