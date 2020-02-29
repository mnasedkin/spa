import { Injectable } from '@angular/core';
import { Link } from "./shared/components/links/links";

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  public links:Link[] = [];
  public showHeader:boolean = true;
  constructor() { }
  //Set links to service to inject in any component later
  setLinks(links:Link[]) {
    this.links = links;
  }
  //Enable/disable header line
  setHeader(showHeader:boolean) {
    this.showHeader = showHeader;
  }

}
