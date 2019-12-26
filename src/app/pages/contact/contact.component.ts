import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../_services/api.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private api: ApiService,private toastr:ToastrService) { }

  ngOnInit() {
  }
  submitForm(form:NgForm){
    if(form.invalid){
      return;
    }
    let payload = form.value;
    this.api.post('',payload).subscribe(
      next => {
        this.toastr.success('thank you for contact us');
        form.resetForm();
      }
    );
  }

}
