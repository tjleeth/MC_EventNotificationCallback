module.exports = (sequelize, type) => {
    return sequelize.define('ens_log', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        logMessage: type.STRING,
        logDate: type.DATE,
        ensPayload: type.STRING,
    },
  {
    freezeTableName: true,
    tableName: 'ens_log'
  })
}
