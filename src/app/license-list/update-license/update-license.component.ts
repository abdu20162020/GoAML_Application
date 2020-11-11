import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { License } from 'src/app/shared/license.new.model';
@Component({
  selector: 'app-update-license',
  templateUrl: './update-license.component.html',
  styleUrls: ['./update-license.component.css']
})
export class UpdateLicenseComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdateLicenseComponent>,@Inject(MAT_DIALOG_DATA) public license: License) { }
  updateForm:FormGroup;
  ngOnInit(): void {
    this.iniForm();
  }
  private iniForm(){  
    this.createFormGroup();
  }
  createFormGroup(){
    this.updateForm= new FormGroup({
      'Licensename': new FormControl(this.license.bankName, [Validators.required]),
      'country': new FormControl(this.license.country, [Validators.required]),
      'userId': new FormControl(this.license.userId, [Validators.required]), 
    });
  }
  onSubmit(){
    
    this.updateForm.reset(); 
    this.license=undefined;
    this.dialogRef.close(); 
  }
}
