import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { License } from 'src/app/shared/license.new.model';

@Injectable()
export class SideContentService{
    constructor(private httpClient:HttpClient){}
    getLicensesTableTopCreated() {
        return this.httpClient.get<License[]>('http://localhost:8080/licenses/top10LicensesCreated', { observe: 'body', responseType: 'json' });
    }
    getLicensesTableTopExpired() {
        return this.httpClient.get<License[]>('http://localhost:8080/licenses/top10LicensesExpired', { observe: 'body', responseType: 'json' });
    }


}