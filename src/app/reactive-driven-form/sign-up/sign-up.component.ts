import { Component, OnInit } from '@angular/core';
import { User1 } from 'src/user-reactive';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  get userName() {
    return this.signUp.get('userName');
  }
 get fatherName() {
    return this.signUp.get('fatherName');
  }
  get email() {
    return this.signUp.get('email');
  }
  get password() {
    return this.signUp.get('password');
  }
  get mobile() {
    return this.signUp.get('mobile');
  }

  validateMobile(numbers: any) {
    return /^\d{10}$/.test(numbers.value) ? null : numbers;
  }

  validateEmail(emails: any) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/.test(emails.value)
      ? null
      : emails;
  }

  constructor(private fb: FormBuilder) {
    localStorage.setItem('arr', '[]');
  }

  signUp = this.fb.group({
    userName: ['', Validators.required],
    fatherName: ['', Validators.required],
    email: ['', [Validators.required, this.validateEmail]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    mobile: ['', [Validators.required, this.validateMobile]],
  });

  person:User1 = new User1('','','','','');
  users :User1[] = JSON.parse(localStorage.getItem('arr1') || '[]');

  ngOnInit(): void {}
  onSubmit(signUp: any) {
    this.person  = new User1(signUp.value.userName,signUp.value.fatherName,signUp.value.email,signUp.value.password,signUp.value.mobile)
    this.users.push(this.person);
    localStorage.setItem('arr1',JSON.stringify(this.users))
    this.signUp.reset();
  }

}
