import { Component, Input } from '@angular/core';
import { Fieldset } from 'primeng/fieldset';
import { BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-education-card',
  imports: [Fieldset],
  templateUrl: './education-card.component.html',
  styleUrl: './education-card.component.css'
})
export class EducationCardComponent {
  @Input({ required: true })
  course!: string;

  @Input({ required: true })
  institute!: string;

  @Input({ required: true })
  location!: string;

  @Input({ required: true })
  timespan!: string;

  @Input({ required: true })
  degree!: string;

  @Input()
  additionalInformation?: string;

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
