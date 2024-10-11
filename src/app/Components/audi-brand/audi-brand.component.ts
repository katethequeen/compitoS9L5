import { Component } from '@angular/core';
import { iPost } from '../../Models/post';

@Component({
  selector: 'app-audi-brand',
  templateUrl: './audi-brand.component.html',
  styleUrl: './audi-brand.component.scss',
})
export class AudiBrandComponent {
  carArray: iPost[] = [];
  audiCars: iPost[] = [];

  ngOnInit(): void {
    fetch('db.json')
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          this.carArray = res;

          console.log(this.carArray);

          this.audiCars = this.carArray.filter((car) => car.brand == 'Audi');
          console.log(this.audiCars);
        } else {
          console.log('Server Error');
        }
      })
      .catch((err) => console.log(err));
  }
}
