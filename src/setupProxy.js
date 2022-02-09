function proxy(app) {
    app.get(/^\/$/, (req, res) => res.redirect("/dashboard"));
  
    app.head(/^\/list$/, (req, res) => res.status(200).end());
  }
  
  module.exports = proxy;
  