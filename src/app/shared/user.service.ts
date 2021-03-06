import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { User } from "./user.model";


@Injectable()
export class UserService{

    constructor(private httpClient: HttpClient){}
    userlogIn = new EventEmitter<number>();

    private users: User[] = [];
    getUsers(){
        return this.users.slice();
    }
    getUsersTable(){
        return  this.httpClient.get<User[]>('http://localhost:8080/users', { observe: 'body', responseType: 'json' });
    }
    deleteUser(user:User){
        return this.httpClient.delete('http://localhost:8080/users'+'/'+user.id);      
    }
    saveUser(user:User){
        return this.httpClient.post<User>('http://localhost:8080/users', user);      
    }
    updateUer(user:User,id:number){
        return this.httpClient.put<User>('http://localhost:8080/users'+'/'+id,user);
    }
    userLogIn(name:string,password:string){
        return this.httpClient.get<User>('http://localhost:8080/home/signin/'+name+'/'+password);
    }
}