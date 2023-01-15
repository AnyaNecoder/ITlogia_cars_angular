import {Component, HostListener} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  priceForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    car: ['', Validators.required]
  });

  carsData = [
    {
      image: "lamborghini_huracan_spyder.jpg",
      name: "Lamborghini Huracan Spyder",
      gear: "полный",
      engine: 5.2,
      places: 2
    },
    {
      image: "chevrolet_corvette.jpg",
      name: "Chevrolet Corvette",
      gear: "полный",
      engine: 6.2,
      places: 2
    },
    {
      image: "ferrari_california.jpg",
      name: "Ferrari California",
      gear: "полный",
      engine: 3.9,
      places: 4
    },
    {
      image: "lamborghini_urus.jpg",
      name: "Lamborghini Urus",
      gear: "полный",
      engine: 4.0,
      places: 5
    },
    {
      image: "audi_R8.jpg",
      name: "Audi R8",
      gear: "полный",
      engine: 5.2,
      places: 2
    },
    {
      image: "chevrolet_camaro.jpg",
      name: "Chevrolet Camaro",
      gear: "полный",
      engine: 2.0,
      places: 4
    }   
  ];
    

  constructor(private fb: FormBuilder) {
  }

  goScroll(target: HTMLElement, car?: any) {
    target.scrollIntoView({behavior: "smooth"});
    if (car) {
      this.priceForm.patchValue({car: car.name});
    }
  }

  trans: any;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.trans = {transform: 'translate3d(' + ((e.clientX * 0.3) / 8) + 'px,' + ((e.clientY * 0.3) / 8) + 'px,0px)'};
}

  bgPos: any;
  @HostListener('document:scroll', ['$event'])
  onScroll() {
    this.bgPos = {backgroundPositionX: '0' + (0.3 * window.scrollY) + 'px'};
}

  onSubmit() {
    if (this.priceForm.valid) {
      alert("Спасибо за заявку! Мы свяжемся с Вами в ближайшее время.");
      this.priceForm.reset();
    }
  }
}
