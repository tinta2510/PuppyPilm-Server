import app from './app';
import db from './config/dbConfig';
const PORT = process.env.PORT || 3000;
db.connect()
  .then(() => console.log("Connect to database successfully."))
  .catch(err => console.log(err));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
