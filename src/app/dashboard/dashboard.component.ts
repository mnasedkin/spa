import { Component, OnInit } from '@angular/core';
import {LinksService} from "../links.service";
import {Link} from "../shared/components/links/links";
import { faKey, faSearch, faHeadphones } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './dashboard.component.css',
    '../shared/components/main-layout/main-layout.component.css'
  ]
})
export class DashboardComponent implements OnInit {

  links:Link[] = [
    {
      name: 'How to activate and use the products',
      url: '/help',
      icon: faKey,
    },
    {
      name: 'Browse through our Product Support center',
      url: '/help',
      icon: faSearch,
    },
    {
      name: 'Contact our Support team now',
      url: '/help',
      icon: faHeadphones,
    },
  ];
  private showLinksHeader: boolean = true;//show links header line
  constructor(private linksService: LinksService) {}

  ngOnInit(): void {
    //set dashboard links
    this.linksService.setLinks(this.links);
    //set dashboard links header line
    this.linksService.setHeader(this.showLinksHeader);
  }

}
