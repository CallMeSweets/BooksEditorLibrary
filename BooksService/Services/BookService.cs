using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using BooksService.Models;

namespace BooksService.Services
{

    

    public class BookService : BookServices
    {

        static readonly string textFile = @"C:\Users\48505\Desktop\LastProject\BooksService\BooksService\Data.txt";

        private readonly List<Book> booksList;

        public BookService()
        {
            booksList = new List<Book>();
            this.readFromFile();
            
        }

        

        public void addBook(Book book)
        {
            
            booksList.Add(book);
        }

        public void editBook(Book book, int id)
        {
            booksList[id] = book;
        }

        public Book getBookById(int id)
        {
            return booksList[id];
        }

        public List<Book> GetAllBooks()
        {
            return booksList;
        }

        public List<Book> DeleteByIndex(int index)
        {
            booksList.RemoveAt(index);

            return booksList;
        }

        private void readFromFile()
        {


            if (File.Exists(textFile))
            {

                string[] lines = File.ReadAllLines(textFile);

                for (int i = 0; i < lines.Length; i = i + 3)
                {

                    try
                    {
                        booksList.Add(new Book(lines[i], lines[i + 1], int.Parse(lines[i + 2])));
                    }
                    catch (Exception)
                    {
                        Console.WriteLine("DUpa");
                    }
                }

            }
        }

        public void saveToFile()
        {


            using (StreamWriter outputFile = new StreamWriter(textFile, false))
            {
                foreach (Book book in booksList)
                {

                    outputFile.WriteLine(book.title);
                    outputFile.WriteLine(book.author);
                    outputFile.WriteLine(book.year);
                }
            }





        }


    }
}
