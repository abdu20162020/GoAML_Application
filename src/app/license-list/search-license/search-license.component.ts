import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-license',
  templateUrl: './search-license.component.html',
  styleUrls: ['./search-license.component.css']
})
export class SearchLicenseComponent implements OnInit {
  foods = [
    {value: 'GoAML'},
    {value: 'ETL'},
    {value: 'AML'}
  ];
  panelOpenState = false;
  constructor(private router:Router,private rout:ActivatedRoute) { }
  bank_name:string='';
  created_user:string='';
  selectedValue: string='GoAML';
  ngOnInit(): void {
  }
  onClear(){
    this.bank_name='';
    this.created_user='';
    this.selectedValue='GoAML';
  }
  onSearch(){
    console.log( this.bank_name);
    console.log( this.created_user);
    console.log( this.selectedValue);

  }
  onAdd(){
    this.router.navigate(['../add-license'],{relativeTo:this.rout});
  }

}