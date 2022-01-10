import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }


  account: any = {username: '', password: ''};

  ngOnInit(): void {
  }


  getInfo(event: any){
    const name = event.target.name;
    const value = event.target.value;

    if (name == 'username')
      this.account.username = value;
    else 
      this.account.password = value;
  }

  loginAccount(){
    this.accountService.login(this.account).subscribe(response =>{
      if (response.success){
        localStorage.setItem('academy', response.accessToken);
        this.router.navigate(['home']);
      }
    })
  }


  

}
