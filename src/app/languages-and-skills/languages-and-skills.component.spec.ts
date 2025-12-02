import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesAndSkillsComponent } from './languages-and-skills.component';

describe('LanguagesAndSkillsComponent', () => {
  let component: LanguagesAndSkillsComponent;
  let fixture: ComponentFixture<LanguagesAndSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagesAndSkillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguagesAndSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
