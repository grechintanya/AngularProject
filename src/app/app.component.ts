import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Observable } from 'rxjs';
import { AuthService, LoaderService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService,
    private router: Router,
    private loaderService: LoaderService
  ) { }

    showLoader$!: Observable<boolean>;

  ngOnInit(): void {
    this.showLoader$ = this.loaderService.loadingAction$.pipe(delay(0));

  }


}
