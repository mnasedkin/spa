import { Component, OnInit } from '@angular/core';
import {UpdatesServiceService} from "../../updates-service.service";

@Component({
  selector: 'app-dashboard-updates',
  templateUrl: './dashboard-updates.component.html',
  styleUrls: ['../dashboard.component.css']
})
export class DashboardUpdatesComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[] = ['productPhrase', 'productName', 'version', 'link'];

  constructor(public updatesService: UpdatesServiceService) {
    this.dataSource = updatesService.updates;
  }

  ngOnInit(): void {
  }

}
