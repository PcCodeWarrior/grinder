const  express        = require('express');
const  app            = express();

//const passportConfig =require('./services/passport');  since this does not return anything it can also be written like:
require('./services/passport');

//const authRoutes = require('./routes/authRoutes');  following 2 lines can also be written as:
//authRoutes(app);
require('./routes/authRoutes') (app);

const PORT = 5000;
app.listen(PORT);
