import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { License } from 'src/app/shared/license.new.model';
import { LicenseServiceTest } from 'src/app/shared/license.test.service';
@Component({
  selector: 'app-update-license',
  templateUrl: './update-license.component.html',
  styleUrls: ['./update-license.component.css']
})
export class UpdateLicenseComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdateLicenseComponent>,@Inject(MAT_DIALOG_DATA) public licenseData: License,private toastr: ToastrService,
  private licenseService:LicenseServiceTest,private router:Router) { }
  updateForm:FormGroup;
  ngOnInit(): void {
    this.iniForm();
  }
  private iniForm(){  
    
    this.createFormGroup();
  }
  createFormGroup(){
    this.updateForm= new FormGroup({
      'applicationName': new FormControl(this.licenseData.applicationName, [Validators.required]),
      'expirationDate': new FormControl(this.licenseData.expirationDate, [Validators.required]),
      'creationDate': new FormControl(this.licenseData.creationDate, [Validators.required]),
    });
  }
  onSubmit(){
    const license:License={ 
      id:0,
      applicationName:this.updateForm.get('applicationName').value,
      expirationDate:this.updateForm.get('expirationDate').value,
      creationDate:this.updateForm.get('creationDate').value,
      };
   delete license.id;
   this.licenseService.updateLicense(license,this.licenseData.id).subscribe(
     (licenseRespose:License)=>{    
      this.showSuccess();  
      this.dialogRef.close({data:licenseRespose}); 
      this.updateForm.reset();      
     },
     (error)=>{
      console.log('ERROR IN update License '+error)
     }
   );

  }
  closePop(){
    this.dialogRef.close(); 
    this.router.navigate(['/license-list']);

  }
  foods=[
    {value: 'GoAML'},
    {value: 'ETL'},
    {value: 'AML'}
  ];
  showSuccess() {    
    this.toastr
    this.toastr.success('Updated successfully!','',{
      "closeButton": true,
      "progressBar": true
    });
    this.toastr.clear;
  }
}

