import { Component } from '@angular/core';
import { Shopper } from './models/Shopper';
import { SlgService } from './services/slg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public router: Router) {}
  
  title = 'Shopping List Generator';

  public navbar: boolean;


  navbar: boolean = false;

  loginPage() {
    this.login = false;
    this.register = true;

    this.body = false;
    this.navbar = false;
  }

  registerPage() {
    this.login = false;
    this.register = false;

    this.body = true;
    this.navbar = true;
  }

  // option(value: string) {
  //   switch(value) {
  //     case "logout" :
  //       this.registerPage();
  //   }

  // }
  navbarFunc() {
    this.login = false;
    this.navbar = true;
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
          this.navbarFunc();
          this.router.navigate(['/home']);

          this.body = true;

        }else {
          console.log("incorrect log in info");
        }
      }
    )
  }

}
