import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/models/User';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  userId!:number;

  user!:User;

  constructor(private userService:UserService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param:ParamMap)=>{
      this.userId = parseInt(param.get('id') as string);
      this.userService.getUser(this.userId).subscribe(user=>this.user=user);
    })
  }

  deleteUser(userId:number):void{
    this.userService.deleteUser(userId).subscribe(()=>{
      this.router.navigate(['/']);
    })
  }
}
