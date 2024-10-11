import { Component } from '@angular/core';
import { iPost } from '../../Models/post';

@Component({
  selector: 'app-ford-brand',
  templateUrl: './ford-brand.component.html',
  styleUrl: './ford-brand.component.scss',
})
export class FordBrandComponent {
  carArray: iPost[] = [];
  fordCars: iPost[] = [];

  ngOnInit(): void {
    fetch('db.json')
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          this.carArray = res;

          console.log(this.carArray);

          this.fordCars = this.carArray.filter((car) => car.brand == 'Ford');
          console.log(this.fordCars);
        } else {
          console.log('Server Error');
        }
      })
      .catch((err) => console.log(err));
  }
}
