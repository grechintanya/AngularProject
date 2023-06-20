import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private authService: AuthService) {  }

  @Input() isAuth!: boolean;
  @Input() userName!: string;

  @Output()
  logoutButtonClicked: EventEmitter<boolean> = 
  new EventEmitter<boolean>();

  onLogoutButtonClicked() {
    this.logoutButtonClicked.emit(false);
  }
}
