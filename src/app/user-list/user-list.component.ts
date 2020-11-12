import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {User} from '../shared/user.model'
import { UserService } from '../shared/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import { MatSort } from '@angular/material/sort';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

 

export class UserListComponent implements OnInit {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource= new MatTableDataSource<User>();
  usersData: User[]=[];
  undo=true;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    }
  constructor( private userService:UserService,private snackBar: MatSnackBar,private matDialog:MatDialog,private toastr: ToastrService) { }
  ngOnInit(): void { 
   this.usersData=this.userService.getUsersTable();
   this.dataSource.data=this.usersData;
  }  
  displayedColumns: string[] = [ 'userName', 'password', 'email','creation_date','birth_date','Update','Delete'];
  onUpdate(user:User){
    const DilogCon=new MatDialogConfig();
    DilogCon.disableClose=true;
    DilogCon.autoFocus=true;
    DilogCon.width="60%";
    DilogCon.data=user;
    this.matDialog.open(UpdateUserComponent,DilogCon);
  }
  onDelete(user:User){ 
    let mass='the user '+user.userName+' Deleted';
    this.undo = false;
    let snackBarRef = this.snackBar.open(mass, 'Undo', {
      duration: 2000
    });
    setTimeout( () => {
      if(!this.undo){
        this.deletUser(user);
        this.showSuccess();
        this.snackBar.dismiss();
      }
    }, 2000);
    snackBarRef.onAction().subscribe(() => {
      this.undo = true;
    });
  }
  deletUser(user:User){
    this.userService.deleteUser(user);
  }
  onClick(){
    const DilogCon=new MatDialogConfig();
    DilogCon.disableClose=true;
    DilogCon.autoFocus=true;
    DilogCon.width="60%";
    this.matDialog.open(AddUserFormComponent,DilogCon);
  }
  showSuccess() { 
    this.toastr.success('User deleted successfully!','',{
      "closeButton": true,
      "progressBar": true
    });
    this.toastr.clear;
  }

}
