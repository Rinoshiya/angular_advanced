import { Component } from '@angular/core';

@Component({
  selector: 'app-traffic-status',
  // standalone: true,
  // imports: [],
  templateUrl: './traffic-status.component.html',
  styleUrl: './traffic-status.component.scss'
})
export class TrafficStatusComponent {
  dummyTrafficData = [
    {
      id: 'd1',
      value: 433
    },
    {
      id: 'd2',
      value: 430
    },
    {
      id: 'd3',
      value: 439
    },
    {
      id: 'd4',
      value: 435
    },
    {
      id: 'd5',
      value: 431
    },
    {
      id: 'd6',
      value: 438
    }
  ]
  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value))
}
