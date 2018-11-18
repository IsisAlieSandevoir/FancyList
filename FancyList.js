/**
 * @author Isis Alié-Sandevoir
 * @company Odicci London
 * @date 14-11-2018
 *
 */

var fancyList =  {

    method1 : function constructor() {
        this.fancyList = new Int8Array();
        console.log("constructeur sans argument");
    },
    method2 : function constructor(item) {
        constructor();
        this.fancyList.push(item);
        console.log("constructeur 1 argument");
    },
    method3 : function constructor(item1, item2){
        constructor();
        this.fancyList.push(item1);
        this.fancyList.push(item2);
        console.log("constructeur 2 argument");
    },
    method4 : function constructor([item1, item2]){
        constructor();
        this.fancyList.concat([item1, item2]);
        console.log("constructeur à partir d'un tableau");
    },

    method5 : function getItemAt(index) {
        console.log("passage methode getItemAt");
        console.log(this.fancyList[this.fancyList.length - 1]);
    },

    method6 : function getItemAt(index, numberOfItems) {
        console.log("passage methode getItemAt 2 args");
        this.fancyList.forEach(function(item, index, numberOfItems) {
            console.log(item, index);
        });
    },

    method7 : function addItem(item) {
        console.log("passage methode addItem");
        console.log(this.fancyList);
        this.fancyList.push(item);
        console.log(this.fancyList);
    },

    method8 : function addItems(...items) {
        console.log("passage methode addItems");
        items.forEach(function(item, items){
            addItem(index,item);
        })
    },

    method9 : function addItems([...items]) {
        console.log("passage methode addItems Tab en args");
    },

    /**
     * Ici, on décalle dans un premier temps vers la droite du tableau
     * les nombres en partant de la fin puis on ajoute l'élément
     * dans la case libérée
     */
    method10 : function insertItemAt(index, itemToInsert) {
        console.log("passage methode insertItemAt");
        this.fancyList.forEach(function(item, fancyList, index) {
            this.fancyList[fancyList+1] =  this.fancyList[fancyList];
        })
        this.fancyList[index] = itemToInsert;
    },

    method11 : function insertItemsAt(index, ...items) {
        console.log("passage methode insertItemAt 2args");
        items.forEach(function(item, items){
            insertItemAt(index,item);
        })
    },

    method12 : function insertItemsAt(index, [...items]) {
        console.log("passage methode insertItemAt tab");
    },

    method13 : function removeItemAt(index) {
        console.log("passage methode removeItemAt");
        var removedItem = this.fancyList.splice(index, 1);
        console.log(this.fancyList);
    },

    method14 : function removeItemsAt(index, numberOfItems) {
        console.log("passage methode removeItemAt 2args");
        var removedItem = this.fancyList.splice(index, numberOfItems);
        console.log(this.fancyList);
    },

    //if there are dupliactes should remove 1st item found
    method15 : function removeItem(itemToRemove) {
        console.log("passage methode removeItem");
        if(this.fancyList.includes(itemToRemove)) {
            this.fancyList.forEach(function(item, fancyList) {
                if(item == itemToRemove) {
                    removeItemAt(fancyList.indexOf(item));
                    console.log("itemToRemove is removed");
                }
            })
        } else {
            console.log("itemToRemove doesn't exist");
        }
    },

    method16 : function removeItems(...items) {
        console.log("passage methode removeItems rest parameter");
        items.forEach(function(item, items){
            removeItem(item);
        })
    },

    method17 : function removeItems([...items]) {
        console.log("passage methode removeItems tab");
    },

}

