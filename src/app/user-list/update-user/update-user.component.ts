import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  // { id:0, userName:'Omar',  password:'1111',email:'Omer@gmail.com', creationDate:2001/20/10, birthDate:2001/20/10 }, 

  constructor(public dialogRef: MatDialogRef<UpdateUserComponent>,@Inject(MAT_DIALOG_DATA) public user: User,private toastr: ToastrService) { }
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
      'username': new FormControl(this.user.userName, [Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]),
      'email': new FormControl(this.user.email, [Validators.required,Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}")]),
      'password': new FormControl(this.user.password, [Validators.required]),
      'creationDate':new FormControl(this.user.creation_date),
      'birthDate':new FormControl(this.user.birth_date,[Validators.required])
    });
  }
  onSubmit(){
    this.updateForm.reset();  
    this.dialogRef.close(); 
    this.showSuccess();
  }
  closePop(){
    this.dialogRef.close(); 

  }
  showSuccess() {
    
    this.toastr.success('User updated successfully!','',{
      "closeButton": true,
      "progressBar": true
    });
    this.toastr.clear;
  }

}
