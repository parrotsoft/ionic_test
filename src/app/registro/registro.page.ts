import { Component, OnInit } from '@angular/core';
import { Parse } from 'parse';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoadingController, NavController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  private parseAppId = '0AW7Hs92kjmBalqNDkbRtGChlRFF0uOu09pUxiFU';
  private parseServerUrl = 'https://parseapi.back4app.com/';
  private parse_js_key = 'Hp1MevzRfVbsj5oJbIZxVk6jBxFuLCcwz1RukWtu';

  formRegistro: FormGroup;

  constructor( private fb: FormBuilder, public loadingController: LoadingController,
               public toastController: ToastController, private nav: NavController) {
    this.parseInitialize();
    this.buildForm();
  }

  ngOnInit() {
  }

  private parseInitialize() {
    Parse.initialize(this.parseAppId, this.parse_js_key);
    Parse.serverURL = this.parseServerUrl;
  }

  private buildForm() {
    this.formRegistro = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onSave() {
    const loading = await this.loadingController.create(
        {
          message: 'Cargando...',
          duration: 2000
        }
    );
    await loading.present();
    const user = new Parse.User();
    user.save(this.formRegistro.value).then( async (res) => {
      const toast = await this.toastController.create({
            message: user.get('username'),
            duration: 2000
          }
      );
      toast.present();
      this.nav.back();
    }).catch( async (error) => {
      const toast = await this.toastController.create({
            message: 'Code: ' + error.code + '- ' + error,
            duration: 2000
          }
      );
      toast.present();
    }).finally(async () => {
      await loading.onDidDismiss();
    });
  }

}
