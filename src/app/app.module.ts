import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import { NgxWhastappButtonModule } from "ngx-whatsapp-button";
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './shared/footer/footer.component';
import { YouTubePlayerModule } from "@angular/youtube-player";

import { AuthGuard } from './auth.guard';
import { TokenService } from './services/token.service';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        HttpClientModule,
        ReactiveFormsModule,
        YouTubePlayerModule,
        FontAwesomeModule,
        NgxWhastappButtonModule
    ],
    providers: [
        AuthGuard,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenService,
          multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
