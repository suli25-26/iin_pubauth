import { Component, inject } from '@angular/core';
import { DrinkService } from '../shared/drink.service';

@Component({
  selector: 'app-drink',
  imports: [],
  templateUrl: './drink.component.html',
  styleUrl: './drink.component.css',
})
export class DrinkComponent {
  private readonly drinkApi = inject(DrinkService)
  protected drinks: any;
  ngOnInit() {
    this.getDrinks()
  }
  getDrinks() {
    this.drinkApi.getDrinks().subscribe({
      next: (result: any) => {
        console.log(result.data)
        this.drinks = result.data
      },
      error: () => {}
    })
  }
}
