import { Component, OnInit } from '@angular/core';
import { User } from "./shared/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  
    localStorage.setItem('user',JSON.stringify({id: 5, userName: "omer", password: "1254",creationDate: "2014-01-01T00:00:00.000+00:00", birthDate: "2014-01-01T00:00:00.000+00:00"
      }));
      
  }
  title = 'goAML';

}
