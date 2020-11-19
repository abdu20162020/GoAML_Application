import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Bank } from 'src/app/shared/bank.model';
import { BankService } from 'src/app/shared/bank.service';

@Component({
  selector: 'app-add-bank-form',
  templateUrl: './add-bank-form.component.html',
  styleUrls: ['./add-bank-form.component.css']
})
export class AddBankFormComponent implements OnInit {
  addBankForm:FormGroup;
  constructor(public dialogRef: MatDialogRef<AddBankFormComponent>,private toastr: ToastrService,private bankService:BankService) { }
  //to hide and show password
  hide = true;
  ngOnInit(): void {
   this.addBankForm= new FormGroup({
      'bankname': new FormControl(null,Validators.required),
      'country': new FormControl(null,Validators.required),
    });
  }
  onSubmit(){
      const bank:Bank= new Bank(0,this.addBankForm.get('bankname').value,this.addBankForm.get('country').value)
    this.bankService.saveBanks(bank).subscribe(
      (bank:Bank)=>{
        this.showSuccess(); 
        this.dialogRef.close({data:bank});
        this.addBankForm.reset();
      },
      (error)=>{
        console.log('error'+error);
      }
    );
  }
  closePop(){
    this.dialogRef.close({data:undefined});
    this.addBankForm.reset();
  }
  showSuccess() {   
    this.toastr
    this.toastr.success('Added successfully!','',{
      "closeButton": true,
      "progressBar": true
    });
    this.toastr.clear;
  }
}
