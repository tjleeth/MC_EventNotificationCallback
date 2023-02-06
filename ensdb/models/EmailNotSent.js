module.exports = (sequelize, type) => {
    return sequelize.define('TransactionalSendEvents_EmailNotSent', {
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
        statusCode: type.INTEGER,
        statusMessage: type.STRING,
        reason: type.STRING
      },
    {
      freezeTableName: true,
      tableName: 'TransactionalSendEvents_EmailNotSent'
    })
}
