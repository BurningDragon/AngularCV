import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslatePipe} from "@ngx-translate/core";
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-projects',
  imports: [FieldsetModule, CommonModule, ButtonModule, TranslatePipe, DividerModule, TooltipModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  isPhone: boolean = false;
  isTablet: boolean = false;
  
  constructor(private responsive: BreakpointObserver){}

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
