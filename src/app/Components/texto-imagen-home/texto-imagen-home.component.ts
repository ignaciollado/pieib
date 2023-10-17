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
  contentTextImageItem: any = ""

constructor(  private contentService: GetContentsService,
    private route: ActivatedRoute,
    private router: Router ) { }

ngOnInit(): void {
      this.getHomeContents(  )
    }

getHomeContents() {
    /**
   *  el post: promovemos la colaboración
   *  ID: 22
   * */
    this.contentService.getOneContentById(22)
          .subscribe( (textImageContent: any) => {
            this.contentTextImageItem = textImageContent
          })
    }
}
