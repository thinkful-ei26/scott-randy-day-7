/* global shoppingList, store, Item, api*/
/*eslint-env jquery*/
'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems((items) => {
    // console.log(items);
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
});

api.getItems((items) => {
  const item = items[0];

  api.updateItem(item.id, { name: 'foobar', checked: true}, () => {
    console.log('updated!');
    api.getItems((items) => {
      console.log(items);
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });
  });
});