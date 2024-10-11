import { Component } from '@angular/core';
import { iPost } from '../../Models/post';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.scss',
})
export class BrandComponent {
  filteredCars: iPost[] = [];
  carArray: iPost[] = [];

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
        } else {
          console.log('Server Error');
        }
      })
      .catch((err) => console.log(err));
  }
}
