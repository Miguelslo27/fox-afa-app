import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { ProgramPreviewComponent } from './commons/program-preview/program-preview.component';
import { LiveComponent } from './live/live.component';
import { ProgrammingComponent } from './programming/programming.component';
import { PlayerComponent } from './player/player.component';
import { BtnGetPlayerComponent } from './commons/commands/btn-get-player/btn-get-player.component';
import { ProgramDetailsComponent } from './commons/program-preview/program-details/program-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgramPreviewComponent,
    LiveComponent,
    ProgrammingComponent,
    PlayerComponent,
    BtnGetPlayerComponent,
    ProgramDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
