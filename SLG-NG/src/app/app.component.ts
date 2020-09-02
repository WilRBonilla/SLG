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

  }
  
}
