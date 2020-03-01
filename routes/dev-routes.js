module.exports = function(app){

    app.get("/webdev", function(req, res) {
        res.render("web development/web-development");
      });
      app.get("/nodedev", function(req, res) {
        res.render("web development/node-dev");
      });
      app.get("/reactdev", function(req, res) {
        res.render("web development/react-dev");
      });
}