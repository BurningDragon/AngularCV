import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';
import { BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CardModule, FieldsetModule, TableModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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
