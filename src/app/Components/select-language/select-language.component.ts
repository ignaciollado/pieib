import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-select-language',
  template: `<div class="btn-group" role="group" name="selectLanguage" aria-label="Please, select your preferred language">
                  <button mat-raised-button #langSelect (click)="switchLanguage('cat')">CAT</button>
                  <button mat-raised-button #langSelect (click)="switchLanguage('cas')">CAS</button>
                  <button mat-raised-button #langSelect (click)="switchLanguage('eng')">ENG</button>
            </div>`,
  styles: [`
    select:hover, option:hover {
      cursor: pointer;
      color: #fff;
      background-color: #a3d4da;
    }
    `
  ]
})
export class SelectLanguageComponent implements OnInit {

  constructor(public translate: TranslateService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  switchLanguage( lang:string ) {
    this.translate.use(lang)
    localStorage.setItem('preferredLang', lang)
    location.reload()
  }

}