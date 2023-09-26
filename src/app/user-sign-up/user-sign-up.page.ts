import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { IonicAuthService } from '../service/ionic-auth.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.page.html',
  styleUrls: ['./user-sign-up.page.scss'],
})
export class UserSignUpPage implements OnInit {

  validationFormUser: FormGroup;
  successMsg = '';

  validationUserMessage={
    fullname: [{type:'required', message:'Enter your full names'}],
    email: [
      {type:'required', message:'Provide email'},
      {type:'pattern', message:'Email entered is incorrect. Try again..'}],
    phone: [{type:'required', message:'Provide phone No.'}],
    location: [{type:'required', message:'Provide Location'}],
    password: [
      {type:'required', message:'Provide password'},
      {type: 'minLength',message:'Password length must be 5 characters long'}
      ]
  };

  constructor(public formbuilder: FormBuilder, public authservice: IonicAuthService, private router: Router,
    public nav: NavController) { }

  ngOnInit() {

    this.validationFormUser = this.formbuilder.group({
      email: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      fullname: new FormControl('',Validators.compose([
        Validators.required
      ])),
      location: new FormControl('',Validators.compose([
        Validators.required
      ])),
      phone: new FormControl('',Validators.compose([
        Validators.required
      ])),
    });
  }

  registerUser(value){
    this.authservice.userRegistration(value)
      .then((response) => {
        this.successMsg = 'New user created.';
        this.router.navigate(['user-login']);
      }, error => {
        this.validationUserMessage = error.message;
        this.successMsg = '';
      });
  }

  goToLogin(vlaue){
    this.router.navigateByUrl('/user-login',{replaceUrl:true});
  }

}

