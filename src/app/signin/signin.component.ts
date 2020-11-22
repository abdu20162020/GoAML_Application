import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User} from '../shared/user.model'
import { UserService } from '../shared/user.service';
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
     const userName=this.signupForm.get('username').value;
     const password=this.signupForm.get('password').value;
     this.userService.userLogIn(userName,password).subscribe(
       (user:User)=>{
        if(user!==null){
         this.userService.userlogIn.emit(user.id);
         localStorage.setItem('user',JSON.stringify(user));
        }
       },
       (error)=>{
        console.log('Error  In LogIn');
       }
     );
    this.signupForm.reset();
  }
}