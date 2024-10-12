import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatIcon} from '@angular/material/icon';
import {CustomerStatusManagerComponent} from '../customer-status-manager/customer-status-manager.component';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [
    FormsModule,
    MatIcon,
    CustomerStatusManagerComponent
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {
  searchTerm: string = '';

  // Sample customers data
  customers = [
    {
      propertyId: 'PR-001',
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      address: '123 Main St, Cityville',
      isActive: true
    },
    {
      propertyId: 'PR-002',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '098-765-4321',
      address: '456 Maple Ave, Townsville',
      isActive: false
    }
    // More customer data...
  ];

  // Filter customers based on the search input
  filteredCustomers() {
    return this.customers.filter(customer =>
      customer.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Method to delete a customer
  deleteCustomer(customer: any) {
    if (confirm(`Are you sure you want to delete ${customer.name}?`)) {
      this.customers = this.customers.filter(c => c !== customer);
    }
  }
}
