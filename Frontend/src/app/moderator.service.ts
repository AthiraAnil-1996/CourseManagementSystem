import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModeratorService {
  server_address = 'http://localhost:5000/api'
  constructor(private http: HttpClient) {}
  studentData(id: any) {
    console.log(id)
    return this.http.get(`${this.server_address}/professor/` + id);
  }
  fetchStudent(data:any){
    console.log("data",data)
    return this.http.post(`${this.server_address}/professor/student`,data)
  }
  accept(id:any){
    return this.http.post(`${this.server_address}/professor/accept/`+id , null);
  }
  reject(id:any){
    return this.http.post(`${this.server_address}/professor/reject/`+id , null)
  }

  studentHistory(data:any){
    return this.http.post(`${this.server_address}/professor/studentHistory`,data)

  }

  Course(data:any){
    console.log(data)
    return this.http.post(`${this.server_address}/courseaction`,data)
  }
  Batch(data:any){
    console.log(data)
    return this.http.post(`${this.server_address}/batchaction`,data)
  }

  bulknotification(data:any){
    console.log(data)
    return this.http.post(`${this.server_address}/notifications`,data)
  }

}
