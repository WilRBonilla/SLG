import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public nav:NavbarService) { 
  }

  ngOnInit(): void {
    this.isYouAlfred();
  }

  isAlfred :boolean = false
  url :string = "http://localhost:4200/admin"

  
  isYouAlfred(){
    let currentUser = JSON.parse(localStorage.getItem("user"));
    let name = currentUser.f_name
    if(name == "Alfred"){
      this.isAlfred = true
    }
  }

  directToAdmin(){
    console.log("admin clicked");
    
  }

}
