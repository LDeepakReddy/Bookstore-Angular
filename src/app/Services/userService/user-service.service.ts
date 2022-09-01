import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  header: any = "";
  token: any

  constructor(private httpService: HttpServiceService) {
    this.token = localStorage.getItem('token');
  }


  registration(reqData: any) {
    console.log(reqData);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',

      })
    }
    return this.httpService.postService('/register', reqData, false, header)

  }

  login(reqData: any) {
    console.log(reqData);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',

      })
    }
    return this.httpService.postService('/login', reqData, true, header)

  }
  AddressService(data: any) {
    console.log(data);
    this.token = localStorage.getItem("token")
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token,
      }),
    };
    return this.httpService.postService('/addAddress', data, true, header);
  }
}
