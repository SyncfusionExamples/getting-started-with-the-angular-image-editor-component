import { Component, ViewChild } from '@angular/core';
import { ImageEditorComponent } from '@syncfusion/ej2-angular-image-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'editor-example';
  @ViewChild('imageEditor')
  public editorObject ! : ImageEditorComponent

  public openImage() : void {
    this.editorObject.open('https://ej2.syncfusion.com/demos/src/image-editor/images/bridge.png');
  }

  public saveImage() : void {
    this.editorObject.export("PNG", "Syncfusion");
  }
}
