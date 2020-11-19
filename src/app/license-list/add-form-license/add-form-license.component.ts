import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { License } from 'src/app/shared/license.new.model';
import { LicenseServiceTest } from 'src/app/shared/license.test.service';
import { UpdateLicenseComponent } from '../update-license/update-license.component';

@Component({
  selector: 'app-add-form-license',
  templateUrl: './add-form-license.component.html',
  styleUrls: ['./add-form-license.component.css']
})
export class AddFormLicenseComponent implements OnInit {
  addLicenseForm:FormGroup;
  constructor( private matDialog:MatDialog,private toastr: ToastrService,private licenseService:LicenseServiceTest,private router:Router) { }

  ngOnInit(): void {
    this.addLicenseForm= new FormGroup({
      'applicationName': new FormControl('GoAML',Validators.required),
      'created_data': new FormControl(null,Validators.required),
      'exppired_date': new FormControl(null,Validators.required),
      'bankName':new FormControl('CIB',Validators.required)
    });
  }
  onSubmit(){
    const license:License={ 
      id:0,
      applicationName:this.addLicenseForm.get('applicationName').value,
      creationDate:new Date(this.addLicenseForm.get('created_data').value),
      expirationDate:new Date(this.addLicenseForm.get('exppired_date').value)   
      };
      const bankName=this.addLicenseForm.get('bankName').value;
   delete license.id;
   this.licenseService.saveLicense(license,bankName).subscribe(
       (licenseRespose:License)=>{
         this.showSuccess();
         this.openUpdateDilog(licenseRespose);
       },
       (error)=>{
         console.log('error'+error);
       }
     );
  }
  foods=[
    {value: 'GoAML'},
    {value: 'ETL'},
    {value: 'AML'}
  ];
  Banks=[
    {value: 'CIB'},
    {value: 'QNB'},
    {value: 'ALHLY'}
  ];
  showSuccess() {
    
    this.toastr
    this.toastr.success('Added successfully!','',{
      "closeButton": true,
      "progressBar": true
    });
    this.toastr.clear;
  }
  openUpdateDilog(license:License){
    const DilogCon=new MatDialogConfig();
    DilogCon.disableClose=true;
    DilogCon.autoFocus=true;
    DilogCon.width="60%";
    DilogCon.data=license;
    let dialogRef=this.matDialog.open(UpdateLicenseComponent,DilogCon);
    dialogRef.afterClosed().subscribe(res => {
      this.router.navigate(['/license-list']);
    });

  }

}
