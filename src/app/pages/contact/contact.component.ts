import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../_services/api.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '../../pipe/translate.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  submitting = false;
  data:any;
  constructor(private api: ApiService,private toastr:ToastrService,public translate:TranslateService) { }

  ngOnInit() {
    this.api.get('about_pages').subscribe(
      next => {
        this.data = next.data;
      }
    );
  }
  submitForm(form:NgForm) { // ** submity form
    if(form.invalid){
      return;
    }
    this.submitting = true;
    let payload = form.value;
    this.api.post('contact-us',payload).subscribe(
      next => {
        this.submitting = false;
        this.toastr.success('thank you for contact us');
        form.resetForm();
      }
    );
  } // ** End OF Submit From

}
