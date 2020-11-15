import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { License } from '../shared/license.new.model';
import { LicenseServiceTest } from '../shared/license.test.service';
import { UpdateLicenseComponent } from './update-license/update-license.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-license-list',
  templateUrl: './license-list.component.html',
  styleUrls: ['./license-list.component.css']
})

export class LicenseListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource= new MatTableDataSource<License>();;
  undo=true;
  LicenseData: License[]=[];
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    }
  constructor(private LicenseServiceTest:LicenseServiceTest,private snackBar: MatSnackBar,
    private matDialog:MatDialog,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.LicenseData=this.LicenseServiceTest.getLicensesTable();
    this.dataSource.data=this.LicenseData;
    console.log(this.LicenseData);
  }
  displayedColumns: string[] = [ 'id', 'name', 'creationDate','expirationDate','Update','Delete'];
  onUpdate(license:License){
    const DilogCon=new MatDialogConfig();
    DilogCon.disableClose=true;
    DilogCon.autoFocus=true;
    DilogCon.width="60%";
    DilogCon.data=license;
    this.matDialog.open(UpdateLicenseComponent,DilogCon);
    
  }
  onDelete(license:License){
   
    let mass='The License '+license.name+' Deleted';
    this.undo = false;
    let snackBarRef = this.snackBar.open(mass, 'Undo', {
      duration: 3000
    });
    setTimeout( () => {
      if(!this.undo){
        this.deletUser(license);
        this.snackBar.dismiss();
        this.showSuccess(license.name);
      }
    }, 3000);
    snackBarRef.onAction().subscribe(() => {
      this.undo = true;
    });    
  }
  deletUser(license:License){
    const index = this.LicenseData.indexOf(license, 0);    
    this.LicenseData.splice(index, 1); 
    this.dataSource.data=this.LicenseData;
  }
  showSuccess(name:string) {   
    this.toastr
    this.toastr.success('Deleted successfully!',name,{
      "closeButton": true,
      "progressBar": true
    });
    this.toastr.clear;
  }
}
