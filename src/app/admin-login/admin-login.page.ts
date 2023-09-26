import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { IonicAuthService } from '../service/ionic-auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
})
export class AdminLoginPage implements OnInit {

  validationFormUser: FormGroup;

  validationUserMessage ={
    email:[
      {type:'required', message:'Please enter your email'},
      {type:'pattern', message:'The email entered is incorrect.Try again'}
    ],
    password:[
      {type:'required', message:'Please enter your password'},
      {type:'minlength', message:'The password must be at least 5 characters or more'}
    ]
  };

  constructor(public formbuilder: FormBuilder, public authservice: IonicAuthService, private router: Router, public nav: NavController) { }

  ngOnInit() {

    this.validationFormUser = this.formbuilder.group({
      email: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))
    });
  }


  loginUser(value){
    console.log('Am logged In');
    try{
      this.authservice.loginFireauth(value).then(resp =>{
        console.log(resp);
        this.router.navigate(['admin-dashboard']);
      });
    }catch(err){
      console.log(err);
    }
  }

  registerUser(){
    this.nav.navigateForward(['admin-dashboard']);
  }

}
