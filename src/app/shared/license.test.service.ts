import { License } from './license.new.model';


export class LicenseServiceTest{

    private Licenses:  License[]=[
        { id:0, name:'GoAML',creationDate:new Date("2019-01-16"),expirationDate:new Date("2019-01-16")},
        { id:0, name:'GoAML',creationDate:new Date("2019-01-16"),expirationDate:new Date("2019-01-16")},  
        { id:0, name:'GoAML',creationDate:new Date("2019-01-16"),expirationDate:new Date("2019-01-16")},  
        { id:0, name:'GoAML',creationDate:new Date("2019-01-16"),expirationDate:new Date("2019-01-16")},  
        { id:0, name:'GoAML',creationDate:new Date("2019-01-16"),expirationDate:new Date("2019-01-16")},
        { id:0, name:'GoAML',creationDate:new Date("2019-01-16"),expirationDate:new Date("2019-01-16")},
        { id:0, name:'GoAML',creationDate:new Date("2019-01-16"),expirationDate:new Date("2019-01-16")},  
        { id:0, name:'GoAML',creationDate:new Date("2019-01-16"),expirationDate:new Date("2019-01-16")},  
        { id:0, name:'GoAML',creationDate:new Date("2019-01-16"),expirationDate:new Date("2019-01-16")},  
        { id:0, name:'GoAML',creationDate:new Date("2019-01-16"),expirationDate:new Date("2019-01-16")}
      ];    
     getLicenses(){
         return this.Licenses;
     }

     getLicensesTable(){
         return this.Licenses.slice();
     }
}