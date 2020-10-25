class Grocery {
    name: string;
    quantity: number;
  
    constructor(name: string, quantity: number) {
      this.name = name;
      this.quantity = quantity;
    }
  }

function GroceryList(grocery: Grocery) {
    return grocery.name + " " + grocery.quantity
  }

let List = new Grocery ("Milk" , 3); 

  document.body.textContent = GroceryList(List);