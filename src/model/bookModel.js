const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema(
  {
    bookId: {
      type: Number,
      required: true,
      unique: true,
    },
    bookName: {
      type: String,
      required: true,
    },
    bookTitle: {
      type: String,
      required: true,
    },
    bookAuthorName: {
      type: String,
      required: true,
    },
    bookPrice: {
      type: Number,
      required: true,
    },
    bookDescription: {
      type: String,
      required: true,
    },
    bookCategory: {
      type: String,
      required: true,
    },
    bookPublishedDate: {
      type: Date,
      required: true,
    },
    bookStatus: {
      type: Boolean,
      required: true,
    },
    bookImage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const bookCollection = mongoose.model(
  "BookCollection",
  bookSchema,
  "bookCollection"
);
module.exports = bookCollection;
