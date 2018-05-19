import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authorise/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {


  constructor(private authService: AuthenticationService, private router: Router) {
      
   }

  ngOnInit() {
  }

}
