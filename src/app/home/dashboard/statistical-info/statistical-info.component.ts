import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistical-info',
  templateUrl: './statistical-info.component.html',
  styleUrls: ['./statistical-info.component.css']
})
export class StatisticalInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  title = 'Title of statistic';
   type = 'PieChart';
   data = [
      ['Firefox', 45.0],
      ['IE', 26.8],
      ['Chrome', 12.8],
      ['Safari', 8.5],
      ['Opera', 6.2],
      ['Others', 0.7] 
   ];
   columnNames = ['Browser', 'Percentage'];
   options = {
    is3D: true
 };
//  options = {
//   colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'], is3D: true
// };
   width = 1000;
   height = 500;

}
