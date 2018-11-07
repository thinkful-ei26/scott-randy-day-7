/* global shoppingList, store, Item */
/*eslint-env jquery*/
'use strict';

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/scott-randys';

  function getItems(callback) {
    $.getJSON('https://thinkful-list-api.herokuapp.com/scott-randys/items', callback);
  }


  function createItem(name, callback) {
    const newItem = JSON.stringify({
      name,
    });


    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: function(data) {
        console.log(data);
        callback(data);
      }
    });
  }

  function updateItem(id, updateData, callback) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: function(data) {
        console.log(data);
        callback(data);
      }
    });
  }

  return {
    getItems,
    createItem,
    updateItem,
  };

}() );
