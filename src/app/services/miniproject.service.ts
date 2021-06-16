import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MiniProject } from '../models/miniproject';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class MiniprojectService {
  public url:string;

  constructor(
    private _http: HttpClient

  ) { 
    this.url = Global.url;
  }

  saveMiniProject(miniproject: MiniProject): Observable<any>{
		let params = JSON.stringify(miniproject);
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.post(this.url+'save-miniproject', params, {headers: headers});
	}

	getMiniProjects(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'miniprojects', {headers: headers});
	}

	getMiniProject(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'miniproject/'+id, {headers: headers});
	}

	deleteMiniProject(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.delete(this.url+'miniproject/'+id, {headers: headers});
	}

	updateMiniProject(miniProject): Observable<any>{
		let params = JSON.stringify(miniProject);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.put(this.url+'miniproject/'+miniProject._id, params, {headers: headers});
	}

	removeImage(miniProject): Observable<any>{
		let params = JSON.stringify(miniProject);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
	
		return this._http.post(this.url+'remove-images/'+miniProject._id, params, {headers: headers});
	}

}

