import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImageEditorModule } from '@syncfusion/ej2-angular-image-editor';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImageEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
