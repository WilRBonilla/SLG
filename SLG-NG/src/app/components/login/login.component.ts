import { Component, OnInit } from '@angular/core';
import { SlgService } from 'src/app/services/slg.service';
import { Shopper } from 'src/app/models/Shopper';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private slgService: SlgService, public router: Router, private nav: NavbarService) {
 
   }

  ngOnInit(): void {
    this.login = true;
    this.register = false;
    this.nav.hide();
    
  }
  login: boolean = true;
  register: boolean = false;
  

  loginPage() {
    this.login = false;
    this.register = true;

  }

  registerPage() {
    this.login = true;
    this.register = false;

  }


  id: number;
  username: string;
  password: string;
  shopper: Shopper;
  checkShopper: Shopper;
  tempFirst: string;
  tempSecond: string;

  f_name: string;
    l_name: string;
    addusername: string;
    addpassword: string;


    addShopper() {
      this.slgService.addShopper(new Shopper(this.f_name, this.l_name, this.addusername, this.addpassword)).subscribe(

        (response) => {
          console.log(response);
        }
      )
      this.router.navigate(['/home']);
    }

  getLogin() {
    this.tempFirst = "first";
    this.tempSecond = "second";
    this.shopper = new Shopper(this.tempFirst, this.tempSecond, this.username, this.password);
    console.log(this.shopper);
    this.slgService.getLoginInfo(this.shopper).subscribe(
      (response) => {
        console.log(response);
        
        // Upon success, this will save the user data to client and can be retrieved from any component.
        localStorage.setItem("user", JSON.stringify(response));
        this.shopper = response;
        if (this.shopper.u_id != 0) {
          this.nav.show();
          this.router.navigate(['/home']);


        }else {
          alert("Incorrect username or password");
          console.log("incorrect log in info");
        }
      }
    )
  }
  
}
