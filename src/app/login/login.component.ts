import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string = 'Vous êtes déconnecté. (pikachu/pikachu)'
  name: string;
  password: string;
  auth : AuthService;

  constructor(
    private authService: AuthService,
    private route : Router
  ) { }

  ngOnInit(): void {
    this.auth = this.authService; 
  }

  setMessage(){
    if(this.auth.isLoggedIn){
      this.message = "Vous êtes connecté";
    }else{
      this.message = "Identifiant ou mot de passe incorrect.";
    }
  }

  login(){
    this.message = "Tentative de connexion au serveur";
    this.auth.login(this.name, this.password)
      .subscribe((isLoggedIn: boolean) => {
        this.setMessage();
        if(isLoggedIn){
          this.route.navigate(['/pokemons'])
        }else{
          this.password = "";
          this.route.navigate(['/login']);
        }
      })
  }

  logout(){
    this.auth.logout();
    this.message = "Vous êtes deconnecté."
  }

}
