import { License } from './license.new.model';


export class LicenseServiceTest{

    private Licenses:  License[]=[
        { id:0, name:'GoAML',creation_date:new Date("2019-01-16"),expiration_date:new Date("2019-01-16")},
        { id:0, name:'GoAML',creation_date:new Date("2019-01-16"),expiration_date:new Date("2019-01-16")},  
        { id:0, name:'GoAML',creation_date:new Date("2019-01-16"),expiration_date:new Date("2019-01-16")},  
        { id:0, name:'GoAML',creation_date:new Date("2019-01-16"),expiration_date:new Date("2019-01-16")},  
        { id:0, name:'GoAML',creation_date:new Date("2019-01-16"),expiration_date:new Date("2019-01-16")},
        { id:0, name:'GoAML',creation_date:new Date("2019-01-16"),expiration_date:new Date("2019-01-16")},
        { id:0, name:'GoAML',creation_date:new Date("2019-01-16"),expiration_date:new Date("2019-01-16")},  
        { id:0, name:'GoAML',creation_date:new Date("2019-01-16"),expiration_date:new Date("2019-01-16")},  
        { id:0, name:'GoAML',creation_date:new Date("2019-01-16"),expiration_date:new Date("2019-01-16")},  
        { id:0, name:'GoAML',creation_date:new Date("2019-01-16"),expiration_date:new Date("2019-01-16")}
      ];    
     getLicenses(){
         return this.Licenses;
     }

     getLicensesTable(){
         return this.Licenses.slice();
     }
}