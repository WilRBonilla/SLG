import { Component, OnInit } from '@angular/core';
import { SlgService } from 'src/app/services/slg.service';
import { Shopper } from 'src/app/models/Shopper';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private slgService: SlgService) { }

  ngOnInit(): void {
  }
  
    f_name: string;
    l_name: string;
    username: string;
    password: string;


    addShopper() {
      this.slgService.addShopper(new Shopper(this.f_name, this.l_name, this.username, this.password)).subscribe(

        (response) => {
          console.log(response);
        }

      )
    }
}
