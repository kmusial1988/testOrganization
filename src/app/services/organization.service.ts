import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Organization} from "../models/Organization";

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  private createOrganizationUrl = 'http://localhost:8080/api/user  -- URL którym wysyła api do backend';

  constructor(private httpClient: HttpClient) {
  }

  createOrganization(organization: Organization): Observable<Organization> {
    localStorage.setItem('name', organization.name);
    localStorage.setItem('nip', organization.nip);
    return this.httpClient.post<Organization>(this.createOrganizationUrl, organization);

  }


}
