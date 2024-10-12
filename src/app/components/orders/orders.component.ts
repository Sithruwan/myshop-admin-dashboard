import { Component } from '@angular/core';
import {
    CustomerStatusManagerComponent
} from "../UI components/customer-status-manager/customer-status-manager.component";
import {MatIcon} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTooltip} from '@angular/material/tooltip';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    CustomerStatusManagerComponent,
    MatIcon,
    ReactiveFormsModule,
    MatTooltip,
    FormsModule,
    RouterLink
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  searchTerm: any;

}
