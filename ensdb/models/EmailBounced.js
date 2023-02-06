module.exports = (sequelize, type) => {
    return sequelize.define('TransactionalSendEvents_EmailBounced', {
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
        bounceCode: type.STRING,
        bounceMessage: type.STRING,
        smtpReason: type.STRING
      },
    {
      freezeTableName: true,
      tableName: 'TransactionalSendEvents_EmailBounced'
    })
}
