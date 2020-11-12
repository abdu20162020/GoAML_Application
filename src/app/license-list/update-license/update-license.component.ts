import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { License } from 'src/app/shared/license.new.model';
@Component({
  selector: 'app-update-license',
  templateUrl: './update-license.component.html',
  styleUrls: ['./update-license.component.css']
})
export class UpdateLicenseComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdateLicenseComponent>,@Inject(MAT_DIALOG_DATA) public license: License,private toastr: ToastrService) { }
  updateForm:FormGroup;
  ngOnInit(): void {
    this.iniForm();
  }
  private iniForm(){  
    this.createFormGroup();
  }
  createFormGroup(){
    this.updateForm= new FormGroup({
      'name': new FormControl(this.license.name, [Validators.required]),
      'expiration_date': new FormControl(this.license.expiration_date, [Validators.required]),
      'creation_date': new FormControl(this.license.creation_date, [Validators.required])

    });
  }
  onSubmit(){

    this.showSuccess();
    this.updateForm.reset(); 
    this.license=undefined;
    this.dialogRef.close(); 
  }
  closePop(){
    this.dialogRef.close(); 
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

