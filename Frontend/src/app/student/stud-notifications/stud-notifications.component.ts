import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { StudentHomeComponent } from '../student-home/student-home.component';

@Component({
  selector: 'app-stud-notifications',
  templateUrl: './stud-notifications.component.html',
  styleUrls: ['./stud-notifications.component.css']
})
export class StudNotificationsComponent implements OnInit {

  trainerData=[{
    name:"",
    message:"",
    course:"",
    date:""
  }]

  X = localStorage.getItem("email")

  constructor(private _student: StudentService) { }

  ngOnInit(): void {

    this._student.messagedata(this.X).subscribe((data)=>{
      this.trainerData=JSON.parse(JSON.stringify(data))
    })


  }

}
