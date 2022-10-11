import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-notifi-header',
  templateUrl: './notifi-header.component.html',
  styleUrls: ['./notifi-header.component.css']
})
export class NotifiHeaderComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  courses(){

    let url = localStorage.getItem("url")
this._router.navigate([`${url}/history`])

  }

  applications(){
    let url = localStorage.getItem("url")
    this._router.navigate([`${url}/`])
  }

}
