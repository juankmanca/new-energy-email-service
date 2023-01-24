const cors = require("vercel-cors")

module.exports = cors({
  origin: '*',
  methods: ['POST', 'GET', 'PATCH', 'DELETE', 'OPTIONS'],
  headers: ['X-CSRF-Token', ' X-Requested-With', 'Accept, Accept-Version', 'Content-Length', ' Content-MD5', 'Content-Type', 'Date', 'X-Api-Version'],
  // allowedHeaders: ['xAuth', 'Content-Type', 'X-Requested-With'],
  expose: ['xAuth', 'Content-Type', 'Accept'],
  credentials: false,
})