import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRippleModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatTableModule} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const material=[ 
  MatSliderModule,
  MatButtonModule,
  MatCardModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatExpansionModule,
  MatGridListModule,
  MatRippleModule,
  MatInputModule,
  DragDropModule,
  ScrollingModule,
  MatTableModule,
  MatSnackBarModule

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ],
  exports : [material]
})
export class MaterialModule { }
