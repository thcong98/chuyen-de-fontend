//const proxy = require("http-proxy-middleware");
const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function(app) {
  app.use(
    createProxyMiddleware("/province", {
      target: "http://localhost:8085",
      secure: false,
      changeOrigin: true
    })
  );

  app.use(
    createProxyMiddleware("/district", {
      target: "http://localhost:8085",
      secure: false,
      changeOrigin: true
    })
  );

  app.use(
    createProxyMiddleware("/ward", {
      target: "http://localhost:8085",
      secure: false,
      changeOrigin: true
    })
  );

  app.use(
    createProxyMiddleware("/user/login", {
      target: "http://localhost:8085",
      secure: false,
      changeOrigin: true
    })
  );

  app.use(
    createProxyMiddleware("/user/all", {
      target: "http://localhost:8085",
      secure: false,
      changeOrigin: true
    })
  );

  app.use(
    createProxyMiddleware("/user/me", {
      target: "http://localhost:8085",
      secure: false,
      changeOrigin: true
    })
  );

  app.use(
    createProxyMiddleware("/user/signup", {
      target: "http://localhost:8085",
      secure: false,
      changeOrigin: true
    })
  );

  app.use(
    createProxyMiddleware("/user/", {
      target: "http://localhost:8085",
      secure: false,
      changeOrigin: true
    })
  );

  app.use(
    createProxyMiddleware("/room/", {
      target: "http://localhost:8085",
      secure: false,
      changeOrigin: true
    })
  );

  app.use(
    createProxyMiddleware("/room/info", {
      target: "http://localhost:8085",
      secure: false,
      changeOrigin: true
    })
  );

  app.use(
    createProxyMiddleware("/document", {
      target: "http://localhost:8085",
      secure: false,
      changeOrigin: true
    })
  );

  app.use(
    createProxyMiddleware("/document/delete", {
      target: "http://localhost:8085",
      secure: false,
      changeOrigin: true
    })
  );

  app.use(
    createProxyMiddleware("/document/room/", {
      target: "http://localhost:8085",
      secure: false,
      changeOrigin: true
    })
  );

  app.use(
    createProxyMiddleware("/room/search", {
      target: "http://localhost:8085",
      secure: false,
      changeOrigin: true
    })
  );

  app.use(
    createProxyMiddleware("/evaluation", {
      target: "http://localhost:8085",
      secure: false,
      changeOrigin: true
    })
  );
  
  app.use(
    createProxyMiddleware("/waitinglist/user/", {
      target: "http://localhost:8085",
      secure: false,
      changeOrigin: true
    })
  );

  app.use(
    createProxyMiddleware("/roomsharing/", {
      target: "http://localhost:8085",
      secure: false,
      changeOrigin: true
    })
  );

  app.use(
    createProxyMiddleware("/sharingdetail/", {
      target: "http://localhost:8085",
      secure: false,
      changeOrigin: true
    })
  );
  



  // app.use(
  //   createProxyMiddleware("/user", {
  //     target: "http://localhost:8080",
  //     // secure: false,
  //     // changeOrigin: true
  //   })
  // );

//   app.use(
//     proxy("/api/breeds", {
//       target: "https://dog.ceo",
//       secure: false,
//       changeOrigin: true
//     })
//   );
};

//C??i: npm install --save-dev http-proxy-middleware 
//Link c??i middleware: https://www.npmjs.com/package/http-proxy-middleware
//S???a l???i 
//Vui l??ng s??? d???ng const { createProxyMiddleware } = require("http-proxy-middleware")v?? app.use(createProxyMiddleware('/.netlify/functions/' ...)...), 
//thay v?? s??? d???ng const proxy = require('http-proxy-middleware');v?? app.use(proxy("/.netlify/functions/" ...)...), n?? s??? ho???t ?????ng.