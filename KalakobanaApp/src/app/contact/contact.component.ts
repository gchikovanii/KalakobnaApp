import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAreaChart, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { trigger, style, animate, transition, keyframes } from '@angular/animations';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FontAwesomeModule, TranslateModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  animations: [
    trigger('flipFadeIn', [
      transition(':enter', [
        animate('0.8s ease-out', keyframes([
          style({ opacity: 0, transform: 'rotateY(-90deg)', offset: 0 }),
          style({ opacity: 0.5, transform: 'rotateY(-45deg)', offset: 0.5 }),
          style({ opacity: 1, transform: 'rotateY(0deg)', offset: 1.0 })
        ]))
      ])
    ])
  ],
})
export class ContactComponent {
  faEnvelope = faEnvelope;
  faUser = faUser;
  faTextArea = faAreaChart;
  form = new FormGroup({
    email: new FormControl('',{validators:[Validators.required, Validators.email] }),
    name: new FormControl('',Validators.required),
    message: new FormControl('', Validators.required),
  });
  toastr = inject(ToastrService);

  onSubmit() {
      const savedLanguage = localStorage.getItem('language');
      let successMessage = 'Message sent successfully!';
      let success = 'Success!';
      let errorMessage = 'Please fill out all fields correctly!';
      let err = 'Error';

      if (savedLanguage === 'ka') {
        successMessage = 'შეტყობინება წარმატებით გაიგზავნა!';
        success = 'წარმატებით გაიგზავნა!';
        err = "შეცდომა";
        errorMessage = "თქვენი შეტყობინება მიღებულია!"
      }
    if (this.form.valid) {
      console.log("sucesss")
      this.toastr.success(successMessage, success, {
        toastClass: 'ngx-toastr custom-toastr',
        timeOut: 3000,
        positionClass: 'toast-bottom-right'
      });
      this.form.reset();
    } else {
      this.toastr.error(errorMessage, err, {
        toastClass: 'ngx-toastr custom-toastr',
        timeOut: 3000,
        positionClass: 'toast-bottom-right'
      });
    }
  }
}
