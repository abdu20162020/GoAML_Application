import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs/internal/Subscription';
import { User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private userService:UserService ,public dialogRef: MatDialogRef<UpdateUserComponent>,@Inject(MAT_DIALOG_DATA) public user: User) { }
  updateForm:FormGroup;
  subscription: Subscription;
  hide=false;
  ngOnInit(): void {
    this.iniForm();
  }
  
  private iniForm(){
    
    
      this.createFormGroup();
      
  }
  createFormGroup(){
    this.updateForm= new FormGroup({
      'username': new FormControl(this.user.userName, [Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]),
      'email': new FormControl(this.user.email, [Validators.required,Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}")]),
      'password': new FormControl(this.user.password, [Validators.required]),
      
    });
  }
  onSubmit(){
    this.updateForm.reset();  
    this.dialogRef.close(); 
  }

}
