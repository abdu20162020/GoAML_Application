import { Component, OnInit } from '@angular/core';
import { License } from 'src/app/shared/license.new.model';
import { StatisticalInfoService } from './statisticalInfo.service';

@Component({
  selector: 'app-statistical-info',
  templateUrl: './statistical-info.component.html',
  styleUrls: ['./statistical-info.component.css']
})
export class StatisticalInfoComponent implements OnInit {

  constructor(private statisticalInfoService:StatisticalInfoService) { }

  ngOnInit(): void {

     this.statisticalInfoService.getExpiredLicenses().subscribe(
        (expiredLicense:License[])=>{

           this.data.push(['expiredLicense',expiredLicense.length]);
        }

     );
     this.statisticalInfoService.getNotExpiredLicenses().subscribe(
      (notExpiredLicense:License[])=>{

         this.data.push(['notExpiredLicense',notExpiredLicense.length]);
      }

   );
    
  }
  title = 'The ratio between the newest and the oldest among the licenses';
   type = 'PieChart';
   data = [];
   columnNames = ['License', 'Number'];
   options = {
    is3D: true
 };
//  options = {
//   colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'], is3D: true
// };
   width = 1080;
   height = 400;

}

