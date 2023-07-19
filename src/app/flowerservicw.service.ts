import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{
 InsertedSuccess,
 UniqueConstraintError,
  Read,
  Flower,Signupinterface,
  Logininterface
} from './flower';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FlowerservicwService {
  

  constructor(private http: HttpClient) { }
  headers=new HttpHeaders({
    'content-type':'application/json',
    Authentication:'Bearer'+localStorage.getItem('token'),
  });
  private url = 'http://localhost:3000/';
  Getflower(p_type: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}plants/Read${p_type}`);
  }
  Insert(
    Details: Flower
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'plants/Insert',
      Details,
      { headers: this.headers }
    );

  }
  Update(p_id:String, Details:Flower) {
    return this.http.put(`${this.url}plants/Update${p_id}`, Details, {
      headers: this.headers,
    });
  }
  Read1(p_id: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}plants/Read${p_id}`);
  }
  Update1(p_id:String, Details:Flower) {
    return this.http.put(`${this.url}plants/Update${p_id}`, Details, {
      headers: this.headers,
    });
  }
  Insert1(Details: Signupinterface):
    Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'register/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read3(email: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}register/Read${email}`);
  }
  ReadAll(): Observable<Read> {
    return this.http.get<Read>(`${this.url}plants/ReadAll`);
  }
  Delete(p_id: String): Observable<InsertedSuccess> {
    console.log(`${this.url}plants/Delete${p_id}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}plants/Delete${p_id}`
    );
  }
  Read2(p_type: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}plants/Read${p_type}`);
  }
  Sread(p_name:String):Observable<Read>{
    return this.http.get<Read>(`${this.url}plants/Read${p_name}`)
  }
}
