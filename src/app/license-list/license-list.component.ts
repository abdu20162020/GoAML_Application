import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { License } from '../shared/license.new.model';
import { LicenseServiceTest } from '../shared/license.test.service';
import { AddFormLicenseComponent } from './add-form-license/add-form-license.component';
import { UpdateLicenseComponent } from './update-license/update-license.component';

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

  constructor(private LicenseServiceTest:LicenseServiceTest,private snackBar: MatSnackBar,private matDialog:MatDialog) { }

  ngOnInit(): void {
    this.LicenseData=this.LicenseServiceTest.getLicensesTable();
    this.dataSource.data=this.LicenseData;
    console.log(this.LicenseData);
  }
  displayedColumns: string[] = [ 'Id', 'bankName', 'country','userId','Update','Delete'];
  onUpdate(license:License){
    const DilogCon=new MatDialogConfig();
    DilogCon.disableClose=false;
    DilogCon.autoFocus=true;
    DilogCon.width="60%";
    DilogCon.data=license;
    this.matDialog.open(UpdateLicenseComponent,DilogCon);
    
  }
  onDelete(license:License){
   
    let mass='The License '+license.bankName+' Deleted';
    this.undo = false;
    let snackBarRef = this.snackBar.open(mass, 'Undo', {
      duration: 6000
    });
    setTimeout( () => {
      if(!this.undo){
        console.log("success");
        this.deletUser(license);
        this.snackBar.dismiss();
      }
    }, 6000);
    snackBarRef.onAction().subscribe(() => {
      console.log('undo');
      this.undo = true;
    });
  }
  deletUser(license:License){
    const index = this.LicenseData.indexOf(license, 0);    
    this.LicenseData.splice(index, 1); 
    this.dataSource.data=this.LicenseData;
  }
  onClick(){
    const DilogCon=new MatDialogConfig();
    DilogCon.disableClose=false;
    DilogCon.autoFocus=true;
    DilogCon.width="60%";
    this.matDialog.open(AddFormLicenseComponent,DilogCon);

  }
 


}
