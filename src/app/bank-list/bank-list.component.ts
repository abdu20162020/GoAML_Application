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
import { ToastrService } from 'ngx-toastr';


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
   ,private toastr: ToastrService
    ) { }
  ngOnInit(): void {
    this.bankService.getBanksTable().subscribe((banks:Bank[])=>{
      this.bankData=banks;
      this.dataSource.data=this.bankData;
       },
      (_erorr)=>{
          console.log("Error is banks "+_erorr);
        }
      );
  }
  displayedColumns: string[] = [ 'id', 'name', 'country','Update','Delete'];
  onUpdate(bank:Bank){
    const DilogCon=new MatDialogConfig();
    DilogCon.disableClose=true;
    DilogCon.autoFocus=true;
    DilogCon.width="60%";
    DilogCon.data=bank;
    let dialogRef=this.matDialog.open(UpdateBankComponent,DilogCon);
    dialogRef.afterClosed().subscribe(res => {
      if(res.data!==undefined){
      const updatedBank:Bank=res.data;
      this.updatedBanksTable(updatedBank);
      }
    });  
  }
  onDelete(bank:Bank){ 
    let mass='The Bank '+bank.name+' Deleted';
    this.undo = false;
    let snackBarRef = this.snackBar.open(mass, 'Undo', {
      duration: 2500
    });
    setTimeout( () => {
      if(!this.undo){
        this.deletBank(bank);
        this.snackBar.dismiss();
      }
    }, 2500);
    snackBarRef.onAction().subscribe(() => {
      this.undo = true;
    });
  }
  deletBank(bank:Bank){
    this.bankService.deleteBank(bank).subscribe(()=>{
      const index = this.bankData.indexOf(bank, 0);    
      this.bankData.splice(index, 1); 
      this.dataSource.data=this.bankData;
      this.showSuccess();
    },
    (error)=>{
      console.log(error);
    });
  }
  onClick(){
    const DilogCon=new MatDialogConfig();
    DilogCon.disableClose=true;
    DilogCon.autoFocus=true;
    DilogCon.width="60%";
    let dialogRef=this.matDialog.open(AddBankFormComponent,DilogCon);
    dialogRef.afterClosed().subscribe(res => {
      if(res.data!==undefined){
      const updatedBank:Bank=res.data;
      this.pushToBanksTable(updatedBank);
      }
    });
  }
  pushToBanksTable(updatedBank: Bank) {
    this.bankData.push(updatedBank);
    this.dataSource.data=this.bankData;
  }
 private showSuccess() {   
    this.toastr
    this.toastr.success('Deleted successfully!','',{
      "closeButton": true,
      "progressBar": true
    });
    this.toastr.clear;
  }
  private updatedBanksTable(bank:Bank){
        this.bankData.forEach((value, index) => {
          if(value.id===bank.id){
            this.bankData[index]=bank;
            this.dataSource.data=this.bankData;
           }
      });
  }
}
