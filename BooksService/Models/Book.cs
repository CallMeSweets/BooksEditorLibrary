using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BooksService.Models
{
    public class Book
    {
        

        public string title { get; set; }
        public string author { get; set; }
        public int year { get; set; }

        public Book(string theTitle, string theAuthor, int theYear)
        {
            title = theTitle;
            author = theAuthor;
            year = theYear;
        }

    }
}
