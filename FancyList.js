/**
 * @author Isis Alié-Sandevoir
 * @company Odicci London
 * @date 14-11-2018
 *
 * This document contains the class/ the object fancyList and his functions and parameters
 */

class fancyList  {

    constructor() {
        this.fancyList = [1, 2, 3];
        //TODO: problem: find a way to create the list by the user
        //this.fancyList = new Int8Array();
        console.log("constructeur sans argument");
    }

    //TODO: find a way to have 4 different constructor with the same name
    constructor2(item) {
        constructor();
        this.fancyList.push(item);
        console.log("constructeur 1 argument");
    }
    constructor3(...items) {
        constructor();
        this.fancyList.push(...items);
        console.log("constructeur plusieurs arguments");
    }
    constructor4([...items]) {
        constructor();
        this.fancyList.concat([...items]);
        console.log("constructeur à partir d'un tableau");
    }

    getItemAt(index) {
        console.log("passage methode getItemAt");
        console.log(this.fancyList[this.fancyList.length - 1]);
    }

    getItemAt(index, numberOfItems) {
        console.log("passage methode getItemAt 2 args");
        this.fancyList.forEach(function(item, index, numberOfItems) {
            console.log(item, index);
        });
    }

    addItem(item) {
        console.log("passage methode addItem");
        console.log(this.fancyList);
        this.fancyList.push(item);
        console.log(this.fancyList);
    }

    addItems(...items) {
        console.log("passage methode addItems");
        items.forEach(function(item, items){
            addItem(index,item);
        })
    }

    addItems([...items]) {
        console.log("passage methode addItems Tab en args");
    }

    /**
     * Ici, on décale dans un premier temps vers la droite du tableau
     * les nombres en partant de la fin puis on ajoute l'élément
     * dans la case libérée
     */
    insertItemAt(index, itemToInsert) {
        console.log("passage methode insertItemAt");
        this.fancyList.forEach(function(item, fancyList, index) {
            this.fancyList[fancyList+1] =  this.fancyList[fancyList];
        })
        this.fancyList[index] = itemToInsert;
        console.log(this.fancyList);
    }

    insertItemsAt(index, ...items) {
        console.log("passage methode insertItemAt 2args");
        items.forEach(function(item, items){
            insertItemAt(index,item);
        })
    }

    insertItemsAt(index, [...items]) {
        console.log("passage methode insertItemAt tab");
    }

    removeItemAt(index) {
        console.log("passage methode removeItemAt");
        var removedItem = this.fancyList.splice(index, 1);
        console.log(this.fancyList);
    }

    removeItemsAt(index, numberOfItems) {
        console.log("passage methode removeItemAt 2args");
        var removedItem = this.fancyList.splice(index, numberOfItems);
        console.log(this.fancyList);
    }

    //if there are dupliactes should remove 1st item found
    removeItem(itemToRemove) {
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
    }

    removeItems(...items) {
        console.log("passage methode removeItems rest parameter");
        items.forEach(function(item, items){
            removeItem(item);
        })
    }

    removeItems([...items]) {
        console.log("passage methode removeItems tab");
    }

}

