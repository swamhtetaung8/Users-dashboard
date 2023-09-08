import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/crud-jersey/webapi/api/users';

  constructor(private http:HttpClient) { }

  getUsers():Observable<IUser[]>{
    return this.http.get<IUser[]>(this.apiUrl);
  }

  storeUser(user:IUser):Observable<IUser>{
    return this.http.post<IUser>(this.apiUrl,user);
  }

  getUser(userId:number):Observable<IUser>{
    return this.http.get<IUser>(this.apiUrl+`/${userId}`);
  }

  deleteUser(userId:number):Observable<any>{
    return this.http.delete<any>(this.apiUrl+`/${userId}`);
  }
}
