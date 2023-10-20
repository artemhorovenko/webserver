const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');
const fileRoutes = require('./routes/fileRoutes');

//curl -X PUT -H "Content-Type: application/json" -d '{"name":"New Name","email":"newemail@example.com","password":"newpassword"}' http://localhost:3000/users/0
//curl http://localhost:3000/users
//curl -X POST -H "Content-Type: application/json" -d '{"name":"John Doe","email":"johe@example.com","password":"password123"}' http://localhost:3000/users
//curl -X DELETE http://localhost:3000/users/0

app.use(bodyParser.json());
app.use(`/api`, userRoutes);
app.use(`/api`, messageRoutes);
app.use(`/api`, fileRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
