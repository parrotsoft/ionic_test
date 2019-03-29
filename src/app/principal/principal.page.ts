import { Component, OnInit } from '@angular/core';
import {MenuController, NavController, ToastController} from '@ionic/angular';
import { Parse } from 'parse';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  private parseAppId = '0AW7Hs92kjmBalqNDkbRtGChlRFF0uOu09pUxiFU';
  private parseServerUrl = 'https://parseapi.back4app.com/';
  private parse_js_key = 'Hp1MevzRfVbsj5oJbIZxVk6jBxFuLCcwz1RukWtu';

  candidatos: any[];

  constructor(private menu: MenuController, private nav: NavController, private toastCtrl: ToastController) {
    this.parseInitialize();
  }

  ngOnInit() {
    this.getAllCandidatos();
  }

  private parseInitialize() {
    Parse.initialize(this.parseAppId, this.parse_js_key);
    Parse.serverURL = this.parseServerUrl;
  }

  onOpenMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  onSalir() {
    Parse.User.logOut().then((resp) => {
      this.nav.navigateRoot('home');
    }).catch(error => {
      alert('Error ' + error);
    });
  }

  getAllCandidatos() {
    const candidatos = Parse.Object.extend('Candidatos');
    const query = new Parse.Query(candidatos);
    query.find().then((resp) => {
      this.candidatos = resp;
      // console.log(JSON.stringify(resp));
    });
  }
}
