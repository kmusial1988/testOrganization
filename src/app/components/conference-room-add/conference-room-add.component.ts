import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-conference-room-add',
  templateUrl: './conference-room-add.component.html',
  styleUrls: ['./conference-room-add.component.css']
})
export class ConferenceRoomAddComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  btnClickToRoomGet= () => {
    this.router.navigateByUrl('/room/get');
  }
}
