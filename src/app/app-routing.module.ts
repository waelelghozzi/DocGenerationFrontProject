import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberDetailsComponent } from './member-details/member-details.component'; // Make sure the path is correct
import { HomeComponent } from './home/home.component'; 

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'details/:id', component: MemberDetailsComponent }, // Details page
  { path: '**', redirectTo: '' } // Redirect any unknown paths to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
