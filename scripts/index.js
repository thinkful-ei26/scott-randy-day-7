/* global shoppingList, store, Item */
/*eslint-env jquery*/
'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));
