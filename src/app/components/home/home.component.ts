import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/interfaces/IUser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isDeleted:boolean = false;
  deletedUserId:number | null = null;
  users:IUser[] = [];

  constructor(private userService:UserService){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users=>this.users = users);
  }

  deleteUser(userId:number):void{
    this.userService.deleteUser(userId).subscribe(()=>{
      this.deletedUserId = userId;
      this.isDeleted = true;
      this.users = this.users.filter(user=>user.id !==userId)
    });
  }

  clearDeleteAlert():void{
    this.isDeleted = false;
    this.deletedUserId = null;
  }
}
