import { Bank } from "./bank.model";
import { Subject } from 'rxjs/internal/Subject';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
export class BankService{

    private banks: Bank[] = [
        new Bank(0,'Omer','rrrrrr',1),
        new Bank(1,'Ali','rrrrrr',2),
        new Bank(2,'Omer','rrrrrr',3),
        new Bank(3,'Omer','rrrrrr',4),
        new Bank(4,'Ali','rrrrrr',5),
        new Bank(5,'Omer','rrrrrr',6),      
        new Bank(6,'Omer','rrrrrr',7),
        new Bank(8,'Ali','rrrrrr',8),
        new Bank(9,'Omer','rrrrrr',9),
        new Bank(10,'Omer','rrrrrr',10),
        new Bank(11,'Ali','rrrrrr',11),
        new Bank(12,'Omer','rrrrrr',12),
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

    //  deleteBank(bank:Bank){
    //     const index = this.banks.indexOf(bank, 0);    
    //     this.banks.splice(index, 1);   
    //     this.banksChanged.next(this.banks.slice());
    //  }
    

}