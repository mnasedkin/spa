import { Component, OnInit } from '@angular/core';
import {LinksService} from "../links.service";
import {Link} from "../shared/components/links/links";
import {faHeadphones, faSearch} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['../shared/components/main-layout/main-layout.component.css']
})
export class HelpComponent implements OnInit {
  private links:Link[] = [
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
  private showHeader: boolean = false;//do not show header line
  constructor(private linksService: LinksService) {}

  ngOnInit(): void {
    //set help links
    this.linksService.setLinks(this.links);
    //set help header line
    this.linksService.setHeader(this.showHeader);
  }

}
