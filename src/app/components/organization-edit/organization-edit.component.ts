import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-organization-edit',
  templateUrl: './organization-edit.component.html',
  styleUrls: ['./organization-edit.component.css']
})
export class OrganizationEditComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  btnBackToMain= () => {
    this.router.navigateByUrl('/organization/get');
  }

}
