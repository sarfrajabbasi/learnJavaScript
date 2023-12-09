const express = require("express");
const server = express();

server.get("/home", (req, res) => {
  const data = {
    greet: "hello",
  };
  res.status(201).send({ data, message: "" });
});
// req. query
server.get(
  "/about",
  (req, res, next) => {
    console.log(" from about 1  ");
    // next();
  },
  (req, res, next) => {
    console.log(" from about 2  ");
    next();
  },
  (req, res) => {
    const myPhone = req.query.myphone;
    const ram = req.query.ram;
    // res.status(201).send(`${myPhone} and his Ram is ${ram}`);
    const data = {
      myPhone: myPhone,
      ram: ram,
    };
    res.status(201).send({ data, message: "" });
  }
);


// req. params
server.get("/:name", (req, res) => {
  const name = req.params.name;
  const data = { name: name };
  res.send({ data, message: "" });
});

server.get("/:name/:age/:country", (req, res) => {
  const name = req.params.name;
  const age = req.params.age;
  const country = req.params.country;
  const data = {
    name: name,
    age: age,
    country: country,
  };
  res.send({ data, message: "" });
});

server.post('/login',(req,res)=>{
  
})

server.listen(8080, () => {
  console.log("hello");
});
