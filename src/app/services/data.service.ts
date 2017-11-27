import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import  'rxjs/add/operator/map'

import { Http } from '@angular/http'

@Injectable()
export class DataService{



    constructor(public http: Http){



    }

    getUsers(){
        return this.http.get('https://jsonplaceholder.typicode.com/users')
            .map(res => res.json())
    }


    addUser(user){
        return this.http.post('https://jsonplaceholder.typicode.com/users', user)
            .map(res => res.json())
    }

    deleteUser(id){
        return this.http.delete('https://jsonplaceholder.typicode.com/users/' + id)
            .map(res => res.json())
    }

    updateUser(user){
        return this.http.put('https://jsonplaceholder.typicode.com/users/' + user.id, user)
            .map(res => res.json())
    }

    // getData(){
    //     this.data = new Observable(observer => {
    //         setTimeout(() => {
    //             observer.next(1);
    //         }, 1000);

    //         setTimeout(() => {
    //             observer.next(2);
    //         }, 2000);

    //         setTimeout(() => {
    //             observer.next(3);
    //         }, 3000);

    //         setTimeout(() => {
    //             observer.next('Hello');
    //         }, 4000);

    //         setTimeout(() => {
    //             observer.complete();
    //         }, 5000);
    //     });

    //     return this.data;
    // }

}