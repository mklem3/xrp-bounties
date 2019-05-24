import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bounty-list',
  templateUrl: './bounty-list.component.html',
  styleUrls: ['./bounty-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BountyListComponent implements OnInit {

  bounties: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.bounties = db.collection('bounties').valueChanges();
  }

  ngOnInit() {
  }

}
