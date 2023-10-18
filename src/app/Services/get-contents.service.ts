import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

/* import { Article } from '../model/article.model';
import { OneArticle } from '../model/oneArticle.model'; */

/* In this web
contents are the WordPress POSTS */

let theContentsServer:string = ""

@Injectable({
  providedIn: 'root'
})
export class GetContentsService {

  constructor( private http: HttpClient ) { }

  getAllHomeContents(categoryId: number) {
    theContentsServer = "https://app.pieib.com/wp-json/wp/v2/posts"
    return  this.http.get<any>(theContentsServer+'?categories='+categoryId)
  }

  getOneContentById(contentId: number) {0
    theContentsServer = "https://app.pieib.com/wp-json/wp/v2/posts" + '/' + contentId + '?&_embed'
    return this.http.get<any>(`${theContentsServer}`)
  }

}