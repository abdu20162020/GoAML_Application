import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { License } from 'src/app/shared/license.new.model';
import { SideContentService } from './side.content.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'}
  ];

@Component({
  selector: 'app-side-content-table',
  templateUrl: './side-content-table.component.html',
  styleUrls: ['./side-content-table.component.css']
})
export class SideContentTableComponent implements OnInit, AfterViewInit {

  dataSource= new MatTableDataSource<License>();
  dataSource2= new MatTableDataSource<License>();

  constructor(private sideContentService :SideContentService ) { }
  ngAfterViewInit(): void {
    }
    LicenseDataTopCreated: License[]=[];
    LicenseDataTopExpired: License[]=[];

    displayedColumns: string[] = [ 'id', 'applicationName', 'creationDate','expirationDate'];
    ngOnInit(): void {
    this.topCreatedInit();
    this.topExpiredInit();

    }
  topExpiredInit() {
    this.sideContentService.getLicensesTableTopExpired().subscribe((license:License[])=>{
      this.LicenseDataTopExpired=license;
      this.dataSource2.data=this.LicenseDataTopExpired;
    }
    ,(_erorr)=>{
          console.log("Error is "+_erorr);
     }
    );   }
  topCreatedInit() {
    this.sideContentService.getLicensesTableTopCreated().subscribe((license:License[])=>{
      this.LicenseDataTopCreated=license;
      this.dataSource.data=this.LicenseDataTopCreated;
    }
    ,(_erorr)=>{
          console.log("Error is "+_erorr);
     }
    ); 
  }
  
}
