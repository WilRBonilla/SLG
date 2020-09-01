import { Component, OnInit } from '@angular/core';
import { SlgService } from 'src/app/services/slg.service';
import { Ingredient } from 'src/app/models/Ingredient';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor(private slgService: SlgService) { }

  ngOnInit(): void {
    this.displayAllIngredients();
  }

  allIngredients: Array<Ingredient>;

  displayAllIngredients() {

    this.slgService.getAllIngredients().subscribe(

      (response) => {
        this.allIngredients = response;
        console.log(this.allIngredients);

      },
      (response) => {
        console.log("Something went wrong, no ingredients received");
      }

    )

  }

}
