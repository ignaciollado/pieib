import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetContentsService } from 'src/app/Services/get-contents.service';



@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})

export class CardsListComponent {
  isNew: boolean = false
  homeContentItems: any[] = []

constructor(  private contentService: GetContentsService, 
    private route: ActivatedRoute,
    private router: Router ) { }

ngOnInit(): void {
      this.getStaticHomeContents(  )
    }
    
getStaticHomeContents() {
    this.contentService.getAllContentsByCategory(99999)
          .subscribe( (homeContent: any) => {
            this.homeContentItems = homeContent
            console.log ( homeContent )
          })
    }
}
