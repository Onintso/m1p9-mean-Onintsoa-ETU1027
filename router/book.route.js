module.exports = (app) => {
    const App = require("../controller/book.controller.js");
  
    app.post("/create-book", App.create);
  
    app.get("/get-all-books", App.findAll);
  
    app.get("/get-book-complet", App.findComplet);
  
    app.get("/message-book/:messageId", App.findOne);
  
    app.put("/message-book/:messageId", App.update);
  
    app.delete("/message-book/:messageId", App.delete);
  };