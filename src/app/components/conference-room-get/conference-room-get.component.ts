import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-conference-room-get',
  templateUrl: './conference-room-get.component.html',
  styleUrls: ['./conference-room-get.component.css']
})
export class ConferenceRoomGetComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btnAddOrganization= () => {
    this.router.navigateByUrl('/room/add');
  }

  btnBackToMain= () => {
    this.router.navigateByUrl('/main');
  }

  btnClickGoToEditRoom= () => {
    this.router.navigateByUrl('/room/edit');
  }

  btnClickRemoveRoom= () => {
    this.router.navigateByUrl('/room/get');
    //TODO tu trzeba zrolić logige do wysyłania url api do remave
  }
}
