import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateLicenseComponent } from '../update-license/update-license.component';

@Component({
  selector: 'app-add-form-license',
  templateUrl: './add-form-license.component.html',
  styleUrls: ['./add-form-license.component.css']
})
export class AddFormLicenseComponent implements OnInit {
  addLicenseForm:FormGroup;
  constructor( private matDialog:MatDialog) { }

  ngOnInit(): void {
    this.addLicenseForm= new FormGroup({
      'apllicationName': new FormControl('GoAML',Validators.required),
      'createdData': new FormControl(null),
      'exppiredDate': new FormControl(null,),
      'bankName':new FormControl(null,Validators.required)
    });
  }
  onSubmit(){
    
    const DilogCon=new MatDialogConfig();
    DilogCon.disableClose=true;
    DilogCon.autoFocus=true;
    DilogCon.width="60%";
    DilogCon.data= {Id:0,
      bankName:this.addLicenseForm.get('bankName').value,
      country:this.addLicenseForm.get('apllicationName').value,
      userId:1} ;
    this.matDialog.open(UpdateLicenseComponent,DilogCon);
    this.addLicenseForm.reset();
  }
  foods=[
    {value: 'GoAML'},
    {value: 'ETL'},
    {value: 'AML'}
  ];

}
