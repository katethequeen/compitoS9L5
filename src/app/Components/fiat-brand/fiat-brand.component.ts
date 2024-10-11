import { Component } from '@angular/core';
import { iPost } from '../../Models/post';

@Component({
  selector: 'app-fiat-brand',
  templateUrl: './fiat-brand.component.html',
  styleUrl: './fiat-brand.component.scss',
})
export class FiatBrandComponent {
  carArray: iPost[] = [];
  fiatCars: iPost[] = [];

  ngOnInit(): void {
    fetch('db.json')
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          this.carArray = res;

          console.log(this.carArray);

          this.fiatCars = this.carArray.filter((car) => car.brand == 'Fiat');
          console.log(this.fiatCars);
        } else {
          console.log('Server Error');
        }
      })
      .catch((err) => console.log(err));
  }
}
