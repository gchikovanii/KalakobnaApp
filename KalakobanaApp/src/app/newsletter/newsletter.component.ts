import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css',
  animations: [
    trigger('flipIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'rotateY(90deg)' }), // Start hidden with a 90-degree rotation
        animate('800ms ease-out', style({ opacity: 1, transform: 'rotateY(0deg)' })) // End fully visible with no rotation
      ])
    ])
  ],
})
export class NewsletterComponent {
    router = inject(Router);
    toastr = inject(ToastrService);
    onClick(){
      this.router.navigate(['/terms']);
    }
    form = new FormGroup({
      email: new FormControl('',{validators:[Validators.required, Validators.email] }),
    });
    onSubmit() {
      const savedLanguage = localStorage.getItem('language');
      let successMessage = 'You subscribed successfully!';
      let success = 'Success!';
      let errorMessage = 'Subscribtion Failed!';
      let err = 'Error';

      if (savedLanguage === 'ka') {
        successMessage = 'გამოწერა გააქტიურებულია!';
        success = 'მადლობა!';
        err = "შეცდომა";
        errorMessage = "გამოწერა ვერ მოხერხდა!"
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
  isVisible = false;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight && rect.bottom >= 0) {
      this.isVisible = true;
    }
  }
}
