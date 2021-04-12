# Namespace 
## A container for variables and functions

Typically to keep variables and functions with the same name seperated



let MYAPPLICATION = {
    calculateTax: function (item) {
        return item * 1.40;
    },
    product: function (cost) {
        this.cost = cost;
        this.getCost = function(){
                          return this.cost;
                       };
    },
    doTaxCalculations: function () {
        var p = new MYAPPLICATION.product(100);
        alert(this.calculateTax(p.getCost()));
    }
}

To access properties, variables and methods above we need to
fetch it through the MYAPPLICATION. 

