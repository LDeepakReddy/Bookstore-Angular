import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/Services/dataService/dataservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private data: DataserviceService,private router: Router,) { }

  ngOnInit(): void {
  }

  search($event:any){
    console.log($event.target.value)
    this.data.outgoingData($event.target.value)
  }
  signOut() {
    localStorage.removeItem("token");
    this.router.navigateByUrl('/login');
  }
}
