import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  logged : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  login(){
    this.logged = true;
  }
  logout(){
    this.logged = false;
  }
}
