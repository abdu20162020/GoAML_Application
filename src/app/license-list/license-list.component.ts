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
  dataSource= new MatTableDataSource<License>();
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
    this.LicenseServiceTest.getLicensesTable().subscribe((license:License[])=>{
      this.LicenseData=license;
      this.dataSource.data=this.LicenseData;
      }
      ,(_erorr)=>{
          console.log("Error is "+_erorr);
      }
      );
  }
  displayedColumns: string[] = [ 'id', 'applicationName', 'creationDate','expirationDate','Update','Delete'];
  onUpdate(license:License){
    const DilogCon=new MatDialogConfig();
    DilogCon.disableClose=true;
    DilogCon.autoFocus=true;
    DilogCon.width="60%";
    DilogCon.data=license;
    
    let dialogRef=this.matDialog.open(UpdateLicenseComponent,DilogCon);
    dialogRef.afterClosed().subscribe(res => {
      const updatedLicense:License=res.data;
      this.updateUsersTable(updatedLicense);
    });
    
  }
  onDelete(license:License){ 
    let mass='The License '+license.applicationName+' Deleted';
    this.undo = false;
    let snackBarRef = this.snackBar.open(mass, 'Undo', {
      duration: 3000
    });
    setTimeout( () => {
      if(!this.undo){
        this.deletLicense(license);
        this.snackBar.dismiss();
        this.showSuccess(license.applicationName);
      }
    }, 3000);
    snackBarRef.onAction().subscribe(() => {
      this.undo = true;
    });    
  }
  deletLicense(license:License){
    this.LicenseServiceTest.deletLicense(license).subscribe(()=>{
      const index = this.LicenseData.indexOf(license, 0);    
      this.LicenseData.splice(index, 1); 
      this.dataSource.data=this.LicenseData;
    },
    (error)=>{
      console.log(error);
    });
  }
  showSuccess(applicationName:string) {   
    this.toastr
    this.toastr.success('Deleted successfully!',applicationName,{
      "closeButton": true,
      "progressBar": true
    });
    this.toastr.clear;
  }
  private updateUsersTable(license:License){
    this.LicenseData.forEach((value, index) => {
      if(value.id===license.id){
        this.LicenseData[index]=license;
        this.dataSource.data=this.LicenseData;
      }
  });
  }
}
