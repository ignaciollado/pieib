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

  status: string = "publish"
  constructor( private http: HttpClient ) { }

  getAllContentsByCategory(categoryId: number) {
    theContentsServer = "https://app.pieib.com/wp-json/wp/v2/posts"
                        +'?categories='+categoryId
                        /* + '?&_embed' */
                        /* +'?slug='+ localStorage.getItem('preferredLang') */
                        /* +'?status=publish' */
    console.log (theContentsServer)
    return  this.http.get<any>(theContentsServer)
  }

  getOneContentById(contentId: number) {
    theContentsServer = "https://app.pieib.com/wp-json/wp/v2/posts" 
                        + '/' + contentId 
                        + '?&_embed'
                       /*  +'?categories='+ localStorage.getItem('preferredLang')  */ 
                        /* +'?status=publish' */

    console.log (theContentsServer)
    return this.http.get<any>(`${theContentsServer}`)
  }

}