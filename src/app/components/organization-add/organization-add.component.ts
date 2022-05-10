import { Component, OnInit } from '@angular/core';
import {OrganizationService} from "../../services/organization.service";
import {Organization} from "../../models/Organization";
import {Router} from "@angular/router";

@Component({
  selector: 'app-organization-add',
  templateUrl: './organization-add.component.html',
  styleUrls: ['./organization-add.component.css']
})
export class OrganizationAddComponent implements OnInit {

  constructor(private organizationService: OrganizationService, private router: Router ) { }

  ngOnInit(): void {
  }
  addOrganization(name: string, nip: string): void{
    this.organizationService.createOrganization({name, nip} as Organization)
      .subscribe((data) => {console.warn(data)})

  }

  btnBackToMain= () => {
    this.router.navigateByUrl('/organization/get');
  }
}
