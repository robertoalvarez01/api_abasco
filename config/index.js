require('dotenv').config();
const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER_DEV,
    dbPass: process.env.DB_PASSWORD_DEV,
    dbHost: process.env.DB_HOST_DEV,
    dbName: process.env.DB_NAME_DEV,
    idProjectGoogleCloud: process.env.PROJECT_ID_GCLOUD,
    bucketGoogleCloud: process.env.BUCKET_GCLOUD,


    //EMAIL ACCOUNT

    ACCOUNT_USERNAME:process.env.ACCOUNT_USERNAME,
    ACCOUNT_PASSWORD:process.env.ACCOUNT_PASSWORD,
    ACCOUNT_PORT:process.env.ACCOUNT_PORT,
    ACCOUNT_HOST:process.env.ACCOUNT_HOST,
    FROM_USERNAME:process.env.FROM_USERNAME
};

module.exports = {config};