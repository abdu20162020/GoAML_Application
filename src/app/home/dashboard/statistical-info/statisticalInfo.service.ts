import {Injectable} from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {License} from '../../../shared/license.new.model'
@Injectable()
export class StatisticalInfoService{
constructor(private httpClient:HttpClient){}
getExpiredLicenses(){
    return  this.httpClient.get<License[]>('http://localhost:8080/licenses/expiredLicenses', { observe: 'body', responseType: 'json' });
}
getNotExpiredLicenses(){
    return  this.httpClient.get<License[]>('http://localhost:8080/licenses/notExpiredLicenses', { observe: 'body', responseType: 'json' });
}

}