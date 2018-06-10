/**
 * Thing.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

      name: {
        type: 'string',
        description: 'A (very) brief description of the item.',
        example: 'Waffle Iron'
      },
      concelho: { model: 'Concelho', description: 'Concelho.' },
  
    },
  
};