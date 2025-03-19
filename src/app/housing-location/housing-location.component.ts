import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { RouterModule, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterLink, RouterModule, RouterOutlet],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
