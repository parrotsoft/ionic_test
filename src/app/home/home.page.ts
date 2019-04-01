import { Component } from '@angular/core';
import { Parse } from 'parse';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private parseAppId = '0AW7Hs92kjmBalqNDkbRtGChlRFF0uOu09pUxiFU';
  private parseServerUrl = 'https://parseapi.back4app.com/';
  private parse_js_key = 'Hp1MevzRfVbsj5oJbIZxVk6jBxFuLCcwz1RukWtu';

  formLogin: FormGroup;

  constructor( private fb: FormBuilder, public loadingController: LoadingController,
               public toastController: ToastController, private nav: NavController,
               private _ServiceAuth: AuthService) {
    this.parseInitialize();
    this.buildForm();
  }

  private parseInitialize() {
    Parse.initialize(this.parseAppId, this.parse_js_key);
    Parse.serverURL = this.parseServerUrl;
  }

  private buildForm() {
    this.formLogin = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onEnter() {
    const loading = await this.loadingController.create(
        {
          message: 'Cargando...',
          duration: 2000
        }
    );
    await loading.present();
    Parse.User.logIn(this.formLogin.controls['username'].value, this.formLogin.controls['password'].value).then(async (res) => {
      this.nav.navigateRoot('principal');
    }).catch( async (error) => {
      const toast = await this.toastController.create({
        message: 'Code: ' + error.code + ' - ' + error,
        duration: 2000
      });
      toast.present();
    }).finally( async () => {
      await loading.onDidDismiss();
    });
  }

}
