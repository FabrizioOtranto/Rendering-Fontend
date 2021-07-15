import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { NgbdModalBasic } from './modal/modal.component';
import { PricesComponent } from './prices/prices.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ErrorComponent } from './error/error.component';
import { ProjectsAdminComponent } from './projects-admin/projects-admin.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PrimerVistaComponent } from './primer-vista/primer-vista.component';
import { AerialComponent } from './aerial/aerial.component';
import { Video3DComponent } from './video3-d/video3-d.component';
import { FormcontactsComponent } from './formcontacts/formcontacts.component';
import { FormcontactdetailComponent } from './formcontactdetail/formcontactdetail.component';
import { FormcontacteditComponent } from './formcontactedit/formcontactedit.component';
import { CreateminiprojectComponent } from './createminiproject/createminiproject.component';
import { EditminiprojectComponent } from './editminiproject/editminiproject.component';
import { MiniprojectadminComponent } from './miniprojectadmin/miniprojectadmin.component';
import { MiniprojectdetailComponent } from './miniprojectdetail/miniprojectdetail.component';
import { MiniprojectsecondviewComponent } from './miniprojectsecondview/miniprojectsecondview.component';
import { IndexComponent } from './index/index.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module
      ],
    declarations: [
        ComponentsComponent,
        NgbdModalBasic,
        PricesComponent,
        CreateComponent,
        EditComponent,
        ErrorComponent,
        ProjectsAdminComponent,
        PortfolioComponent,
        PrimerVistaComponent,
        AerialComponent,
        Video3DComponent,
        FormcontactsComponent,
        FormcontactdetailComponent,
        FormcontacteditComponent,
        CreateminiprojectComponent,
        EditminiprojectComponent,
        MiniprojectadminComponent,
        MiniprojectdetailComponent,
        MiniprojectsecondviewComponent,
        IndexComponent,
    ],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
