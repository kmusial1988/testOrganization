import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btnBackToMain= () => {
    this.router.navigateByUrl('/organization/get');
  }
}
