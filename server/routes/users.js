var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
var jwtData = require("./auth/auth.js");
var con = require("../connection/connection.js");
var moment = require("moment");

//console.log(jwtData.generateToken());

/* GET users listing. */
router.get("/", function(req, res, next) {
  console.log(req.token);
  res.send("respond with a resource");
});

// customer login
router.post("/car/login/customer", jwtData.generateToken, function(req, res) {
  var formData = req.body;

  console.log(formData);

  var sql = "SELECT * FROM customer WHERE email = ? AND upassword =? ";

  con.query(sql, [formData.email, formData.password], function(err, result) {
    if (err) throw err;
    if (result.length > 0) {
      res.send({ token: req.token, result: result });
    } else {
      res.send(false);
    }
  });
});

// admin and supervisor login

router.post("/car/login/employee", jwtData.generateToken, function(req, res) {
  var formData = req.body;

  console.log(formData);

  var sql =
    "SELECT * FROM employee WHERE email = ? AND password =? AND role=? ";

  con.query(sql, [formData.email, formData.password, formData.role], function(
    err,
    result
  ) {
    console.log(err, result);
    if (err) throw err;
    if (result.length > 0) {
      res.send({ token: req.token, result: result });
    } else {
      res.send(false);
    }
  });
});

router.post("/car/customer/register", function(req, res, next) {
  var formData = req.body;
  console.log(formData);

  var sql =
    "INSERT INTO customer (custid,fname,lname,email,contactno,address,upassword) VALUES ?";
  var values = [
    [
      formData.custid,
      formData.fname,
      formData.lname,
      formData.email,
      formData.contact_no,
      formData.address,
      formData.password
    ]
  ];
  con.query(sql, [values], function(err, result) {
    if (err) throw err;
    res.send(result);
  });
});

router.post("/car/superviser/register", function(req, res, next) {
  var formData = req.body;
  console.log(formData);

  var sql =
    "INSERT INTO employee (supid,supname,contact,email,role,password,addedBy) VALUES ?";
  var values = [
    [
      formData.supid,
      formData.supname,
      formData.contact,
      formData.email,
      formData.role,
      formData.password,
      formData.addedBy
    ]
  ];
  con.query(sql, [values], function(err, result) {
    if (err) throw err;
    res.send(result);
  });
});

// admin register
router.post("/car/superviser/register", function(req, res, next) {
  var formData = req.body;
  console.log(formData);

  var sql =
    "INSERT INTO employee (supid,supname,contact,email,role,password) VALUES ?";
  var values = [
    [
      formData.supid,
      formData.supname,
      formData.contact,
      formData.email,
      formData.role,
      formData.password
    ]
  ];
  con.query(sql, [values], function(err, result) {
    if (err) throw err;
    res.send(result);
  });
});
//end

//admin Login

// end

// getdata
router.get("/car/admin/getdata", function(req, res, next) {
  // var formData=req.body;
  // console.log(formData);

  var sql = "SELECT * from employee WHERE role='supervisor'";

  con.query(sql, function(err, result) {
    // console.log(result);
    if (err) throw err;
    res.send(result);
  });
});
// end

// delete
router.post("/car/admin/superviserdel", jwtData.verifyToken, function(
  req,
  res,
  next
) {
  var formData = req.body;
  console.log(formData);
  if (req.isToken && req.email) {
    var sql = "delete from employee WHERE supid=?";

    con.query(sql, [formData.supid], function(err, result) {
      if (err) throw err;

      res.send(result);
    });
  } else {
    res.send("User is not Authorized.");
  }
});
//end
// update

router.get("/car/admin/getdata/:id", function(req, res, next) {
  console.log(req.params);
  var formData = req.params.id;
  // console.log(formData);

  var sql = "SELECT * from employee WHERE supid=? ";

  con.query(sql, [formData], function(err, result) {
    if (err) throw err;
    res.send(result);
  });
});

router.post("/car/admin/superviserup", jwtData.verifyToken, function(
  req,
  res,
  next
) {
  var formData = req.body;
  console.log(formData);
  if (req.isToken && req.email) {
    var sql =
      "update employee set supname='" +
      formData.supname +
      "',contact='" +
      formData.contact +
      "',email='" +
      formData.email +
      "' WHERE supid='" +
      formData.supid +
      "'";
    console.log(sql);
    con.query(sql, function(err, result) {
      if (err) throw err;
      res.send(result);
    });
  } else {
    res.send("User is not Authorized.");
  }
});

//end

//custreqget
router.get("/car/admin/getdatareq", function(req, res, next) {
  // var formData=req.body;
  // console.log(formData);

  var sql = "SELECT * from customerreq";

  con.query(sql, function(err, result) {
    // console.log(result);
    if (err) throw err;
    res.send(result);
  });
});
// end

//custreqget
router.post("/car/supervisor/getdatareq", function(req, res, next) {
  var formData = req.body;
  console.log(formData);
  var sql =
    "SELECT * from customerreq where assignedTo='" +
    formData.sup_id +
    "' AND status='" +
    formData.status +
    "'";
  con.query(sql, function(err, result) {
    // console.log(result);
    if (err) throw err;
    res.send(result);
  });
});
// end

// carrequ details
router.get("/car/admin/getreqdetails/:id", function(req, res, next) {
  var reqid = req.params.id;
  // console.log(formData);

  var sql =
    "SELECT model,modelno,engintype,rcno,status from customerreq WHERE req_id=?";

  con.query(sql, [reqid], function(err, result) {
    // console.log(result);
    if (err) throw err;
    res.send(result);
  });
});

// end

//assing request

router.get("/car/admin/avalEmp/:id", function(req, res, next) {
  const myEmp = req.params.id;
  var sql = "SELECT * from employee where addedBy='" + myEmp + "'";
  con.query(sql, function(err, result) {
    if (err) throw err;
    res.send(result);
  });
});

// end

// appointment

router.get("/car/admin/appointment/list/:id", function(req, res, next) {
  const appointBy = req.params.id;

  var sql = "SELECT * from customerreq where acceptedBy='" + appointBy + "'";

  con.query(sql, function(err, result) {
    // console.log(result);
    if (err) throw err;
    res.send(result);
  });
});

// end

router.get("/car/customer/requests/:id", jwtData.verifyToken, function(
  req,
  res,
  next
) {
  var custId = req.params.id;

  var sql = "SELECT * FROM customerreq WHERE cust_id=? ORDER BY time DESC;";

  con.query(sql, [custId], function(err, result) {
    if (err) throw err;
    res.send(result);
  });
});

// end

router.post("/car/requests", jwtData.verifyToken, function(req, res, next) {
  var formData = req.body;
  console.log(formData);
  if (req.isToken && formData.req_id) {
    var sql =
      "update customerreq set status='" +
      formData.status +
      "' ,rejectedBy='" +
      formData.cust_name +
      "'WHERE req_id='" +
      formData.req_id +
      "'";
    console.log(sql);
    con.query(sql, function(err, result) {
      if (err) throw err;
      res.send(result);
    });
  } else {
    res.send("User is not Authorized.");
  }
});

// end

// customer request form

router.post("/car/customer/request", jwtData.verifyToken, function(
  req,
  res,
  next
) {
  var formData = req.body;
  console.log(formData);
  if (req.isToken && req.email) {
    var sql =
      "INSERT INTO customerreq (cust_name,city,,time,cust_serv,model,modelno,engintype,rcno) VALUES ?";
    var values = [
      [
        formData.cname,
        formData.city,
        formData.date,
        formData.time,
        formData.cust_service,
        formData.modelname,
        formData.modelno,
        formData.enginetype,
        formData.rcno
      ]
    ];
    con.query(sql, [values], function(err, result) {
      if (err) throw err;
      res.send(result);
    });
  } else {
    res.send("User is not Authorized.");
  }
});

// end

// customerService
router.post("/car/customer/service/request", jwtData.verifyToken, function(
  req,
  res,
  next
) {
  var formData = req.body;
  const date = moment().format("YYYY-MM-DD hh:mm:ss A");
  console.log(formData);
  if (req.isToken && req.email) {
    var sql =
      "INSERT INTO customerreq (cust_id,cust_name,city,cust_serv,model,modelno,engintype,rcno,createdAt) VALUES ?";
    var values = [
      [
        formData.cust_id,
        formData.cname,
        formData.city,
        formData.cust_service,
        formData.modelname,
        formData.modelno,
        formData.enginetype,
        formData.rcno,
        date
      ]
    ];
    con.query(sql, [values], function(err, result) {
      if (err) throw err;
      res.send(result);
    });
  } else {
    res.send("User is not Authorized.");
  }
});
// end

// appointment

router.post("/car/admin/appointment", jwtData.verifyToken, function(
  req,
  res,
  next
) {
  var formData = req.body;
  const date = moment().format("YYYY-MM-DD hh:mm:ss A");
  console.log(formData);
  if (req.isToken && req.email) {
    var updateUser =
      "update employee set status='online' WHERE supid='" +
      formData.sup_id +
      "'";

    con.query(updateUser, function(err, result) {
      if (err) throw err;
      if (result) {
        var updateReq =
          "update customerreq set assignedTo='" +
          formData.sup_id +
          "',appointmentDate='" +
          date +
          "',status='accepted',assignedBy='" +
          formData.assignedBy +
          "' WHERE req_id='" +
          formData.req_id +
          "'";
        con.query(updateReq, function(err, result) {
          if (err) throw err;
          res.send(result);
        });
      }
    });
  } else {
    res.send("User is not Authorized.");
  }
});

router.post("/car/admin/appointment/info", jwtData.verifyToken, function(
  req,
  res,
  next
) {
  var formData = req.body;
  console.log(formData);
  if (req.isToken && req.email) {
    var sql =
      "select * from customerreq where req_id='" +
      formData.req_id +
      "' AND acceptedBy='" +
      formData.assignedBy +
      "'";

    con.query(sql, function(err, result) {
      if (err) throw err;
      res.send(result);
    });
  } else {
    res.send("User is not Authorized.");
  }
});
//end

router.post("/car/supervisor/appointment", jwtData.verifyToken, function(
  req,
  res,
  next
) {
  var formData = req.body;
  const date = moment().format("YYYY-MM-DD hh:mm:ss A");
  console.log(formData);
  if (req.isToken && req.email) {
    var updateUser =
      "update employee set status='offline' WHERE supid='" +
      formData.sup_id +
      "'";

    con.query(updateUser, function(err, result) {
      if (err) throw err;
      if (result) {
        var updateReq =
          "update customerreq set assignedTo='" +
          formData.sup_id +
          "',completedOn='" +
          date +
          "',status='" +
          formData.status +
          "' WHERE req_id='" +
          formData.req_id +
          "'";
        con.query(updateReq, function(err, result) {
          if (err) throw err;
          res.send(result);
        });
      }
    });
  } else {
    res.send("User is not Authorized.");
  }
});

router.post("/car/supervisor/appointment/cancel", jwtData.verifyToken, function(
  req,
  res,
  next
) {
  var formData = req.body;
  console.log(formData);
  if (req.isToken && req.email) {
    var updateUser =
      "update employee set status='offline' WHERE supid='" +
      formData.sup_id +
      "'";

    con.query(updateUser, function(err, result) {
      if (err) throw err;
      if (result) {
        var updateReq =
          "update customerreq set assignedTo='none',rejectedBy='" +
          formData.sup_name +
          "',status='pending' WHERE req_id='" +
          formData.req_id +
          "'";
        con.query(updateReq, function(err, result) {
          if (err) throw err;
          res.send(result);
        });
      }
    });
  } else {
    res.send("User is not Authorized.");
  }
});

// getCount Request

router.post("/car/requests/count/:role", jwtData.verifyToken, function(
  req,
  res,
  next
) {
  var role = req.params.role;
  var formData = req.body;

  if (role === "customer") {
    const cust_id = formData.cust_id;
    const status = formData.status;
    var sql = "SELECT * FROM customerreq WHERE cust_id=? AND status=?;";
    con.query(sql, [cust_id, status], function(err, result) {
      if (err) throw err;
      res.send(result);
    });
  } else if (role === "supervisor") {
    const assignedTo = formData.assignedTo;
    const status = formData.status;
    console.log(formData);
    var sql = "SELECT * FROM customerreq WHERE assignedTo=? AND status=?;";
    con.query(sql, [assignedTo, status], function(err, result) {
      if (err) throw err;
      res.send(result);
    });
  } else {
    const status = formData.status;
    var sql = "SELECT * FROM customerreq WHERE status=? ;";
    con.query(sql, [status], function(err, result) {
      if (err) throw err;
      res.send(result);
    });
  }
});

// end

// end
module.exports = router;
