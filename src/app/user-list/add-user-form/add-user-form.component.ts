import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {
  addUserForm:FormGroup;
  constructor(public dialogRef: MatDialogRef<AddUserFormComponent>,private toastr: ToastrService,
              private userService:UserService) { }
  hide = true;
  ngOnInit(): void {
    this.addUserForm= new FormGroup({
      'username': new FormControl(null,[Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]),
      'email': new FormControl(null,[Validators.required,Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}")]),
      'password': new FormControl(null, [Validators.required]),
      'birthDate': new FormControl(null,[Validators.required])
    });
  }
  onSubmit(){
    const user:User={ 
       id:0,
       userName:this.addUserForm.get('username').value,
       password:this.addUserForm.get('password').value,
       email:this.addUserForm.get('email').value,
       creationDate:new Date(this.addUserForm.get('birthDate').value),
       birthDate:new Date(this.addUserForm.get('birthDate').value)
      };
    delete user.id;
    this.userService.saveUser(user).subscribe(
        (user2:User)=>{
          this.showSuccess();
          this.addUserForm.reset();
          this.dialogRef.close({data:user2});
        },
        (error)=>{
          console.log('error'+error);
        }
    );
  }
  closePop(){
    this.dialogRef.close({data:undefined}); 
    this.addUserForm.reset();
  }
  showSuccess() {  
    this.toastr.success('User added successfully!','',{"closeButton": true,"progressBar": true});
    this.toastr.clear;
  }
}
