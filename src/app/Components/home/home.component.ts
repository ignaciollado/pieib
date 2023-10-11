import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetContentsService } from 'src/app/Services/get-contents.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
isNew: boolean = false
homeContentItems: any[] = []

constructor(  private contentService: GetContentsService, 
              private route: ActivatedRoute,
              private router: Router ) { }

ngOnInit(): void {
  this.getHomeContents(  )
}


getHomeContents() {

  this.contentService.getAllContents()
      .subscribe( (homeContent: any) => {
        this.homeContentItems = homeContent
        console.log ( homeContent )
      })
}

}
