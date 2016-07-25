

module.exports = function(app) {

    require("./routes/user.server.routes")(app);
    require("./routes/todo.server.routes")(app);

   
    // application -------------------------------------------------------------
    app.get('*', function(req, res) {
        res.sendFile(__dirname + '/client/view/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};