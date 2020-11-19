import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Bank } from 'src/app/shared/bank.model';
import { BankService } from 'src/app/shared/bank.service';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-bank',
  templateUrl: './update-bank.component.html',
  styleUrls: ['./update-bank.component.css']
})
export class UpdateBankComponent implements OnInit {

  constructor(private userService:BankService, public dialogRef: MatDialogRef<UpdateBankComponent>,@Inject(MAT_DIALOG_DATA) public bankData: Bank
  ,private toastr: ToastrService) { }
  updateForm:FormGroup;
  subscription: Subscription;
  ngOnInit(): void {
    this.iniForm();
  }
  private iniForm(){  
    this.createFormGroup();
  }
  createFormGroup(){
    this.updateForm= new FormGroup({
      'bankname': new FormControl(this.bankData.name, [Validators.required]),
      'country': new FormControl(this.bankData.country, [Validators.required]),
    });
  }
  onSubmit(){
   const bank:Bank=new Bank(0,this.updateForm.get('bankname').value,this.updateForm.get('country').value);
   delete bank.id;
   this.userService.updateBank(bank,this.bankData.id).subscribe(
     (Bank:Bank)=>{
      this.showSuccess();  
      this.dialogRef.close({data:Bank}); 
      this.updateForm.reset();
      
     },
     (error)=>{
       console.log('bank update error'+error);
     }
   ); 
  }
  closePop(){
    this.dialogRef.close({data:undefined}); 
  }
  showSuccess() {
    
    this.toastr
    this.toastr.success('Updated successfully!','',{
      "closeButton": true,
      "progressBar": true
    });
    this.toastr.clear;
  }

}
