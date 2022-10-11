import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http';
import { QRCodeModule } from 'angularx-qrcode';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { OrderModule } from 'ngx-order-pipe';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { ModeratorHomeComponent } from './moderator/moderator-home/moderator-home.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { HeaderComponent } from './student/header/header.component';
import { ApplyComponent } from './student/apply/apply.component';
import { StudentComponent } from './student/student/student.component';
import { ForgotComponent } from './forgot/forgot.component';
import { StatusComponent } from './student/status/status.component';
import { HeaderModComponent } from './moderator/header-mod/header-mod.component';
import { HeaderHistoryComponent } from './moderator/header-history/header-history.component';
import { HeaderApplicationsComponent } from './moderator/header-applications/header-applications.component';
import { ApplicationsComponent } from './moderator/applications/applications.component';
import { HistoryComponent } from './moderator/history/history.component';
import { NotifiHeaderComponent } from './moderator/notifi-header/notifi-header.component';
import { NotificationsComponent } from './moderator/notifications/notifications.component';
import { StudNotificationsComponent } from './student/stud-notifications/stud-notifications.component';
import { SignUPComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ModeratorHomeComponent,
    StudentHomeComponent,
    HeaderComponent,
    ApplyComponent,
    StudentComponent,
    ForgotComponent,
    StatusComponent,
    HeaderModComponent,
    HeaderHistoryComponent,
    HeaderApplicationsComponent,
    ApplicationsComponent,
    HistoryComponent,
    NotifiHeaderComponent,
    NotificationsComponent,
    StudNotificationsComponent,
    SignUPComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    QRCodeModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    FilterPipeModule,
    OrderModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
