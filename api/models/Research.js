/**
 * Thing.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

      Distrito: {
        type: 'string',
        description: 'A (very) brief description of the item.',
        example: 'Waffle Iron'
      },
      Concelho: {
        type: 'string',
        description: 'A (very) brief description of the item.',
        example: 'Waffle Iron'
      },
      Freguesia: {
        type: 'string',
        description: 'A (very) brief description of the item.',
        example: 'Waffle Iron'
      },
      Ano: {
        type: 'string',
        description: 'A (very) brief description of the item.',
        example: 'Waffle Iron'
      },
      owner: { model: 'User', description: 'The user who uploaded this item.' },
  
      borrowedBy: { model: 'User', description: 'The user who has requested to borrow this item.' },
  
    },
  
  };
  
  