import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetFixedContentsService } from 'src/app/Services/get-fixed-contents.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
isNew: boolean = false
homeContentItems: any[] = []

constructor(  private contentService: GetFixedContentsService, 
              private route: ActivatedRoute,
              private router: Router ) { }

ngOnInit(): void {
  this.getHomeContents(  )
}


getHomeContents() {

  this.contentService.getAllHomeContents()
      .subscribe( (homeContent: any) => {
        this.homeContentItems = homeContent
        console.log ( homeContent )
      })
}

}
