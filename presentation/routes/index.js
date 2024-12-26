// const userRoutes = require('./user.route');
const charityRoutes = require('./charityRoutes');

module.exports = (app) => {

    app.get('/', (req, res) => {
        res.send({
            message: 'OK - Server is up and running',
            code: 200,
            version: '3.0.0'
        })
    });

    // routes 
    // app.use('/api/v1/user', userRoutes);
    app.use('/api/v1/charity', charityRoutes);
};