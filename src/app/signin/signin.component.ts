import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from './user.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private userService:UserService) { }
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm= new FormGroup({
      'username': new FormControl(null,[Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]),
      'password': new FormControl(null, [Validators.required])
    });

  }
  onSubmit() {
    
    // const user =new User( this.signupForm.get('username').value,this.signupForm.get('password').value);
    // const responslogIn=this.userService.userLogin(user)
    this.signupForm.reset();

  }

}
