export let employeeData;

employeeData = [
  {
    "id": "123",
    "title": "CEO",
    "name": "John",
    "surname": "Doe",
    "dateOfBirth": "2023-05-04 10:06",
    "email": "john@doe.com",
    "phoneNumber": "0123456789",
    "employeeType": {
      "id": "456",
      "name": "Permanent",
      "description": "For permanent employees"
    }
  },
  {
    "id": "123",
    "title": "MD",
    "name": "John",
    "surname": "Doe",
    "dateOfBirth": "2023-05-04 10:06",
    "email": "john@doe.com",
    "phoneNumber": "0123456789",
    "employeeType": {
      "id": "456",
      "name": "Contract",
      "description": "For contract employees"
    }
  },
  {
    "id": "123",
    "title": "CFO",
    "name": "John",
    "surname": "Doe",
    "dateOfBirth": "2023-05-04 10:06",
    "email": "john@doe.com",
    "phoneNumber": "0123456789",
    "employeeType": {
      "id": "456",
      "name": "Fixed contract",
      "description": "For fixed contract employees"
    }
  }
];

export let employeeTypeData;

employeeTypeData = [
  {
    "id": "456",
    "name": "Permanent",
    "description": "For permanent employees"
  },
  {
    "id": "456",
    "name": "Contract",
    "description": "For contract employees"
  },
  {
    "id": "456",
    "name": "Fixed contract",
    "description": "For fixed contract employees"
  }
]

export let panelItems;

panelItems = [
  {label: 'Schedule', imageSrc: 'assets/icons/timetable.png', routerLink: 'schedule'},
  {label: 'Employee', imageSrc: 'assets/icons/division.png', routerLink: 'employees'},
  {label: 'Customer', imageSrc: 'assets/icons/rating.png', routerLink: 'customers'},
  {label: 'Deposit Percentage', imageSrc: 'assets/icons/deposit-box.png', routerLink: 'deposit'},
  {label: 'Price', imageSrc: 'assets/icons/tag.png', routerLink: 'price'},
  {label: 'Feedback', imageSrc: 'assets/icons/feedback.png', routerLink: 'feedback'},
  {label: 'VAT', imageSrc: 'assets/icons/vat.png', routerLink: 'vat'},
  {label: 'Maintenance', imageSrc: 'assets/icons/maintenance.png', routerLink: 'maintenance'},
  {label: 'Inventory', imageSrc: 'assets/icons/inventory.png', routerLink: 'inventory'},
  {label: 'Reports', imageSrc: 'assets/icons/report.png', routerLink: 'reports'},
  {label: 'Service Item', imageSrc: 'assets/icons/housekeeping.png', routerLink: 'service'},
  {label: 'Service Category', imageSrc: 'assets/icons/cleaning.png', routerLink: 'service/category'}
]
