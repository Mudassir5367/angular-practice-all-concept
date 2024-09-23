import { Component } from '@angular/core';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrl: './print.component.scss'
})
export class PrintComponent {
print(){
  const popup = window.open("", "_blank", "width=1000,height=680,titlebar=yes");

  if (popup) {
      // Get the content to be printed
      const content = document.getElementsByClassName("abc");
  
      // Add content from the original document to the popup window
      popup.document.head.innerHTML = `
          <style>
              @media print {
                  /* Control print content size, margins, and layout */
                  body {
                      width: 210mm; /* A4 width */
                      height: 297mm; /* A4 height */
                      margin: 0;
                      padding: 20mm;
                      box-sizing: border-box;
                  }
                  /* Optionally hide other elements that shouldn't appear in print */
                  .no-print {
                      display: none;
                  }
              }
          </style>
          ${document.head.innerHTML} <!-- Include original styles -->
      `;
  
      popup.document.body.innerHTML = content[0].innerHTML;
  
      // Wait for the popup content to load and trigger print
      popup.onload = function () {
          // Focus the popup window
          popup.focus();
  
          // Trigger the print function
          popup.print();
  
          // Close the popup immediately after triggering print
          popup.close(); // Close the popup window immediately
      };
  }
  
}
}
