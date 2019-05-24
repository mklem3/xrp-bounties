import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';

import { BountyListComponent } from './bounty-list.component';


@NgModule({
  declarations: [
    BountyListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    BountyListComponent
  ]
})
export class BountyListModule { }
