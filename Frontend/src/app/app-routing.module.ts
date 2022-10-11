import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { ApplicationsComponent } from './moderator/applications/applications.component';
import { HeaderApplicationsComponent } from './moderator/header-applications/header-applications.component';
import { HeaderHistoryComponent } from './moderator/header-history/header-history.component';
import { HistoryComponent } from './moderator/history/history.component';
import { ModeratorHomeComponent } from './moderator/moderator-home/moderator-home.component';
import { NotificationsComponent } from './moderator/notifications/notifications.component';
import { ApplyComponent } from './student/apply/apply.component';
import { StatusComponent } from './student/status/status.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { StudentComponent } from './student/student/student.component';
import { NotifiHeaderComponent } from './moderator/notifi-header/notifi-header.component';
import { StudNotificationsComponent } from './student/stud-notifications/stud-notifications.component';
import { SignUPComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  
  { path: '', component: LoginComponent },
  { path: 'newpassword', component: ForgotComponent },
  {
    path: 'student/:id',
    canActivate: [AuthGuard],
    component: StudentComponent,
    children: [
      { path: '', component: StudentHomeComponent },
      { path: 'apply', component: ApplyComponent },
      { path: 'status', component: StatusComponent },
      { path: 'notification', component: StudNotificationsComponent },
    ],
  },
  {
    path: 'professor/:id',
    canActivate: [AuthGuard],
    component: ModeratorHomeComponent,
    children: [
      {
        path: '',
        component: ApplicationsComponent,
        children: [{ path: '', component: HeaderApplicationsComponent }],
      },
      {
        path: 'history',
        component: HistoryComponent,
        children: [{ path: '', component: HeaderHistoryComponent }],
      },
      {
        path: 'notifications',
        component: NotificationsComponent,
        children: [{ path: '', component: NotifiHeaderComponent }],
      },
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
