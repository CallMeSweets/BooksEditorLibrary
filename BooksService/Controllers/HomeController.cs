using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BooksService.Models;
using BooksService.Services;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BooksService.Controllers
{
    [Route("books/")]
    [ApiController]
    public class HomeController : Controller
    {

        private readonly BookServices _service;

        public HomeController(BookServices service)
        {
            _service = service;
        }

        [HttpPost]
        [Route("addBook")]
        public void AddBooks(Book book)
        {
            _service.addBook(book);
        }

        [HttpPost]
        [Route("editBook/{id}")]
        public void EditBook(Book book, int id)
        {
            _service.editBook(book, id);
        }

        [HttpGet]
        [Route("all")]
        public ActionResult<List<Book>> GetAllBooks()
        {
            List<Book> booksList = _service.GetAllBooks();

            if(booksList.Count == 0)
            {
                return NotFound();
            }

            return booksList;
            
        }

        [HttpGet]
        [Route("{id}")]
        public Book GetBookById(int id)
        {
            
            return _service.getBookById(id);

        }

     
        [HttpGet]
        [Route("delete/{index}")]
        public ActionResult<List<Book>> DeleteByIndex(int index)
        {
            List<Book> booksList = _service.DeleteByIndex(index);


            if (booksList.Count == 0)
            {
                return NotFound();
            }

            return booksList;

        }

    }
}
