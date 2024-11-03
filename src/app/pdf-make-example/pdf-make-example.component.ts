import { Component } from '@angular/core';
import { documentDefinition } from './layouts/pdf-make-model';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.fonts = pdfFonts.pdfMake;


@Component({
  selector: 'app-pdf-make-example',
  templateUrl: './pdf-make-example.component.html',
  styleUrl: './pdf-make-example.component.css'
})
export class PdfMakeExampleComponent {
  printPdf(){

    let content = documentDefinition.content
    if (content){
      pdfMake.createPdf(documentDefinition).open();
    }
  }
}
