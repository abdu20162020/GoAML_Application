import { Bank } from "./bank.model";
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { User } from './user.model';
@Injectable()
export class BankService{
    constructor(private httpClient: HttpClient){} 
    bankUpdate= new ReplaySubject<Bank>();
    getBanksTable(){ 
        return this.httpClient.get<Bank[]>('http://localhost:8080/banks', { observe: 'body', responseType: 'json' });
    }
    saveBanks(bank:Bank){
      const userObj:User= JSON.parse(localStorage.getItem('user'));
        return this.httpClient.post<Bank>('http://localhost:8080/banks/'+userObj.id, bank);     
    }
    updateBank(bank: Bank, id: number) {
        return this.httpClient.put('http://localhost:8080/banks/'+id,bank);
    }
    deleteBank(bank: Bank) {
        return this.httpClient.delete('http://localhost:8080/banks/'+bank.id);
    }
    
}