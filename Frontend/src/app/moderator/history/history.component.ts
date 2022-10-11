import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { ModeratorService } from 'src/app/moderator.service';
import * as XLSX from 'xlsx';
import * as AOS from 'aos';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  Types = ['Course', 'Batch'];
  array: any;
  courses = new Array;
  batches = new Array;
  select: any;
  data = {
    add: '',
    type: '',
  };

  constructor(private _student: StudentService, private _moderator: ModeratorService) { }

  ngOnInit(): void {
    this._student.getCourses().subscribe((data) => {
      this.array = JSON.parse(JSON.stringify(data));
      this.courses = this.array[0].course;
      this.batches = this.array[0].batch;
    });
    }

    valuechange(newValue: any) {
      this.data.type = newValue;
      if (this.data.type == 'Batch') {
        this.select = this.batches;
      } else {
        this.select = this.courses;
      }
      console.log(newValue);
    }
  
    displayStyle1 = 'none';
    displayStyle2 = 'none';
  
    openPopup1() {
      this.displayStyle1 = 'block';
    }
    closePopup1() {
      this.displayStyle1 = 'none';
    }
    openPopup2() {
      this.displayStyle2 = 'block';
    }
    closePopup2() {
      this.displayStyle2 = 'none';
    }
  
    save() {
      if (this.data.type == 'Batch') {
        this.batches.push(this.data.add);
        this._moderator.Batch(this.batches).subscribe(()=>{
          window.location.reload()
        })
  
      } else {
        this.courses.push(this.data.add);
        this._moderator.Course(this.courses).subscribe(()=>{
          window.location.reload()
        })
      }
    }
  
    delete() {
      if (this.data.type == 'Course') {
        let index = this.courses.indexOf(this.data.add);
        this.courses.splice(index,1)
        this._moderator.Course(this.courses).subscribe(()=>{
          window.location.reload()
        })
        
      } else {
        let index = this.batches.indexOf(this.data.add);
        this.batches.splice(index,1)
        this._moderator.Batch(this.batches).subscribe(()=>{
          window.location.reload()
        })
      }
    }
  }
  