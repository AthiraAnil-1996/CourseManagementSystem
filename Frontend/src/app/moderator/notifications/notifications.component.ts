import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeratorService } from 'src/app/moderator.service';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  courses=[{
    title:"",
    description:"",
    image:""
  }]

  

  x=localStorage.getItem("pname")

  data={
    course:"",
    message:"",
    professor:this.x,
  }

  

  constructor(private _moderator:ModeratorService, private _student:StudentService, private router:Router) { }

    messagealert(){
      this._moderator.bulknotification(this.data).subscribe((data:any)=>{
        if(data.status){
          alert("Successfully Generated Alert");
        }
        else{
          alert("Error")
        }
      })
      location.reload();
    }

  

  ngOnInit(): void {
   
    this._student.coursecomponent().subscribe((data)=>{
      this.courses=JSON.parse(JSON.stringify(data))
    })

  }

}
