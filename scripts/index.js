/* global shoppingList, store, Item, api*/
/*eslint-env jquery*/
'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems(items => {
    // console.log(items);
    items.forEach(item => store.addItem(item));
    const item = store.items[0];
    console.log('current name: ' + item.name);
    store.findAndUpdate(item.id, { name: 'horses' });
    console.log('new name: ' + item.name);
    shoppingList.render();
  });
});
