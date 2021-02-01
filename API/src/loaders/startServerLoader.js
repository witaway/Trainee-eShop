const initStartServer = (server) => {
    
  console.log('SETUP - Starting server..');

  const PORT = global.process.env.PORT || 8000;
  server.listen(PORT, (error) => {
    if (error) {
      console.log('ERROR - Unable to start server.');
    } else {
      console.log(`INFO - Server started on http://localhost:${ PORT }`);
    }
  });
};

module.exports = initStartServer;