import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../user/user';
import { CommunityServiceService } from '../community-service.service';
import { Community} from '../community';
import { Observer } from 'rxjs';

  
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-communityadd',
  templateUrl: './communityadd.component.html',
  styleUrls: ['./communityadd.component.scss']
})
export class CommunityaddComponent implements OnInit {

  constructor(private route: ActivatedRoute,private CommunityService: CommunityServiceService, private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {}
  submitted = false;
  community : Community = new Community();
  idCommunity : any;
  selectedFile: File;
  message: string;
  id: number;
  
  goToCommunityList(){
    this.router.navigate(['/communities']);
  }

  savedata() {
    console.log("tessssst")
    console.log(this.community);
    this.CommunityService
      .createCommunity(this.community).subscribe({
        next :data => {
        console.log(data);
        this.idCommunity = data;
        this.community = new Community();
        this.goToUploadImage(this.idCommunity);
      },
        error : error => console.log(error)});
  }
      newCommunity(): void {
        this.submitted = false;
        this.community = new Community();
      }
      OnSubmit() { this.submitted = true; 
        this.savedata();}

        goToUploadImage(id: number){
          console.log("id::" + id)
          this.router.navigate(['/CreateImage', { idC: id }]);
        }
      
    
}
    
  



