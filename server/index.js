require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      authCtrl = require('./authController'),
      cartCtrl = require('./cartController'),
      app = express();

app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24}
}));

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected');
});

//auth endpoints
app.post('/auth/login', authCtrl.login);
app.post('/auth/register', authCtrl.register);
app.post('/auth/logout', authCtrl.logout);

//cart endpoints
app.get('/api/products', cartCtrl.getProducts);
app.post('/api/cart', cartCtrl.addToCart);
app.get('/api/cart/:id', cartCtrl.getCart);

const port = SERVER_PORT || 4039;
app.listen(port, () => console.log(`Memeing on port ${port}`));