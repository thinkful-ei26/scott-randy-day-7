/* global shoppingList, store, Item, api*/
/*eslint-env jquery*/
'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems((items) => {
    console.log(items);
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
});
