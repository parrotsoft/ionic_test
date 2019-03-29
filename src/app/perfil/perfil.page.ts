import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Parse } from 'parse';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  private parseAppId = '0AW7Hs92kjmBalqNDkbRtGChlRFF0uOu09pUxiFU';
  private parseServerUrl = 'https://parseapi.back4app.com/';
  private parse_js_key = 'Hp1MevzRfVbsj5oJbIZxVk6jBxFuLCcwz1RukWtu';

  formPerfil: FormGroup;

  constructor( private fb: FormBuilder) {
    this.buildForm();
    this.parseInitialize();
  }

  ngOnInit() {
    this.getInfoUser();
  }

  private parseInitialize() {
    Parse.initialize(this.parseAppId, this.parse_js_key);
    Parse.serverURL = this.parseServerUrl;
  }

  buildForm() {
    this.formPerfil = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(4)]],
      apellidos: ['', [Validators.required, Validators.minLength(4)]],
      telefono: ['', [Validators.required, Validators.minLength(4)]],
      correo: ['', [Validators.required, Validators.email]]
    });
  }

  getInfoUser() {
    Parse.User.currentAsync().then(user => {
      this.formPerfil.controls['nombre'].setValue(user.get('nombre'));
      this.formPerfil.controls['apellidos'].setValue(user.get('apellidos'));
      this.formPerfil.controls['telefono'].setValue(user.get('telefono'));
      this.formPerfil.controls['correo'].setValue(user.get('correo'));
    });
  }

  onGuardar() {
    Parse.User.currentAsync().then(user => {
      user.set('nombre', this.formPerfil.controls['nombre'].value);
      user.set('apellidos', this.formPerfil.controls['apellidos'].value);
      user.set('telefono', this.formPerfil.controls['telefono'].value);
      user.set('correo', this.formPerfil.controls['correo'].value);
      user.save().then((resp) => {
        alert('Perfil actualizado...');
      }).catch(error => {
        alert('Error al Guardar ' + error);
      });
    }).catch(error => {
      alert(error);
    });
  }

}
