import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/interfaces/IUser';
import { User } from 'src/models/User';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  userId!:number;
  user!:User;
  isUpdated:boolean = false;

  constructor(private userService:UserService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param:ParamMap)=>{
      this.userId = parseInt(param.get('id') as string);
      this.userService.getUser(this.userId).subscribe(user=>this.user=user);
    })
  }

  updateUser():void{
    this.userService.updateUser(this.userId,this.user as IUser).subscribe((result)=>{
      this.user = result;
      this.isUpdated = true;
    });
  }

  closeAlert(){
    this.isUpdated = false;
  }
}
