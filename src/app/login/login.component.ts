import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login service/login.service';
import { RefreshService } from '../services/refresh service/refresh.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(public _loginService: LoginService, public _refresh: RefreshService,) { }

  showComponent = true;
  showLoginError = false;

  name = '';
  password = '';

  nameControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required]);

  getErrorMessage(control: FormControl) {
    if (control.hasError('required')) {
      return 'You must enter a value';

    } else {
      return 'You must enter a valid value';
    }

    return control.hasError('name') ? 'Not a valid name' : '';
  }

  showError() {
    
    const div = document.querySelector(".login-error-show");
    div?.classList.remove('hide');
  }
  hideError() {
    const div = document.querySelector(".login-error-show");
    div?.classList.add('hide');
  }

  async onSubmit() {

    const nameValue = this.name;
    const passwordValue = this.password;
   await this._loginService.login(nameValue, passwordValue).subscribe(response => {

      if (response.status >= 200 && response.status < 300) {
       this.showComponent = false;
       //refresh the page data
       this._refresh.refresh();

      } else {
        // Handle the error response 
        this.showError();
      }
    }, error => {
      if (error.status >= 200 && error.status < 300) {
        this.showComponent = false;
       //refresh the page data
       this._refresh.refresh();

      } else {
        this.showError();
      }
    });  


    

  }
}
