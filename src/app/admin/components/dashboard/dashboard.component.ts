import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  users: any;

  constructor(private dataService: DataService, private router: Router){}

  ngOnInit() {
    this.getUsers();
  }

  getDataFromChild(data: string){
    console.log("Received: ",data)
  }

  getUsers(){
    this.dataService.getUsers().subscribe((data) => {
        this.users = data
        console.log("Users : ",this.users)
      }
    )
  }

  showProduct(){
    this.router.navigateByUrl('/admin/products')
  }
}
