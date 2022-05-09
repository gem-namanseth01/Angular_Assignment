import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  arr = JSON.parse(localStorage.getItem('arr1') || '[]');

  login = this.fb.group({
    userName: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })
  flag :boolean = false;

  one() {
    for (var product of this.arr) {
      if(this.login.value.userName==product.name && this.login.value.password==product.password){
        this.flag = true;
        return
      }
    }
    alert("username or password is invalid!!")
  }


  ngOnInit(): void {
  }

}
