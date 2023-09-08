import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/interfaces/IUser';
import { User } from 'src/models/User';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  user:User = new User();
  success:boolean = false;
  constructor(private userService:UserService){}

  onSubmit(submitForm:NgForm):void{
    this.userService.storeUser(this.user as IUser).subscribe(result=>{
      this.success=true;
      submitForm.resetForm();
    });
  }

  closeAlert(){
    this.success=false;
  }

}
