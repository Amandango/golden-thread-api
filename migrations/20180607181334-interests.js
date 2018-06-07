'use strict';

var dbm;
var type;
var seed;

exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, done) {
  db.createTable('interests', {
    id: {
      type: 'int',
      primaryKey: 'true',
      autoIncrement: 'true'
    },

    animalRights: {
      type: 'boolean',
    },

    environment: {
      type: 'boolean',
    },

    humanRights: {
      type: 'boolean',
    },

    health: {
      type: 'boolean',
    },

    poverty: {
      type: 'boolean',
    },

    foodWaterScarcity: {
      type: 'boolean',
    },

  }, done);
};

exports.down = function(db, done) {
  db.dropTable('interests', done)
};

exports._meta = {
  "version": 1
};
