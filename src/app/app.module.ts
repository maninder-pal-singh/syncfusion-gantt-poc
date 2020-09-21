import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { EditService , FilterService, SortService, SelectionService, ToolbarService,DayMarkersService, ContextMenuService } from '@syncfusion/ej2-angular-gantt';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GanttModule
  ],
  providers: [EditService , FilterService, SortService, SelectionService,ToolbarService,DayMarkersService, ContextMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
