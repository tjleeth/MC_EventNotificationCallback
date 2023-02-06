module.exports = (sequelize, type) => {
    return sequelize.define('TransactionalSendEvents_EmailSent', {
        compositeId: {
          type: type.STRING,
          primaryKey: true,
        },
        eventCategoryType: type.STRING,
        timestampUTC: type.DATE,
        definitionId: type.STRING,
        definitionKey: type.STRING,
        mid: type.INTEGER,
        eid: type.INTEGER,
        to: type.STRING,
        subscriberKey: type.STRING,
        messageKey: type.STRING,
        status: type.STRING,
    },
  {
    freezeTableName: true,
    tableName: 'TransactionalSendEvents_EmailSent'
  })
}
