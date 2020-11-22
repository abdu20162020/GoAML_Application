import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankListComponent } from '../bank-list/bank-list.component';
import { DashboardComponent } from '../home/dashboard/dashboard.component';
import { AddFormLicenseComponent } from '../license-list/add-form-license/add-form-license.component';
import { LicenseListComponent } from '../license-list/license-list.component';
import { SearchLicenseComponent } from '../license-list/search-license/search-license.component';
import { SigninComponent } from '../signin/signin.component';
import { UserListComponent } from '../user-list/user-list.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'dashboard',   component: DashboardComponent },
  { path: 'user-list',   component: UserListComponent },
  { path: 'bank-list',   component: BankListComponent },
  { path:'signin',       component:SigninComponent},
  { path :'license-list',component:LicenseListComponent,children:[
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'search-license'
  },
  {
    path: 'search-license',component:SearchLicenseComponent

  },
  {
    path: 'add-license',component:AddFormLicenseComponent
  }
]
},
  {path:'license-form',component:AddFormLicenseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
