/* global shoppingList, store, Item */
/*eslint-env jquery*/
'use strict';

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/scott-randys';

  function getItems(callback) {
    callback('api module works!');
  }

  // $.getJSON('https://thinkful-list-api.herokuapp.com/scott-randys/items' , (callback) => {
  //   console.log(callback);
  // });

  function createItem(name, callback) {
    const newItem = JSON.stringify({
      name,
    });
    
 
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: (callback) => {
        console.log(callback);
        shoppingList.render();
      }
    });
  }

  return {
    getItems,
    createItem,
  };

}() );
