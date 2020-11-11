import { Component, OnInit, ViewChild } from '@angular/core';
import { Bank} from '../shared/bank.model';
import { BankService} from '../shared/bank.service'
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateBankComponent } from './update-bank/update-bank.component';
import { AddBankFormComponent } from './add-bank-form/add-bank-form.component';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css']
})
export class BankListComponent implements OnInit {

  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource= new MatTableDataSource<Bank>();;
  undo=true;
  bankData: Bank[]=[];
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    }
  constructor( 
    private bankService:BankService,private snackBar: MatSnackBar,private matDialog:MatDialog
    ) { }
   
  ngOnInit(): void {
  this.bankData=this.bankService.getBanksTable();
  this.dataSource.data=this.bankData;
  }
  displayedColumns: string[] = [ 'Id', 'bankName', 'country','userId','Update','Delete'];
  onUpdate(bank:Bank){
    const DilogCon=new MatDialogConfig();
    DilogCon.disableClose=false;
    DilogCon.autoFocus=true;
    DilogCon.width="60%";
    DilogCon.data=bank;
    this.matDialog.open(UpdateBankComponent,DilogCon);
    
  }
  onDelete(bank:Bank){
   
    let mass='The Bank '+bank.bankName+' Deleted';
    this.undo = false;
    let snackBarRef = this.snackBar.open(mass, 'Undo', {
      duration: 6000
    });
    setTimeout( () => {
      if(!this.undo){
        console.log("success");
        this.deletUser(bank);
        this.snackBar.dismiss();
      }
    }, 6000);
    snackBarRef.onAction().subscribe(() => {
      console.log('undo');
      this.undo = true;
    });
  }
  deletUser(bank:Bank){
    const index = this.bankData.indexOf(bank, 0);    
    this.bankData.splice(index, 1); 
    this.dataSource.data=this.bankData;
  }
  onClick(){
    const DilogCon=new MatDialogConfig();
    DilogCon.disableClose=false;
    DilogCon.autoFocus=true;
    DilogCon.width="60%";
    this.matDialog.open(AddBankFormComponent,DilogCon);

  }
}
