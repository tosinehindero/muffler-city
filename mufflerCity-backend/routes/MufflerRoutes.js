const express = require("express");
const knex = require("knex")(require("../knexfile").development);
const MufflerRoutes = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const generateRandomKey = () => {
   return crypto.randomBytes(32).toString("base64");
};

// Sanitizer middleware function
const sanitizeInput = (input) => {
   if (typeof input === "string") {
      // Remove any HTML tags
      return input.replace(/<[^>]*>?/gm, "");
   }

   return input;
};

// Middleware for sanitizing request body
const sanitizeRequestBody = (req, res, next) => {
   if (req.body) {
      // Sanitize request body
      for (const key in req.body) {
         if (Object.prototype.hasOwnProperty.call(req.body, key)) {
            req.body[key] = sanitizeInput(req.body[key]);
         }
      }
   }
   next();
};

//register a new adm_user post
MufflerRoutes.post("/register", sanitizeRequestBody, async (req, res) => {
   const { username, email, password } = req.body;

   // checking to see if body elements exist
   if (!username || !email || !password) {
      res.status(400).json({ err: `missing body element` });
   } else {
      // Hash the password using bcrypt
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      await knex("adm_user")
         .insert({ username: username, email: email, password: hashedPassword })
         .returning("*")
         .then((result) => {
            res.status(201).json({ message: "User registered successfully" });
            console.log(result);
         })
         .catch((err) => {
            res.status(500).json({ err: `server error` });
         });
   }
});

//admin-login route
MufflerRoutes.post("/login", sanitizeRequestBody, async (req, res) => {
   try {
      const { username, password, email } = req.body;

      const admUser = await knex("adm_user").where({ username }).first();
      if (!admUser) {
         return res
            .status(401)
            .json({ error: "Invalid credentials..username not found" });
      } else {
         // Compare the provided password with the hashed password stored in the database
         const passwordMatch = await bcrypt.compare(password, admUser.password);

         if (!passwordMatch) {
            return res
               .status(401)
               .json({ error: "Invalid credentials..password does not match" });
         } else {
            const secretKey = generateRandomKey();
            console.log(secretKey);
            // If the credentials are valid, create a JSON Web Token (JWT) for authentication
            const token = jwt.sign({ userId: admUser.id }, secretKey, {
               expiresIn: "1h",
            });

            // Send the token as a response to the client
            res.status(200).json({ message: "You are logged in", token, email });
         }
      }
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while logging in" });
   }
});

// customer register route

MufflerRoutes.post("/custregister", sanitizeRequestBody, async (req, res) => {
   const { username, email, password, phone_number, fullname } = req.body;
   console.log("it hits again 1");
   // checking to see if body elements exist
   if (!username || !email || !password || !phone_number || !fullname) {
      res.status(400).json({ err: `missing body element` });
   } else {
      // Hash the password using bcrypt
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      console.log("it hits again 2");
      await knex("customer")
         .insert({
            fullname: fullname,
            phone_number: phone_number,
            username: username,
            email: email,
            password: hashedPassword,
         })
         .returning("*")
         .then((result) => {
            console.log("it hits again 3");
            res.status(201).json({ message: "customer registered successfully" });
            console.log(result);
         })
         .catch((err) => {
            res.status(500).json({ err: `server 4 error` });
         });
   }
});

//custlogin
MufflerRoutes.post("/custlogin", sanitizeRequestBody, async (req, res) => {
   try {
      const { username, password, email } = req.body;

      const customer = await knex("customer").where({ username }).first();

      if (!customer) {
         res.status(401).json({ error: "Invalid credentials..username not found" });
      } else {
         const custPasswordMatch = await bcrypt.compare(password, customer.password);
         console.log(custPasswordMatch)
         if (!custPasswordMatch) {
            return res
               .status(401)
               .json({ error: "Invalid credentials..password does not match" });
         } else {
            const secretKey = generateRandomKey();
            console.log(secretKey);
            // If the credentials are valid, create a JSON Web Token (JWT) for authentication
            const token = jwt.sign({ userId: customer.id }, secretKey, {
               expiresIn: "1h",
            });

            // Send the token as a response to the client
            res.status(200).json({ message: "You are logged in", token, email });
         }
      }
   } catch (error) {}
});

// READ (all items)
MufflerRoutes.get("/adminusers", async (req, res) => {
   await knex("adm_user")
      .select("*")
      .then((result) => {
         res.status(200).json(result);
      })
      .catch((err) => {
         res.status(500).json({ err: `server error` });
      });
});

//get all customers
MufflerRoutes.get("/customers", async (req, res) => {
   await knex("customer")
      .select("*")
      .then((result) => {
         res.status(200).json(result);
      })
      .catch((err) => {
         res.status(500).json({ err: `server error` });
      });
});

module.exports = MufflerRoutes;
