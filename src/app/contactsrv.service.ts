import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {map} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ContactsrvService {


  private api = "https://mailthis.to/dtr"

  constructor(private  http: HttpClient) {
  }

  postMessage(input: any) {
    return this.http.post(this.api, input, {responseType: 'text'})
      .pipe(
        map(
          response => ({
            if (response : string) {
              return response;
            }
          }),
          (error: any) => {
            return error;
          }))
  }
}
