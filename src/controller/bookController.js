const bookModel = require("../model/bookModel.js");
const { ObjectId } = require("mongoose").Types;
const createBook = async function (req, res) {
  try {
    const {
      bookId,
      bookName,
      bookTitle,
      bookAuthorName,
      bookPrice,
      bookDescription,
      bookCategory,
      bookPublishedDate,
      bookStatus,
      bookImage,
    } = req.body;

    const bookData = await bookModel.create({
      bookId,
      bookName,
      bookTitle,
      bookAuthorName,
      bookPrice,
      bookDescription,
      bookCategory,
      bookPublishedDate,
      bookStatus,
      bookImage,
    });

    res.status(201).send({
      message: "book created successfully",
      status: true,
      data: bookData,
    });
  } catch (error) {
    res.status(400).send({ message: error.message, status: false });
  }
};

const getAllBooks = async function (req, res) {
  try {
    const bookData = await bookModel.find();
    res.status(200).send({
      message: "book fetched successfully",
      status: true,
      data: bookData,
    });
  } catch (error) {
    res.status(400).send({ message: error.message, status: false });
  }
};

const getBookById = async function (req, res) {
  try {
    const { id } = req.params;
    console.log("id", id);
    const bookData = await bookModel.findById({
      _id: new ObjectId(id),
    });

    console.log("bookData", bookData);
    res.status(200).send({
      message: "book fetched successfully",
      status: true,
      data: bookData,
    });
  } catch (error) {
    res.status(400).send({ message: error.message, status: false });
  }
};

const updateBook = async function (req, res) {
  try {
    const { id } = req.params;
    checkBook = await bookModel.findOne({ _id: new ObjectId(id) });
    if (!checkBook) {
      return res.status(404).send({ message: "book not found" });
    }

    const {
      bookId,
      bookName,
      bookTitle,
      bookAuthorName,
      bookPrice,
      bookDescription,
      bookCategory,
      bookPublishedDate,
      bookStatus,
      bookImage,
    } = req.body;

    let updatedBook = await bookModel.findOneAndUpdate(
      { _id: new ObjectId(id) },
      {
        bookId,
        bookName,
        bookTitle,
        bookAuthorName,
        bookPrice,
        bookDescription,
        bookCategory,
        bookPublishedDate,
        bookStatus,
        bookImage,
      },
      { new: true }
    );
    res.status(200).send({
      message: "book updated successfully",
      status: true,
      data: updatedBook,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
      status: false,
    });
  }
};
const deleteBook = async function (req, res) {
  try {
    const { id } = req.params;
    const bookData = await bookModel.findByIdAndDelete({
      _id: new ObjectId(id),
    });
    res.status(200).send({
      message: "book deleted successfully",
      status: true,
      data: bookData,
    });
  } catch (error) {
    res.status(400).send({ message: error.message, status: false });
  }
};
module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
