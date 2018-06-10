/**
 * Thing.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

      Nome: {
        type: 'string',
        description: 'A (very) brief description of the item.',
        example: 'Waffle Iron'
      },
      DataInicial: {
        type: 'string',
        description: 'A (very) brief description of the item.',
        example: 'Waffle Iron'
      },
      DataFinal: {
        type: 'string',
        description: 'A (very) brief description of the item.',
        example: 'Waffle Iron'
      },
      Freguesia: { model: 'Freguesia', description: 'Freguesia do Livro.' }
     
    },
  
  };
  
  