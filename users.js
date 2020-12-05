const express = require("express");
const router = express.Router();
mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "restful_db",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Mysql connected...");
});

//Creating an API which provides user’s list with pagination
router.get("/", getallUsers);

//Creating an API which provides all users who are having user_id either 1 or 5 or 7
router.get("/selectedUsers", (req, res) => {
  let sql = "SELECT * FROM tb_user WHERE user_id in (1,5,7)";
  db.query(sql, (err, data, fields) => {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "User with id: 1,5,7 shown",
    });
  });
});

// Creating an API which provides all user whose admin has at least 3 users
router.get("/adminUsers", (req, res) => {
  let sql =
    "select tb_user.* from  tb_user Join tb_admin on tb_user.admin_id= tb_admin.admin_id group by tb_user.admin_id having count(tb_user.admin_id)>=3;";
  db.query(sql, (err, data, fields) => {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "all users whose admin has at least 3 users",
    });
  });
});

//PAGINATION FUNCTION
function getallUsers(req, res) {
  const limit = 4;
  const page = req.query.page;
  const offset = (page - 1) * limit;
  // query for fetching data with page number and offset
  const userQuery =
    "SELECT * FROM tb_user LIMIT " + limit + " OFFSET " + offset;
  db.query(userQuery, (err, data, fields) => {
    if (err) throw err;

    // Payload per page
    let jsonResult = {
      users_page_count: data.length,
      page_number: page,
      users: data,
    };

    //Response per page
    let myJsonString = JSON.parse(JSON.stringify(jsonResult));
    res.statusMessage = "Users for page " + page;
    res.statusCode = 200;
    res.json(myJsonString);
  });
}

module.exports = router;
