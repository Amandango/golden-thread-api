'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, done) {
  db.createTable('projects', {
    id: {
      type: 'int',
      primaryKey: 'true',
      autoIncrement: 'true'
    },

    charityId: {
      type: 'int',
      notNull: true,
      foreignKey: {
        name: 'charityIdProjectsFk',
        table: 'charities',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: 'id'
      }
    },

    name: {
      type: 'string',
      length: 200,
      notNull: true,
    },

    desc: {
      type: 'string',
    },

    img: {
      type: 'string',
    },

  }, done);
};

exports.down = function(db, done) {
  db.dropTable('projects', done)
};

exports._meta = {
  "version": 1
};
