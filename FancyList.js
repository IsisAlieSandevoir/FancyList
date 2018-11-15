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
        //mot reserve en njs que une fonction plusieurs constructeurs
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
        console.log(this.fancyList[this.fancyList.length - 1]);
    },

    method6 : function getItemAt(index, numberOfItems) {
        this.fancyList.forEach(function(item, index, numberOfItems) {
            console.log(item, index);
        });
    },

    method7 : function addItem(item) {
        console.log(this.fancyList);
        this.fancyList.push(item);
        console.log(this.fancyList);
    },

    method8 : function addItems(item1, item2) {

    },

    method9 : function addItems([item1, item2]) {
            //tab taille balek + foreach
    },

    method10 : function insertItemAt(index, itemToInsert) {
        this.fancyList.forEach(function(item, fancyList, index) {
            this.fancyList[fancyList+1] =  this.fancyList[fancyList];
        })
        this.fancyList[index] = itemToInsert;
    },

    method11 : function insertItemsAt(item1, item2) {

    },

    method12 : function insertItemsAt([item1, item2]) {

    },

    method13 : function removeItemAt(index) {
        var removedItem = this.fancyList.splice(index, 1);
        console.log(this.fancyList);
    },

    method14 : function removeItemsAt(index, numberOfItems) {
        var removedItem = this.fancyList.splice(index, numberOfItems);
        console.log(this.fancyList);
    },

    //if there are dupliactes should remove 1st item found
    method15 : function removeItem(itemToRemove) {
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

    method16 : function removeItems(item1, item2) {

    },

    method17 : function removeItems([item1, item2]) {

    },

}

