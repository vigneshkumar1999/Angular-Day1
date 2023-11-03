import { Component } from '@angular/core';
import {FormControl} from '@angular/forms'
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  Fname=new FormControl('');
  Lname=new FormControl('');

  userDetails(){
    console.log("FirstName is :"+this.Fname.value);
    console.log("LastName is :"+this.Lname.value);
    alert("Details has been Submitted")
  }
}
