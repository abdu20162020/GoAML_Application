import { Subject } from 'rxjs/internal/Subject';
import { User } from "./user.model";


export class UserService{
    private users: User[] = [
        { id:0, userName:'Omar',  password:'1111',email:'Omer@gmail.com', creation_date:new Date("2019-01-16"), birth_date:new Date("2019-01-16") }, 
        { id:1, userName:'Omar',  password:'1111',email:'Omer@gmail.com', creation_date:new Date("2019-01-16"), birth_date:new Date("2019-01-16") }, 
        { id:2, userName:'Omar',  password:'1111',email:'Omer@gmail.com', creation_date:new Date("2019-01-16"), birth_date:new Date("2019-01-16") }, 
        { id:3, userName:'Omar',  password:'1111',email:'Omer@gmail.com', creation_date:new Date("2019-01-16"), birth_date:new Date("2019-01-16") }, 
        { id:4, userName:'Omar',  password:'1111',email:'Omer@gmail.com', creation_date:new Date("2019-01-16"), birth_date:new Date("2019-01-16") }, 
        { id:5, userName:'Omar',  password:'1111',email:'Omer@gmail.com', creation_date:new Date("2019-01-16"), birth_date:new Date("2019-01-16") }, 
        { id:6, userName:'Omar',  password:'1111',email:'Omer@gmail.com', creation_date:new Date("2019-01-16"), birth_date:new Date("2019-01-16") }, 
        { id:7, userName:'Omar',  password:'1111',email:'Omer@gmail.com', creation_date:new Date("2019-01-16"), birth_date:new Date("2019-01-16") }, 
        { id:8, userName:'Omar',  password:'1111',email:'Omer@gmail.com', creation_date:new Date("2019-01-16"), birth_date:new Date("2019-01-16") }, 
        { id:9, userName:'Omar',  password:'1111',email:'Omer@gmail.com', creation_date:new Date("2019-01-16"), birth_date:new Date("2019-01-16") }, 
        { id:10, userName:'Omar',  password:'1111',email:'Omer@gmail.com', creation_date:new Date("2019-01-16"), birth_date:new Date("2019-01-16") }, 
        { id:11, userName:'Omar',  password:'1111',email:'Omer@gmail.com', creation_date:new Date("2019-01-16"), birth_date:new Date("2019-01-16") }, 
        { id:12, userName:'Omar',  password:'1111',email:'Omer@gmail.com', creation_date:new Date("2019-01-16"), birth_date:new Date("2019-01-16") }, 
        { id:13, userName:'Omar',  password:'1111',email:'Omer@gmail.com', creation_date:new Date("2019-01-16"), birth_date:new Date("2019-01-16") }, 
        { id:14, userName:'Omar',  password:'1111',email:'Omer@gmail.com', creation_date:new Date("2019-01-16"), birth_date:new Date("2019-01-16") }, 
        { id:15, userName:'Omar',  password:'1111',email:'Omer@gmail.com', creation_date:new Date("2019-01-16"), birth_date:new Date("2019-01-16") }, 
        { id:16, userName:'Omar',  password:'1111',email:'Omer@gmail.com', creation_date:new Date("2019-01-16"), birth_date:new Date("2019-01-16") }, 
        { id:17, userName:'Omar',  password:'1111',email:'Omer@gmail.com', creation_date:new Date("2019-01-16"), birth_date:new Date("2019-01-16") }, 
        { id:18, userName:'Omar',  password:'1111',email:'Omer@gmail.com', creation_date:new Date("2019-01-16"), birth_date:new Date("2019-01-16") }, 
        { id:19, userName:'Omar',  password:'1111',email:'Omer@gmail.com', creation_date:new Date("2019-01-16"), birth_date:new Date("2019-01-16") }, 
        { id:20, userName:'Omar',  password:'1111',email:'Omer@gmail.com', creation_date:new Date("2019-01-16"), birth_date:new Date("2019-01-16") }, 
        { id:21, userName:'Omar',  password:'1111',email:'Omer@gmail.com', creation_date:new Date("2019-01-16"), birth_date:new Date("2019-01-16") }, 
        { id:22, userName:'Omar',  password:'1111',email:'Omer@gmail.com', creation_date:new Date("2019-01-16"), birth_date:new Date("2019-01-16") }, 
        { id:23, userName:'Omar',  password:'1111',email:'Omer@gmail.com', creation_date:new Date("2019-01-16"), birth_date:new Date("2019-01-16") }, 
        { id:23, userName:'Omar',  password:'1111',email:'Omer@gmail.com', creation_date:new Date("2019-01-16"), birth_date:new Date("2019-01-16") }, 
        { id:24, userName:'Omar',  password:'1111',email:'Omer@gmail.com', creation_date:new Date("2019-01-16"), birth_date:new Date("2019-01-16") }, 
        { id:25, userName:'Omar',  password:'1111',email:'Omer@gmail.com', creation_date:new Date("2019-01-16"), birth_date:new Date("2019-01-16") }, 
        { id:26, userName:'Omar',  password:'1111',email:'Omer@gmail.com', creation_date:new Date("2019-01-16"), birth_date:new Date("2019-01-16") }, 
        { id:27, userName:'Omar',  password:'1111',email:'Omer@gmail.com', creation_date:new Date("2019-01-16"), birth_date:new Date("2019-01-16") }, 
        { id:28, userName:'Omar',  password:'1111',email:'Omer@gmail.com', creation_date:new Date("2019-01-16"), birth_date:new Date("2019-01-16") }
      ];    
    usersChanged = new Subject<User[]>();
     getUsers(){
         return this.users.slice();
     }
     getUsersTable(){
         return this.users.slice();
     }

     deleteUser(user:User){
        const index = this.users.indexOf(user, 0);    
        this.users.splice(index, 1);   
        this.usersChanged.next(this.users.slice());
     }
    

}