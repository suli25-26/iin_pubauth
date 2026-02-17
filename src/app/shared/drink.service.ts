import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DrinkService {
    private readonly http = inject(HttpClient)
    private readonly host = 'http://localhost:8000/api/'

    getDrinks() {
      const token = localStorage.getItem('token')
      const headers = { Authorization: `Bearer ${token}` }
      const url = this.host + 'drinks'
      return this.http.get(url, { headers });
    }

    addDrink(drink: any) {}

    updateDrink(drink: any) {}

    deleteDrink(id: number) {}
}
