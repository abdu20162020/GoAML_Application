import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UpdateLicenseComponent } from '../update-license/update-license.component';

@Component({
  selector: 'app-add-form-license',
  templateUrl: './add-form-license.component.html',
  styleUrls: ['./add-form-license.component.css']
})
export class AddFormLicenseComponent implements OnInit {
  addLicenseForm:FormGroup;
  constructor( private matDialog:MatDialog,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.addLicenseForm= new FormGroup({
      'name': new FormControl('GoAML',Validators.required),
      'created_data': new FormControl(null,Validators.required),
      'exppired_date': new FormControl(null,Validators.required),
    });
  }
  onSubmit(){
    this.showSuccess();    
    const DilogCon=new MatDialogConfig();
    DilogCon.disableClose=true;
    DilogCon.autoFocus=true;
    DilogCon.width="60%";
    DilogCon.data= {id:0,
      name:this.addLicenseForm.get('name').value,
      creation_date:new Date("2018-01-16"),
      expiration_date:new Date("2012-11-16")
    
    } ;
    this.matDialog.open(UpdateLicenseComponent,DilogCon);
    this.addLicenseForm.reset();
  }
  foods=[
    {value: 'GoAML'},
    {value: 'ETL'},
    {value: 'AML'}
  ];
  showSuccess() {
    
    this.toastr
    this.toastr.success('Added successfully!','',{
      "closeButton": true,
      "progressBar": true
    });
    this.toastr.clear;
  }

}
