import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { PricesComponent } from './components/prices/prices.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ProjectsAdminComponent } from './components/projects-admin/projects-admin.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ErrorComponent } from './components/error/error.component';
import { PrimerVistaComponent } from './components/primer-vista/primer-vista.component';
import { AerialComponent } from './components/aerial/aerial.component';
import { Video3DComponent } from './components/video3-d/video3-d.component';
import { FormcontactsComponent } from './components/formcontacts/formcontacts.component'
import { FormcontactdetailComponent } from './components/formcontactdetail/formcontactdetail.component';
import { FormcontacteditComponent } from './components/formcontactedit/formcontactedit.component';
import { CreateminiprojectComponent } from './components/createminiproject/createminiproject.component';
import { MiniprojectadminComponent } from './components/miniprojectadmin/miniprojectadmin.component';
import { EditminiprojectComponent } from './components/editminiproject/editminiproject.component';
import { MiniprojectdetailComponent } from './components/miniprojectdetail/miniprojectdetail.component';
import { MiniprojectsecondviewComponent } from './components/miniprojectsecondview/miniprojectsecondview.component';
import { IndexComponent } from './components/index/index.component';
import { AuthGuard } from './auth.guard';

const routes: Routes =[
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index',                        component: IndexComponent },
    { path: 'about',                        component: LandingComponent },
    { path: 'examples/login',               component: LoginComponent },
    { path: 'contact',                      component: ProfileComponent },
    { path: 'portfolio',                    component: PortfolioComponent },
    { path: 'prices',                       component: PricesComponent},
    { path: 'pvista/:id',                   component: PrimerVistaComponent},
    { path: 'aerial/:id',                   component: AerialComponent},
    { path: '3dvideo/:id',                  component: Video3DComponent},
    { path: 'project/detail/:id',           component: MiniprojectdetailComponent},
    { path: 'project/detail/second/:id',    component: MiniprojectsecondviewComponent},
    { path: 'create/project',               component: CreateComponent, canActivate: [AuthGuard]},
    { path: 'create/miniproject',           component: CreateminiprojectComponent, canActivate: [AuthGuard]},
    { path: 'projects/projects',            component: ProjectsAdminComponent, canActivate: [AuthGuard]},
    { path: 'projects/miniprojects',        component: MiniprojectadminComponent, canActivate: [AuthGuard]},
    { path: 'edit/project/:id',             component: EditComponent, canActivate: [AuthGuard]},
    { path: 'edit/miniproject/:id',         component: EditminiprojectComponent, canActivate: [AuthGuard]},
    { path: 'messages',                     component: FormcontactsComponent, canActivate: [AuthGuard]},
    { path: 'messages/:id',                 component: FormcontactdetailComponent, canActivate: [AuthGuard]},
    { path: 'messages/edit/:id',            component: FormcontacteditComponent,  canActivate: [AuthGuard]},
    { path: '**',                           component: ErrorComponent}
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
