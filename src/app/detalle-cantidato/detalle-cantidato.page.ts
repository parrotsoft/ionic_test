import { Component, OnInit } from '@angular/core';
import {NavController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-detalle-cantidato',
  templateUrl: './detalle-cantidato.page.html',
  styleUrls: ['./detalle-cantidato.page.scss'],
})
export class DetalleCantidatoPage implements OnInit {

  constructor(public navParams: NavParams) { }

  ngOnInit() {
    alert(this.navParams.get('id'));
  }

}
