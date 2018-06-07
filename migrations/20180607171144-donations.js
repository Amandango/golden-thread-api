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
  db.createTable('donations', {
    id: {
      type: 'int',
      primaryKey: 'true',
      autoIncrement: 'true'
    },

    charityId: {
      type: 'int',
      notNull: true,
      foreignKey: {
        name: 'charityIdDonationsFk',
        table: 'charities',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: 'id'
      }
    },

    userId: {
      type: 'int',
      notNull: true,
      foreignKey: {
        name: 'userIdDonationsFk',
        table: 'user',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: 'id'
      }
    },

    amount: {
      type: 'int',
      notNull: true,
    },

    date: {
      type: 'string',
      notNull: true,
    },

  }, done);
};

exports.down = function(db, done) {
  db.dropTable('donations', done)
};

exports._meta = {
  "version": 1
};
