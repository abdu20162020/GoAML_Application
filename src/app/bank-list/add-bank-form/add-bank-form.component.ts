import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-bank-form',
  templateUrl: './add-bank-form.component.html',
  styleUrls: ['./add-bank-form.component.css']
})
export class AddBankFormComponent implements OnInit {

  addBankForm:FormGroup;
  constructor(public dialogRef: MatDialogRef<AddBankFormComponent>,private toastr: ToastrService) { }
  //to hide and show password
  hide = true;
  ngOnInit(): void {
   this.addBankForm= new FormGroup({
      'bankname': new FormControl(null,Validators.required),
      'country': new FormControl(null,Validators.required),
    });
  }
  onSubmit(){
    this.showSuccess();
    this.addBankForm.reset();
    this.dialogRef.close();
  }
  closePop(){
    this.dialogRef.close();
  }
  showSuccess() {
    
    this.toastr
    this.toastr.success('Added successfully!','',{
      "closeButton": true,
      "progressBar": true
    });
    this.toastr.clear;
  }

}
