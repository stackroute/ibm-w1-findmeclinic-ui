import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {  MatChipsModule,MatSelectModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';
import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
 imports: [
     MatDialogModule,
     MatButtonModule,
     MatFormFieldModule,
     MatInputModule,
     MatTabsModule,
     MatButtonModule,
     MatMenuModule,
     MatToolbarModule,
     MatDialogModule,
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  MatChipsModule,
  MatButtonModule,
  MatTabsModule,
  MatSelectModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatTableModule,
  MatBadgeModule,
  MatExpansionModule

      ],
 exports: [
     MatDialogModule,
     MatButtonModule,
     MatFormFieldModule,
     MatInputModule,
     MatTabsModule,
     MatButtonModule,
     MatMenuModule,
     MatDialogModule,
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  MatChipsModule,
  MatButtonModule,
  MatTabsModule,
  MatSelectModule,
     MatToolbarModule,
     MatIconModule,
     MatListModule,
     MatSidenavModule,
     MatTableModule,
     MatBadgeModule,
     MatExpansionModule

 ]
})
export class MaterialModule
{

}
