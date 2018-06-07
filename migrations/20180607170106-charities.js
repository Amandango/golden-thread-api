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
  db.createTable('charities', {
    id: {
      type: 'int',
      primaryKey: 'true',
      autoIncrement: 'true'
    },

    name: {
      type: 'string',
      length: 200,
      notNull: true
    },

    desc: {
      type: 'string',
    },

    logo: {
      type: 'string',
    },

  }, done);
};

exports.down = function(db, done) {
  db.dropTable('charities', done)
};

exports._meta = {
  "version": 1
};
