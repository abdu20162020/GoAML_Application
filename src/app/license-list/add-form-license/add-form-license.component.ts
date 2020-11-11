import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-form-license',
  templateUrl: './add-form-license.component.html',
  styleUrls: ['./add-form-license.component.css']
})
export class AddFormLicenseComponent implements OnInit {
  addLicenseForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.addLicenseForm= new FormGroup({
      'apllicationName': new FormControl('GoAML',Validators.required),
      'createdData': new FormControl(null),
      'exppiredDate': new FormControl(null,),
      'bankName':new FormControl(null,Validators.required)
    });
  }
  onSubmit(){
    this.addLicenseForm.reset();
  }
  foods=[
    {value: 'GoAML'},
    {value: 'ETL'},
    {value: 'AML'}
  ];

}
