import { Component, OnInit } from '@angular/core';
import biciklik from './../../localdata/biciklik.json';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  bicikliList: {
    nev: String, leiras: String, tipus: String, meret: String, sebessegElol: String,
    sebessegHatul: String, szin: String, fek: String, teleszkop: String,
    vaz: String, keszlet: String, nettoAr: String
  }[] = biciklik;

  ngOnInit(): void {
  }

}


