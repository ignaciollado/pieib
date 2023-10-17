import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetContentsService } from 'src/app/Services/get-contents.service';

@Component({
  selector: 'app-slider-red-servicios-home',
  templateUrl: './slider-red-servicios-home.component.html',
  styleUrls: ['./slider-red-servicios-home.component.scss']
})

export class SliderRedServiciosHomeComponent {

  isNew: boolean = false
  contentRedServiciosEmpresariales: any = ""

constructor(  private contentService: GetContentsService,
    private route: ActivatedRoute,
    private router: Router ) { }

ngOnInit(): void {
      this.getHomeContents(  )
    }

getHomeContents() {
    /**
   *  el post: Red de servicios empresariales
   *  ID: 42
   * */
    this.contentService.getOneContentById(42)
          .subscribe( (redServiciosEmpres: any) => {
            this.contentRedServiciosEmpresariales = redServiciosEmpres
            console.log ( this.contentRedServiciosEmpresariales )
          })
    }

}
