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
  db.createTable('interestUserMap', {
    id: {
      type: 'int',
      primaryKey: 'true',
      autoIncrement: 'true'
    },

    userId: {
      type: 'int',
      notNull: true,
      foreignKey: {
        name: 'userIdInterestsFk',
        table: 'user',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: 'id'
      }
    },

    interestId: {
      type: 'int',
      notNull: true,
      foreignKey: {
        name: 'interestIdInterestsFk',
        table: 'interests',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: 'id'
      }
    },
  }, done);
};

exports.down = function(db, done) {
  db.dropTable('interestUserMap', done) 
};

exports._meta = {
  "version": 1
};
