module.exports = function (app, fs, express) {

    app.get("/", function (req, res) {
        res.render("index");
    });
    
}