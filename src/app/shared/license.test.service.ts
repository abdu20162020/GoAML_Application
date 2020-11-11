import { License } from './license.new.model';


export class LicenseServiceTest{

    private Licenses:  License[]=[
        { Id:0, bankName:'Omer',country:'rrrrrr',userId:1},
        { Id:0, bankName:'Omer',country:'rrrrrr',userId:1},  
        { Id:0, bankName:'Omer',country:'rrrrrr',userId:1},  
        { Id:0, bankName:'Omer',country:'rrrrrr',userId:1},  
        { Id:0, bankName:'Omer',country:'rrrrrr',userId:1},
        { Id:0, bankName:'Omer',country:'rrrrrr',userId:1},
        { Id:0, bankName:'Omer',country:'rrrrrr',userId:1},  
        { Id:0, bankName:'Omer',country:'rrrrrr',userId:1},  
        { Id:0, bankName:'Omer',country:'rrrrrr',userId:1},  
        { Id:0, bankName:'Omer',country:'rrrrrr',userId:1}
      ];    
     getLicenses(){
         return this.Licenses;
     }

     getLicensesTable(){
         return this.Licenses.slice();
     }
}