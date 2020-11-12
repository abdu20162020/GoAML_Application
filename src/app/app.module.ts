import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './shared/user.service';
import { HomeComponent } from './home/home.component'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { StatisticalInfoComponent } from './home/dashboard/statistical-info/statistical-info.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { SideContentTableComponent } from './home/dashboard/side-content-table/side-content-table.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserFormComponent } from './user-list/add-user-form/add-user-form.component';
import { UpdateUserComponent } from './user-list/update-user/update-user.component';
import { BankListComponent } from './bank-list/bank-list.component';
import { BankService } from './shared/bank.service';
import { AddBankFormComponent } from './bank-list/add-bank-form/add-bank-form.component';
import { UpdateBankComponent } from './bank-list/update-bank/update-bank.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { LicenseListComponent } from './license-list/license-list.component';
import { AddFormLicenseComponent } from './license-list/add-form-license/add-form-license.component'
import { MatNativeDateModule } from '@angular/material/core';
import { SearchLicenseComponent } from './license-list/search-license/search-license.component';
import { UpdateLicenseComponent } from './license-list/update-license/update-license.component';
import { LicenseServiceTest } from './shared/license.test.service';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    StatisticalInfoComponent,
    SideContentTableComponent,
    UserListComponent,
    AddUserFormComponent,
    UpdateUserComponent,
    BankListComponent,
    AddBankFormComponent,
    UpdateBankComponent,
    DashboardComponent,
    LicenseListComponent,
    AddFormLicenseComponent,
    SearchLicenseComponent,
    UpdateLicenseComponent,
  
  ],
  
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    BrowserModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    GoogleChartsModule,
    AppRoutingModule,
    MatNativeDateModule,
    ToastrModule.forRoot(),

  ],
  providers: [UserService,BankService,MatDatepickerModule,LicenseServiceTest],
  bootstrap: [AppComponent]
})
export class AppModule { }
