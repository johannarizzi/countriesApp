import { Component} from '@angular/core';

@Component({
  selector: 'app-for-region',
  templateUrl: './for-region.component.html',
  styleUrls: ['./for-region.component.css']
})
export class ForRegionComponent {

  regions: string[] = ['africa', 'americas', 'asia', 'europa', 'oceania'];
  regionActive: string = '';

  constructor() { }

  getClassCSS(region: string): string {
    return (region === this.regionActive) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activeRegion (region: string){
    this.regionActive = region;
  }

}
