import {Component, Input} from '@angular/core';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-customer-status-manager',
  standalone: true,
  imports: [
    MatSlideToggle,
    FormsModule
  ],
  templateUrl: './customer-status-manager.component.html',
  styleUrl: './customer-status-manager.component.scss'
})
export class CustomerStatusManagerComponent {
  @Input() customer :any;


}
