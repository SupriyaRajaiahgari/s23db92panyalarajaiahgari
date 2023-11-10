var books = require('../models/books');
// List of all books
exports.books_list = function(req, res) {
res.send('NOT IMPLEMENTED: books list');
};
// for a specific books.
// for a specific books.
exports.books_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await books.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
// Handle books create on POST.
exports.books_create_post = async function(req, res) {
    console.log(req.body)
let document = new books();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"books_name":"goat", "cost":12, "size":"large"}
document.books_name = req.body.books_name;
document.books_author = req.body.books_author;
document.books_cost = req.body.books_cost;
try{
    let result = await document.save();
    res.send(result);
}
catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
}
};
// Handle books delete form on DELETE.
exports.books_delete = function(req, res) {
res.send('NOT IMPLEMENTED: books delete DELETE ' + req.params.id);
};
// Handle books update form on PUT.
//Handle books update form on PUT.
exports.books_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await books.findById( req.params.id)
// Do updates of properties
if(req.body.books_name)
toUpdate.books_name = req.body.books_name;
if(req.body.books_author) toUpdate.books_author = req.body.books_author;
if(req.body.books_cost) toUpdate.books_cost= req.body.books_cost;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};

exports.books_list = async function(req, res) {
    try{
    thebooks = await books.find();
    res.send(thebooks);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    exports.books_view_all_Page = async function(req, res) {
        try{
        thebooks = await books.find();
        res.render('books', { title: 'books Search Results', DBresults: thebooks });
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
        };