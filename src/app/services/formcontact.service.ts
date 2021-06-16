import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FormContact } from '../models/formContact';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class FormContactService {
  public url:string;

	constructor(
		private _http: HttpClient
	){
		this.url = Global.url;
	}

	saveFormContact(formContact: FormContact): Observable<any>{
		let params = JSON.stringify(formContact);
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.post(this.url+'save-formcontact', params, {headers: headers});
	}

	getFormContacts(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'formcontacts', {headers: headers});
	}

	getFormContact(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'formcontact/'+id, {headers: headers});
	}

	deleteFormContact(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.delete(this.url+'formcontact/'+id, {headers: headers});
	}

	updateFormContact(formContact:any): Observable<any>{
		let params = JSON.stringify(formContact);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.put(this.url+'formcontact/'+formContact._id, params, {headers: headers});
	}


}