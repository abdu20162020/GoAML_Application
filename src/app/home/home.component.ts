import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userLogedIn=false;
  open='home';
  constructor(private userService:UserService,private router:Router,private toastr: ToastrService) {}
  ngOnInit(): void {
    this.userService.userlogIn.subscribe(
      (id:number)=>{
         this.userLogedIn=true;
         this.router.navigate(['/dashboard']); 
         this.showSuccess()
      }
    );
  }
  onClick(){
    this.router.navigate(['/']);
    this.userLogedIn=false;
  }
  showSuccess() {  
    this.toastr.success('User LogedIn successfully!','',{"closeButton": true,"progressBar": true});
    this.toastr.clear;
  }
}
