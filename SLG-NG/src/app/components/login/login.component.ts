import { Component, OnInit } from '@angular/core';
import { SlgService } from 'src/app/services/slg.service';
import { Shopper } from 'src/app/models/Shopper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private slgService: SlgService, public router: Router) { }

  ngOnInit(): void {
  }

  id: number;
  username: string;
  password: string;
  shopper: Shopper;
  checkShopper: Shopper;
  tempFirst: string;
  tempSecond: string;

  getLogin() {
    this.tempFirst = "first";
    this.tempSecond = "second";
    this.shopper = new Shopper(this.tempFirst, this.tempSecond, this.username, this.password);
    console.log(this.shopper);
    this.slgService.getLoginInfo(this.shopper).subscribe(
      (response) => {
        console.log(response);
        this.shopper = response;
        if (this.shopper.u_id != 0) {
          this.router.navigate(['/home']);
        }else {
          console.log("incorrect log in info");
        }
      }
    )
  }
  
}
