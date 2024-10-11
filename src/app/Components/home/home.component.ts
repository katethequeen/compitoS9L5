import { Component, OnInit } from '@angular/core';
import { iPost } from '../../Models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  filteredCars: iPost[] = [];
  carArray: iPost[] = [];
  randomCars: iPost[] = [];

  ngOnInit(): void {
    fetch('db.json')
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          this.carArray = res;

          console.log(this.carArray);

          this.filteredCars = this.carArray.filter(
            (car, index, self) =>
              index === self.findIndex((c) => c.brand === car.brand)
          );
          this.randomCars = this.getRandomCars(this.filteredCars, 2);
        } else {
          console.log('Server Error');
        }
      })
      .catch((err) => console.log(err));
  }

  getRandomCars(cars: any[], num: number) {
    const shuffled = cars.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }
}
