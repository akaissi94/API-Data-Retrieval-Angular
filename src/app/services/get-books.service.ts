import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class GetBooksService {
  constructor(private http: HttpClient) {}
  private baseURL = "https://www.googleapis.com/books/v1/volumes";
  getData(query: string) {
    return this.http.get(this.baseURL, { params: { q: query } });
  }
}
