import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  server_address = 'api'

  constructor(public http: HttpClient) { }

  studentcheck(data: any) {
    return this.http.post(`http://localhost:5000/api/student`, data)
  }
  moderatorcheck(data: any) {
    return this.http.post(`http://localhost:5000/api/professor`, data)
  }
  admincheck(data: any) {
    return this.http.post(`http://localhost:5000/api/admin`, data)
  }

  studentforgot(data:any){
    return this.http.post(`http://localhost:5000/api/student/pin`,data)
  }

  moderatorforgot(data:any){
    console.log(data)
    return this.http.post(`http://localhost:5000/api/professor/pin`,data)
  }

  adminforgot(data:any){
    return this.http.post(`http://localhost:5000/api/admin/pin`,data)
  }

  studentnewpassword(data:any){
    console.log(data)
    return this.http.post(`http://localhost:5000/api/student/newpassword`,data)
  }

  moderatornewpassword(data:any){
    return this.http.post(`http://localhost:5000/api/professor/newpassword`,data)
  }

  adminnewpassword(data:any){
    return this.http.post(`http://localhost:5000/api/admin/newpassword`,data)
  }

  isLoggedIn(){
return !!localStorage.getItem("token")
  }

}
