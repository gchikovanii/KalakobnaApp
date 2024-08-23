import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  shortText: string = 'Through collaboration, diverse perspectives and strengths are leveraged to create inclusive environments where everyone has the opportunity to thrive. This approach not only fosters personal growth and achievement but also strengthens the fabric of society...';
  fullText: string = this.shortText + ' Through collaboration, diverse perspectives and strengths are leveraged to create inclusive environments where everyone has the opportunity to thrive. This approach not only fosters personal growth and achievement but also strengthens the fabric of society.';
  
  isTextExpanded: boolean = false;

  toggleText() {
    this.isTextExpanded = !this.isTextExpanded;
  }
}
