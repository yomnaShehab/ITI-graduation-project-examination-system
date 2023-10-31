import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation-sidebar',
  templateUrl: './navigation-sidebar.component.html',
  styleUrls: ['./navigation-sidebar.component.scss']
})
export class NavigationSidebarComponent implements OnInit {
  userId?: number;

  constructor(private authService: AuthService,
              private router: Router) {

  }

  ngOnInit() {
    this.userId = this.authService.userInfo?.id;
  }

  onUserLogout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
