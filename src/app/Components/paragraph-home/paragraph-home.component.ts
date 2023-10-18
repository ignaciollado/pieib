import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetContentsService } from 'src/app/Services/get-contents.service';

@Component({
  selector: 'app-paragraph-home',
  templateUrl: './paragraph-home.component.html',
  styleUrls: ['./paragraph-home.component.scss']
})
export class ParagraphHomeComponent {
  isNew: boolean = false
  paragraphHontentItems: any[] = []

constructor(  private contentService: GetContentsService, 
    private route: ActivatedRoute,
    private router: Router ) { }

ngOnInit(): void {
      this.getHomeContents(  )
    }
    
getHomeContents() {
    /**
   *  category: pieib 
   *  ID: 2
   * */
    this.contentService.getAllContentsByCategory(2)
          .subscribe( (homeContent: any) => {
            this.paragraphHontentItems = homeContent
            /* console.log ( this.paragraphHontentItems ) */
          })
    }
}
