import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  // { id:0, userName:'Omar',  password:'1111',email:'Omer@gmail.com', creationDate:2001/20/10, birthDate:2001/20/10 }, 

  constructor(public dialogRef: MatDialogRef<UpdateUserComponent>,@Optional() @Inject(MAT_DIALOG_DATA) public userData: User,private toastr: ToastrService,
  private userService :UserService) { }
  updateForm:FormGroup;
  hide=false;
  ngOnInit(): void {
    this.iniForm();
  }
  private iniForm(){ 
      this.createFormGroup();   
  }
  createFormGroup(){
    this.updateForm= new FormGroup({
      'username': new FormControl(this.userData.userName, [Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]),
      'email': new FormControl(this.userData.email, [Validators.required,Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}")]),
      'password': new FormControl(this.userData.password, [Validators.required]),
      'creationDate':new FormControl(this.userData.creationDate),
      'birthDate':new FormControl(this.userData.birthDate,[Validators.required])
    });
  }
  onSubmit(){
    const user:User={ 
      id:0,
      userName:this.updateForm.get('username').value,
      password:this.updateForm.get('password').value,
      email:this.updateForm.get('email').value,
      creationDate:new Date(this.updateForm.get('birthDate').value),
      birthDate:new Date(this.updateForm.get('birthDate').value)
      };
   delete user.id;
   this.userService.updateUer(user,this.userData.id).subscribe(
     (userRes:User)=>{
      
      this.showSuccess();  
      this.dialogRef.close({data:userRes}); 
      this.updateForm.reset();
      
     }
   );
  }
  closePop(){
    this.dialogRef.close({data:undefined}); 

  }
  showSuccess() {
    
    this.toastr.success('User updated successfully!','',{
      "closeButton": true,
      "progressBar": true
    });
    this.toastr.clear;
  }

}
