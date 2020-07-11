import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreateToDoComponent } from './components/create-to-do/create-to-do.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { DoneListComponent } from './components/done-list/done-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateToDoComponent,
    ToDoListComponent,
    DoneListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
