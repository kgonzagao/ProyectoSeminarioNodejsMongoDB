const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://adminUPS:ups2020@cluster0.dclfj.gcp.mongodb.net/<database>?retryWrites=true&w=majority',
    port: process.env.PORT || 5000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/',
    filesRoute: process.env.FILES_ROUTE || 'files',
}
module.exports = config