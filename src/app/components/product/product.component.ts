import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import biciklik from './../../localdata/biciklik.json';
import { CartService } from './../../app.cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  bicikliList: {
    nev: String, leiras: String, tipus: String, meret: String, sebessegElol: String,
    sebessegHatul: String, szin: String, fek: String, teleszkop: String,
    vaz: String, keszlet: String, nettoAr: String
  }[] = biciklik;

  addToCart(biciklik) {
    this.cartService.addToCart(biciklik);
    //console.log(biciklik);
  }

  ngOnInit(): void {
  }

}


