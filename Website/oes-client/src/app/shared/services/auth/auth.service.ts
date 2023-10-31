import {Injectable} from '@angular/core';
import {HttpService} from "../http/http.service";
import {Observable} from "rxjs";
import {IUser, USER_ROLES} from "../../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public get userInfo(): IUser | null {
    return this.getUserFromLocalStorage();
  }

  public set userInfo(user: IUser | null) {
    if (user) {
      this.saveUserToLocalStorage(user);
    } else {
      localStorage.removeItem('user');
    }
  }

  public get isUserLoggedIn(): boolean {
    return !!this.userInfo;
  }

  public get UserRole(): USER_ROLES | null {
    if (this.userInfo) {
      return this.userInfo.role;
    }
    return null;
  }

  constructor(private httpService: HttpService) {
  }

  loginWithEmailAndPassword(loginInfo: { email: string; password: string; }): Observable<IUser> {
    return this.httpService.post('users/login', loginInfo);
  }

  saveUserToLocalStorage(user: IUser): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUserFromLocalStorage(): IUser | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  logout(): void {
    localStorage.removeItem('user');
    this.userInfo = null;
  }
}
