import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Bank } from 'src/app/shared/bank.model';
import { BankService } from 'src/app/shared/bank.service';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
@Component({
  selector: 'app-update-bank',
  templateUrl: './update-bank.component.html',
  styleUrls: ['./update-bank.component.css']
})
export class UpdateBankComponent implements OnInit {

  constructor(private userService:BankService, public dialogRef: MatDialogRef<UpdateBankComponent>,@Inject(MAT_DIALOG_DATA) public bank: Bank) { }
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
      'bankname': new FormControl(this.bank.bankName, [Validators.required]),
      'country': new FormControl(this.bank.country, [Validators.required]),
      'userId': new FormControl(this.bank.userId, [Validators.required]), 
    });
  }
  onSubmit(){
    
    this.updateForm.reset(); 
    this.bank=undefined;
    this.dialogRef.close(); 
  }
  closePop(){
    this.dialogRef.close(); 
  }

}
