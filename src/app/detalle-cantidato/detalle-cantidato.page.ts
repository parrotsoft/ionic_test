import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detalle-cantidato',
  templateUrl: './detalle-cantidato.page.html',
  styleUrls: ['./detalle-cantidato.page.scss'],
})
export class DetalleCantidatoPage implements OnInit {

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
      console.log(this.activateRoute.snapshot.params.id);
  }

}
