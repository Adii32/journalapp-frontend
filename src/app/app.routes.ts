import { Routes } from '@angular/router';
import { SingupUserComponent } from './singup-user/singup-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateJournalComponent } from './create-journal/create-journal.component';
import { authGuard } from './auth.guard';
import { ShowJournalComponent } from './show-journal/show-journal.component';
import { JournalDetailsComponent } from './journal-details/journal-details.component';
import { UpdateJournalComponent } from './update-journal/update-journal.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { JournalLikesComponent } from './journal-likes/journal-likes.component';
import { GetAllUsersComponent } from './get-all-users/get-all-users.component';
import { PendingRequestComponent } from './pending-request/pending-request.component';
import { GetAllFriendsComponent } from './get-all-friends/get-all-friends.component';
import { ViewFriendProfileComponent } from './view-friend-profile/view-friend-profile.component';

export const routes: Routes = [
  {path : 'register' , component : SingupUserComponent},
  {path : '',component : HomeComponent,canActivate : [authGuard] },
  {path : 'login', component : LoginComponent},
  {path : 'create-journal',component : CreateJournalComponent, canActivate : [authGuard]},
  {path : 'show-journal',component : ShowJournalComponent,canActivate : [authGuard]},
  {path : 'journal-details/:id' , component : JournalDetailsComponent,canActivate : [authGuard]},
  {path : 'update-journal/:id',component : UpdateJournalComponent,canActivate : [authGuard]},
  {path : 'forgot-password' , component : ForgotPasswordComponent},
  {path : 'reset-password',component : ResetPasswordComponent},
  {path : 'journalLikes/:id',component : JournalLikesComponent ,canActivate : [authGuard]},
{path : 'getAllUsers', component : GetAllUsersComponent,canActivate : [authGuard]},
{path : 'pendingRequest',component : PendingRequestComponent,canActivate : [authGuard]},
{path : 'getAllFriends',component : GetAllFriendsComponent,canActivate : [authGuard]},
{path : 'viewFriendPofile/:id',component : ViewFriendProfileComponent,canActivate : [authGuard]}
];
