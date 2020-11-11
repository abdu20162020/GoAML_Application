import { Subject } from 'rxjs/internal/Subject';
import { User } from "./user.model";


export class UserService{
    private users: User[] = [
        new User(0,'Omer','rrrrrr','ali@gmail.com'),
        new User(0,'Ali','rrrrrr','ali@gmail.com'),
        new User(0,'Omer','rrrrrr','ali@gmail.com'),
        new User(0,'Omer','rrrrrr','ali@gmail.com'),
        new User(0,'Ali','rrrrrr','ali@gmail.com'),
        new User(0,'Omer','rrrrrr','ali@gmail.com'),
        new User(0,'Omer','rrrrrr','ali@gmail.com'),
        new User(0,'Ali','rrrrrr','ali@gmail.com'),
        new User(0,'Omer','rrrrrr','ali@gmail.com'),
        new User(0,'Omer','rrrrrr','ali@gmail.com'),
        new User(0,'Ali','rrrrrr','ali@gmail.com'),
        new User(0,'Omer','rrrrrr','ali@gmail.com'),
        new User(0,'Omer','rrrrrr','ali@gmail.com'),
        new User(0,'Ali','rrrrrr','ali@gmail.com'),
        new User(0,'Omer','rrrrrr','ali@gmail.com'),
        new User(0,'Omer','rrrrrr','ali@gmail.com'),
        new User(0,'Ali','rrrrrr','ali@gmail.com'),
        new User(0,'Omer','rrrrrr','ali@gmail.com'),
        new User(0,'Omer','rrrrrr','ali@gmail.com'),
        new User(0,'Ali','rrrrrr','ali@gmail.com'),
        new User(0,'Omer','rrrrrr','ali@gmail.com'),
        new User(0,'Omer','rrrrrr','ali@gmail.com'),
        new User(0,'Ali','rrrrrr','ali@gmail.com'),
        new User(0,'Omer','rrrrrr','ali@gmail.com'),
        new User(0,'Omer','rrrrrr','ali@gmail.com'),
        new User(0,'Ali','rrrrrr','ali@gmail.com'),
        new User(0,'Omer','rrrrrr','ali@gmail.com')
      ];    
    userUpdate= new Subject<User>();
    usersChanged = new Subject<User[]>();
     getUsers(){
         return this.users.slice();
     }

     updateUser(user:User){
         this.userUpdate.next(user);
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