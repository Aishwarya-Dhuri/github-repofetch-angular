import { Component, OnInit , ChangeDetectorRef} from '@angular/core';
import {GithubService} from "../../services/github.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = null;
  userName : string;
  Error = null;
  constructor(private githubservice:GithubService, private ref:ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  handleFind(){
    this.githubservice.getUserDetails(this.userName).subscribe(
      (user) => {
        this.user = user;
        this.Error = null;
        this.ref.detectChanges();
      },
      (err) =>{
        this.user = null;
        this.Error = "User not found";
        this.ref.detectChanges();
      }
    
    )
  }

}
