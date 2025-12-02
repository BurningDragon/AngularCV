import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { LicencesAndCertificatesComponent } from './licences-and-certificates/licences-and-certificates.component';
import { LanguagesAndSkillsComponent } from './languages-and-skills/languages-and-skills.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent },
    {path: 'workexperience', component: WorkExperienceComponent},
    {path: 'licences-and-certificates', component: LicencesAndCertificatesComponent},
    {path: 'languages-and-skills',component: LanguagesAndSkillsComponent}
];