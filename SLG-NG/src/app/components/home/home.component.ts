import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.onHomepageLoad()
  }

  username :String= ""

  onHomepageLoad(){
    let currentUser = JSON.parse(localStorage.getItem("user"));
    this.username = currentUser.f_name
  }

}
