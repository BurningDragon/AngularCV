import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicencesAndCertificatesComponent } from './licences-and-certificates.component';

describe('LicencesAndCertificatesComponent', () => {
  let component: LicencesAndCertificatesComponent;
  let fixture: ComponentFixture<LicencesAndCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicencesAndCertificatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicencesAndCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
