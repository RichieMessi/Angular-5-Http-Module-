

import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
    selector: 'sandbox',
    templateUrl: './sandbox.component.html'
})
export class SandboxComponent{

    users: any[]

    user = {
        id:'',
        name: '',
        email: '',
        phone: ''
    }

    isEdit:boolean = false;

    constructor(public dataService: DataService){
    
        this.dataService.getUsers().subscribe(users => {
            // console.warn(users);

            this.users = users;
        })
    } 


    // Submit Form    
    onSubmit(isEdit){
        if(isEdit){
            this.dataService.updateUser(this.user).subscribe(user => {
                for(let i = 0; i < this.users.length; i++){
                    if(this.users[i].id == this.user.id){
                        this.users.splice(i, 1)
                    }
                }
                this.users.unshift(this.user);
            })
        } else {
            this.dataService.addUser(this.user).subscribe(user => {
                this.users.unshift(user)
                console.warn(user)
            })
        }
        
    }


    // On Delete Pressed
    onDeleteClick(id){
        // console.warn(id)
        this.dataService.deleteUser(id).subscribe(res => {
            // console.log(res)
            for(let i = 0; i < this.users.length; i++){
                if(this.users[i].id == id){
                    this.users.splice(i, 1)
                }
            }
        })
    }


    // On Edit Pressed    
    onEditClick(user){
        this.isEdit = true;
        this.user = user;
    }

    
   }


