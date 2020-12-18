import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from './../../app.cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  EmptyCart = true;

  constructor(
    private router: Router,
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
      email: '',
      telefon: '',
    });
  }

  calcTotal() {
    let counter = 0;
    for (let i = 0; i < this.cartService.getItems().length; i++) {
      counter++;
      this.EmptyCart = false;
    }
    return counter;
  }

  Totals() {
    let totals = 0;
    let termekek = this.cartService.getItems();
    for (let i = 0; i < this.cartService.getItems().length; i++) {
      totals += termekek[i].nettoAr;
    }
    return totals;
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    console.warn('Rendelési adatok', customerData);
    console.warn('Rendelés termékek', this.items);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    this.router.navigate(['/home/']) 
    window.alert('Rendelés beküldve!');
  }
}