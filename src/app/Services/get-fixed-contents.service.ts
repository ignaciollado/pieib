import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

/* import { Article } from '../model/article.model';
import { OneArticle } from '../model/oneArticle.model'; */

/* In this web
contents are the WordPress PAGES */

const theContentsServer ="https://app.pieib.com/wp-json/wp/v2/pages"

@Injectable({
  providedIn: 'root'
})
export class GetFixedContentsService {

  constructor( private http: HttpClient ) { }

  getAllHomeContents() {
/*     this.messagesService.add('ArticleService: fetched ALL articles')
    return this.http.get<Article>( this.apiBaseUrl, { headers: this.headers } ) */
    return  this.http.get<any>(`${theContentsServer}`)
  }

  getOneContent(contentId: number) {
    return this.http.get<any>(`${theContentsServer}/${contentId}`)
  }


}
