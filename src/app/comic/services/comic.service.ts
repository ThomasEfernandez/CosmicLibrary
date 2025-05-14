
import { inject, Injectable } from '@angular/core';
import { Comic } from '../interfaces/comic';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ComicService {

http = inject(HttpClient);
url = "http://localhost:3000"

getComics ():Observable<Comic[]>{
  return this.http.get<Comic[]>(`${this.url}/comics`);
}
getComicsById (id:string):Observable<Comic[]>{
  return this.http.get<Comic[]>(`${this.url}/comics/${id}`);
}


postComic (comic:Comic):Observable<Comic>{
  return this.http.post<Comic>(`${this.url}`,comic);
}
putComic (comic:Comic):Observable<Comic>{
  return this.http.put<Comic>(`${this.url}`,comic);
}

deleteComicById (id:number):Observable<void>{
  return this.http.delete<void>(`${this.url}/${id}`);
}




}
