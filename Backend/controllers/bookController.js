
const Book = require("../models/bookModel");

//create a book 
const createBook = async (req, res) => {
    const {title, author, price} = req.body;

    //add to database
    try {
        const book = await Book.create({title, author, price});
        res.status(201).json(book);
    } catch (error) {
        res.status(404).json({error: true, message: error.message});
    }
};

//read all books
const getBooks = async (req, res) => {
    const books = await Book.find({});

    res.status(200).json(books);
};

const getBook = async (req, res) => {
    
};

const updateBook = async (req, res) => {
    const {id} = rea.params;

    if(!mongoose.Types.ObjectID.isValid(id)){
        return res.status(404).json({error: "Book not found"});
    }
    res.status(200).json(book);
}

const deleteBook = async (req, res) => {
    const {id} = rea.params;

    if(!mongoose.Types.ObjectID.isValid(id)){
        return res.status(404).json({error: "Book not found"});
    }
}


module.exports = {
    createBook,
    getBooks,
    getBook,
    updateBook,
    deleteBook, 
};