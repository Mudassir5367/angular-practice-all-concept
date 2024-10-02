export class ResultComponent {
    business: string = '';
  
    constructor(private searchService: SearchService) {
      // Automatically update `business` whenever the signal value changes
      effect(() => {
        const value = this.searchService.getTypeSignal()();  // Dereferencing the signal value
        this.business = value.route;
      });
    }
  }

  navigateToSearchPage() {
    let type: string;
    this.selectedSearch === 'Vendors' ? type = 'businesses' : type = 'products';
    
    this.router.navigateByUrl(`/search?q=${this.searchText}&type=${type}`).then(() => {
      this.searchService.setType({ route: type, searchText: this.searchText });
    });
  }



  export class SearchService {
    // Define a signal to hold the type value
    private typeSignal = signal<{ route: string, searchText: string }>({ route: '', searchText: '' });
  
    // Method to get the current value of the signal
    getTypeSignal() {
      return this.typeSignal;
    }
  
    // Method to update the signal's value
    setType(param: { route: string, searchText: string }) {
      this.typeSignal.set(param);
    }
  }










  //// 

  navigateToSearchPage() {
    let type: string;
    // Define type based on selected search
    this.selectedSearch === 'Vendors' ? type = 'businesses' : type = 'products';
    
    // Navigate and set the new signal value
    this.router.navigateByUrl(`/search?q=${this.searchText}&type=${type}`).then(() => {
      this.searchService.setType({ route: type, searchText: this.searchText });
    });
  }



   // Define a signal to hold the type value
   private typeSignal = signal<{ route: string, searchText: string }>({ route: '', searchText: '' });

   // Method to get the current value of the signal (this will be read in components)
   getTypeSignal() {
     return this.typeSignal;
   }
 
   // Method to update the signal's value (set new values here)
   setType(param: { route: string, searchText: string }) {
     this.typeSignal.set(param);  // This automatically triggers reactivity
   }
 
   // Optional: You can create a derived signal that transforms the data
   derivedSignal = signal(() => {
     const { route, searchText } = this.typeSignal();
     return `${route.toUpperCase()} - ${searchText}`;
   });


   effect(() => {
    const value = this.searchService.getTypeSignal()();  // Get the current signal value
    this.business = value.route;  // Automatically updates when signal changes
  });
}