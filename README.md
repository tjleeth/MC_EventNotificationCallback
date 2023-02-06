# Marketing Cloud ENS (Event Notification Service) Callback


### About
Service that consumes MC Event Notification callbacks and writes to database. 

### Setup
1)  Deploy to Heroku. [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
2)  Open Heroku logs for your new app in one window. In another window, Open Marketing Cloud to register a callback (Setup > Feature Settings > Event Notifications > Url Callbacks) as the heroku app url with `/ens` appended. (https://myapp.herokuapp.com/ens). As soon as this happens, a verification code will be logged. This can be input in the Marketing Cloud by clicking Verify next to your newly created callback. 
3)  In Marketing Cloud, create a subscription for the callback created in step 2. 

As soon as events start occuring, they will start to flow into the database attached to your Heroku app.

### Marketing Cloud Docs

**Help Doc** 
https://help.salesforce.com/s/articleView?id=sf.mc_overview_ens.htm&type=5

**Developer Doc** 
https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/ens-get-started.html


### Notes
* This can alternatively be deployed outside of Heroku and connect to any mysql, mssql, or postgres database. Simply ensure the DB_URL environment variable contains the connection string and DB_DIALECT is set to either mysql, mssql, or postgres.
