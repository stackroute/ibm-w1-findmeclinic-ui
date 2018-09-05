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
  MatCardModule
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
     MatToolbarModule
 ]
})
export class MaterialModule
{

}
