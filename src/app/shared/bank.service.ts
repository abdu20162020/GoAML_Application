import { Bank } from "./bank.model";
import { Subject } from 'rxjs/internal/Subject';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
export class BankService{

    private banks: Bank[] = [
        new Bank(0,'Omer','rrrrrr'),
        new Bank(1,'Ali','rrrrrr'),
        new Bank(2,'Omer','rrrrrr'),
        new Bank(3,'Omer','rrrrrr'),
        new Bank(4,'Ali','rrrrrr'),
        new Bank(5,'Omer','rrrrrr'),      
        new Bank(6,'Omer','rrrrrr'),
        new Bank(8,'Ali','rrrrrr'),
        new Bank(9,'Omer','rrrrrr'),
        new Bank(10,'Omer','rrrrrr'),
        new Bank(11,'Ali','rrrrrr'),
        new Bank(12,'Omer','rrrrrr'),
      ];    
    bankUpdate= new ReplaySubject<Bank>();
    banksChanged = new Subject<Bank[]>();
     getBanks(){
         return this.banks;
     }

     updateBank(bank:Bank){
         this.bankUpdate.next(bank);
     }
     getBanksTable(){
         return this.banks.slice();
     }
}