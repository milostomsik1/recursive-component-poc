import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RecursiveComponent } from './recursive/recursive.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    RecursiveComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '**',
        component: AppComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
