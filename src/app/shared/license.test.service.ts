import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { License } from './license.new.model';
import { User } from './user.model';

@Injectable()
export class LicenseServiceTest{
  
  
  
    constructor(private httpClient:HttpClient){}
    private licenses:  License[]=[];    

    getLicensesTable(){
        return  this.httpClient.get<License[]>('http://localhost:8080/licenses', { observe: 'body', responseType: 'json' });
    }
    saveLicense(license: License,bankName:string) {
        const userObj:User= JSON.parse(localStorage.getItem('user'));
        const licenseObj={applicationName:license.applicationName, creationDate:license.creationDate, expirationDate:license.expirationDate,  }
        return this.httpClient.post('http://localhost:8080/licenses'+'/'+userObj.id+'/'+bankName,licenseObj);
    }
    updateLicense(license:License, id: number) {
        return this.httpClient.put('http://localhost:8080/licenses'+'/'+id,license);
    }
    deletLicense(license: License) {

        return this.httpClient.delete('http://localhost:8080/licenses'+'/'+license.id); 
    }
}