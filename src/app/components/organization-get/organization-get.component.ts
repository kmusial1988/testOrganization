import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-organization-get',
  templateUrl: './organization-get.component.html',
  styleUrls: ['./organization-get.component.css']
})
export class OrganizationGetComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btnClickToAddOrganization= () => {
    this.router.navigateByUrl('/organization/add');
  }

  btnClickToMain= () => {
    this.router.navigateByUrl('/main');
  }
}
