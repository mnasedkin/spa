import { Component, OnInit } from '@angular/core';
import { Link } from "./links";
import {LinksService} from "../../../links.service";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['../main-layout/main-layout.component.css']
})
export class LinksComponent implements OnInit {
  public links:Link[] = [];
  public faQuestionCircle = faQuestionCircle;
  public showHeader:boolean = true;//show header line
  constructor(private linksService: LinksService) {}

  ngOnInit(): void {
    this.setData();
  }
  setData() {
    this.links = this.linksService.links;
    this.showHeader = this.linksService.showHeader;
  }

}
