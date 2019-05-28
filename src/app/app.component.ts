import { Component } from '@angular/core';
import { RippledService } from 'src/services/rippled.service';
import { Transaction } from 'src/data/rippled/transactions/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'xrp-bounties';

  constructor(private rippledService: RippledService) { 
    this.rippledService.getLedger('').subscribe((resp) => {
      console.log(resp);
    });
  }

}
