using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BooksService.Models;

namespace BooksService.Services
{
    public interface BookServices
    {
        void addBook(Book book);
        void editBook(Book book, int id);
        Book getBookById(int id);
        List<Book> GetAllBooks();
        List<Book> DeleteByIndex(int index);
    }
}
