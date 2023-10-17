import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetContentsService } from 'src/app/Services/get-contents.service';

@Component({
  selector: 'app-texto-imagen-home',
  templateUrl: './texto-imagen-home.component.html',
  styleUrls: ['./texto-imagen-home.component.scss']
})
export class TextoImagenHomeComponent {
  isNew: boolean = false
  contentTextImageItems: any[] = []

constructor(  private contentService: GetContentsService, 
    private route: ActivatedRoute,
    private router: Router ) { }

ngOnInit(): void {
      this.getHomeContents(  )
    }
    
getHomeContents() {
    /**
   *  category: promovemos la colaboración 
   *  ID: 12
   * */
    this.contentService.getAllHomeContents(12)
          .subscribe( (homeContent: any) => {
            this.contentTextImageItems = homeContent
            console.log ( homeContent )
          })
    }
}
