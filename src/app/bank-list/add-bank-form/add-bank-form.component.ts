import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-bank-form',
  templateUrl: './add-bank-form.component.html',
  styleUrls: ['./add-bank-form.component.css']
})
export class AddBankFormComponent implements OnInit {

  addBankForm:FormGroup;
  constructor(public dialogRef: MatDialogRef<AddBankFormComponent>) { }
  //to hide and show password
  hide = true;

 

  ngOnInit(): void {
   this.addBankForm= new FormGroup({
      'bankname': new FormControl(null,Validators.required),
      'country': new FormControl(null,Validators.required),
      'userId': new FormControl(null, [Validators.required])
    });
  }
  onSubmit(){
    this.addBankForm.reset();
    this.dialogRef.close();
  }

}
