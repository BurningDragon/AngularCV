import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DividerModule } from 'primeng/divider';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: 'app-licences-and-certificates',
  imports: [CardModule, TableModule, DividerModule, CommonModule, TranslatePipe],
  templateUrl: './licences-and-certificates.component.html',
  styleUrl: './licences-and-certificates.component.css'
})
export class LicencesAndCertificatesComponent {
  certificates: any[];
  isPhone: boolean = false;
  isTablet: boolean = false;

  constructor(private responsive: BreakpointObserver) {
    this.certificates = [
      {
        name: "Professional Scrum Master I (PSM I)",
        organization: "Scrum.org",
        achievedMonth: "certificates.january",
        achievedYear: "2021",
        expirationMonth: "certificates.no-expiration-date",
        expirationYear: null
      },
      {
        name: "AZ-900 Azure Fundamentals",
        organization: "Microsoft",
        achievedMonth: "certificates.february",
        achievedYear: "2021",
        expirationMonth: "certificates.no-expiration-date",
        expirationYear: null
      },
      {
        name: "Azure Developer Associate",
        organization: "Microsoft",
        achievedMonth: "certificates.march",
        achievedYear: "2021",
        expirationMonth: "certificates.march",
        expirationYear: "2027"
      },
      {
        name: "Certified Professional for Requirements Engineering Foundation Level",
        organization: "IREB",
        achievedMonth: "certificates.march",
        achievedYear: "2021",
        expirationMonth: "certificates.no-expiration-date",
        expirationYear: null
      },
      {
        name: "Certified Tester, Foundation Level",
        organization: "ISTQB",
        achievedMonth: "certificates.march",
        achievedYear: "2021",
        expirationMonth: "certificates.no-expiration-date",
        expirationYear: null
      }
    ]
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
