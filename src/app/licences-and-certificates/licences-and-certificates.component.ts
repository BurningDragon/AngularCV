import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { DividerModule } from 'primeng/divider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-licences-and-certificates',
  imports: [CardModule, TableModule, DividerModule, CommonModule],
  templateUrl: './licences-and-certificates.component.html',
  styleUrl: './licences-and-certificates.component.css'
})
export class LicencesAndCertificatesComponent {
  certificates: any[];
   isPhone: boolean = false;
    isTablet: boolean = false;

  constructor(private responsive: BreakpointObserver){
    this.certificates = [
      {
        name: "Professional Scrum Master I (PSM I)",
        organization: "Scrum.org",
        achieved: "januari 2021",
        expiration: "Geen vervaldatum"
      },
      {
        name: "AZ-900 Azure Fundamentals",
        organization: "Microsoft",
        achieved: "februari 2021",
        expiration: "Geen vervaldatum"
      },
      {
        name: "Azure Developer Associate",
        organization: "Microsoft",
        achieved: "maart 2021",
        expiration: "maart 2026"
      },
      {
        name: "Certified Professional for Requirements Engineering Foundation Level",
        organization: "IREB",
        achieved: "maart 2021",
        expiration: "Geen vervaldatum"
      },
      {
        name: "Certified Tester, Foundation Level",
        organization: "ISTQB",
        achieved: "maart 2021",
        expiration: "Geen vervaldatum"
      }
    ]
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
