import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {
  addUserForm:FormGroup;
  constructor(public dialogRef: MatDialogRef<AddUserFormComponent>) { }
  //to hide and show password
  hide = true;

 

  ngOnInit(): void {
   this.addUserForm= new FormGroup({
      'username': new FormControl(null,[Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]),
      'email': new FormControl(null,[Validators.required,Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}")]),
      'password': new FormControl(null, [Validators.required])
    });
  }
  onSubmit(){
    this.addUserForm.reset();
    this.dialogRef.close();
  }

}
