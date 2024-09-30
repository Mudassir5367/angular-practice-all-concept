import { AfterViewInit, Component, ElementRef, HostBinding, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrl: './print.component.scss'
})
export class PrintComponent implements OnInit,AfterViewInit {
  public domElement:any;
  public img1 = "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/"
    public imageUrl = "2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
    @HostBinding('style.--image') image = "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
    @HostBinding('style.--nameOfVar') nameOfVar = 'green';
    // With ElementRef
  @HostBinding('style.--bgImg') image1 = this.img1 + '2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630';

// print(){
//   const popup = window.open("", "_blank", "width=1000,height=680,titlebar=yes");

//   if (popup) {
//       // Get the content to be printed
//       const content = document.getElementsByClassName("abc");
  
//       // Add content from the original document to the popup window
//       popup.document.head.innerHTML = `
//           <style>
//               @media print {
//                   /* Control print content size, margins, and layout */
//                   body {
//                       width: 210mm; /* A4 width */
//                       height: 297mm; /* A4 height */
//                       margin: 0;
//                       padding: 20mm;
//                       box-sizing: border-box;
//                   }
//                   /* Optionally hide other elements that shouldn't appear in print */
//                   .no-print {
//                       display: none;
//                   }
//               }
//           </style>
//           ${document.head.innerHTML} <!-- Include original styles -->
//       `;
  
//       popup.document.body.innerHTML = content[0].innerHTML;
  
//       // Wait for the popup content to load and trigger print
//       popup.onload = function () {
//           // Focus the popup window
//           popup.focus();
  
//           // Trigger the print function
//           popup.print();
  
//           // Close the popup immediately after triggering print
//           popup.close(); // Close the popup window immediately 
//       };
//   }
  
// }
constructor(private elementRef:ElementRef,private renderer: Renderer2){}
ngOnInit() {
   setTimeout(() => {
    this.imageUrl = `${this.img1}2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630`
   });
  this.domElement = this.elementRef.nativeElement;
   let ref = document.getElementById('img')
  //  this.renderer.setStyle(ref,"background-image", `url(${this.image})`);

}
ngAfterViewInit() {
  this.elementRef.nativeElement.style.setProperty('--bgImg',`url(${this.image1})`);
}
print() {
  const contentToPrint = this.elementRef.nativeElement.querySelector('.abc');
  
  if (contentToPrint) {
    const clonedContent = contentToPrint.cloneNode(true) as HTMLElement;
    const printContainer = document.createElement('div');
    printContainer.style.position = 'absolute';
    printContainer.style.top = '0px';
    printContainer.style.left = '0px';
    printContainer.style.width = '100%';
    printContainer.style.height = '100%';
    printContainer.style.zIndex = '1';
    printContainer.innerHTML = clonedContent.innerHTML;
    
    const handleBeforePrint = () => {
      document.body.appendChild(printContainer);
      Array.from(document.body.children).forEach((child) => {
        if (child !== printContainer) {
          (child as HTMLElement).style.display = 'none';
        }
      });
    };

    const handleAfterPrint = () => {
      document.body.removeChild(printContainer);
      Array.from(document.body.children).forEach((child) => {
        if (child !== printContainer) {
          (child as HTMLElement).style.display = '';
        }
      });
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
    };

    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);
    
    // Promise to handle print
    const immediateFn = function (): Promise<void> {
      return new Promise<void>((resolve) => {
        window.print();
        resolve(); // Explicitly resolving with void
      });
    };
    
    immediateFn().then(() => {
      console.log('Print complete');
    });
  }
  // ============
//   const immediateFn = function (): Promise<string> {
//     return new Promise((resolve) => {
//       window.print();
//       resolve('done'); // Resolving with a string
//     });
//   };
  
//   immediateFn().then((result) => {
//     console.log(result); // "done" will be logged here
//   });
// }
  //========
}


// print(){
//   const contentToPrint = this.elementRef.nativeElement.querySelector('.abc');
  
//   if(contentToPrint){
//     const clonedContent = contentToPrint.cloneNode(true) as HTMLElement;
//     const printContainer = document.createElement('div');
    
//     printContainer.style.position = 'absolute';
//     printContainer.style.top = '0px';
//     printContainer.style.left = '0px';
//     printContainer.style.width = '100%';
//     printContainer.style.height = '100%';
//     printContainer.style.zIndex = '1';
//     printContainer.innerHTML = clonedContent.innerHTML;

//     const images = printContainer.querySelectorAll('img');
//     let loadedImagesCount = 0;

//     // Handle before and after print events
//     const handleBeforePrint = () => {
//       document.body.appendChild(printContainer);
//       Array.from(document.body.children).forEach((child) => {
//         if (child !== printContainer) {
//           (child as HTMLElement).style.display = 'none';
//         }
//       });
//     };

//     const handleAfterPrint = () => {
//       document.body.removeChild(printContainer);
//       Array.from(document.body.children).forEach((child) => {
//         if (child !== printContainer) {
//           (child as HTMLElement).style.display = '';
//         }
//       });
//       window.removeEventListener('beforeprint', handleBeforePrint);
//       window.removeEventListener('afterprint', handleAfterPrint);
//     };

//     // Check when all images are loaded
//     if (images.length > 0) {
//       images.forEach((img) => {
//         img.onload = () => {
//           loadedImagesCount++;
//           if (loadedImagesCount === images.length) {
//             window.print(); // Print when all images are loaded
//           }
//         };
//         img.onerror = () => {
//           loadedImagesCount++;
//           if (loadedImagesCount === images.length) {
//             window.print(); // Print even if there are errors in loading some images
//           }
//         };
//       });
//     } else {
//       // If there are no images, proceed to print
//       window.print();
//     }

//     window.addEventListener('beforeprint', handleBeforePrint);
//     window.addEventListener('afterprint', handleAfterPrint);
//   }
// }

}
