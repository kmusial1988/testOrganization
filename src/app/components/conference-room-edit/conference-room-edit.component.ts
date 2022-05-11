import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-conference-room-edit',
  templateUrl: './conference-room-edit.component.html',
  styleUrls: ['./conference-room-edit.component.css']
})
export class ConferenceRoomEditComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btnClickToRoomGet= () => {
    this.router.navigateByUrl('/room/get');
  }
}
