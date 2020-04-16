// Define your Book class here:
class Book{
  constructor(title,author,copyrightDate,isbn,numberOfPages,numberOfTimesCheckedOut,hasBeenDiscarded){
  this.title = title;
  this.author = author;
  this.copyrightDate = copyrightDate;
  this.isbn = isbn;
  this.numberOfPages = numberOfPages;
  this.numberOfTimesCheckedOut = numberOfTimesCheckedOut;
  this.hasBeenDiscarded = hasBeenDiscarded;
  }
  destroy(currentYear){
    throw new Error("Books are Forever");
    
  }
}

// Define your Manual and Novel classes here:
class Manual extends Book{
  constructor(title,author,copyrightDate,isbn,numberOfPages,numberOfTimesCheckedOut,hasBeenDiscarded){
    super(title,author,copyrightDate,isbn,numberOfPages,numberOfTimesCheckedOut,hasBeenDiscarded);
  }
  // the book must be thrown out if it is over 5 years old.
  destroy(currentYear){
    let messageForThrow ="The book thrown out if it is over 5 years old";
    let total = currentYear-this.copyrightDate;
    if(total > 5){
      this.hasBeenDiscarded = "yes "+messageForThrow;
          }else{
      this.hasBeenDiscarded ="No";
       }
  return this.hasBeenDiscarded+", years:"+total;
  }
}

class Novel extends Book{
  constructor(title,author,copyrightDate,isbn,numberOfPages,numberOfTimesCheckedOut,hasBeenDiscarded){
    super(title,author,copyrightDate,isbn,numberOfPages,numberOfTimesCheckedOut,hasBeenDiscarded);
  }
  //the book should be thrown out if it has been checked out over 100 times.
  destroy(checkedOutOverTimes){
    let messageForThrow = "The book should be thrown out if it has been checked out over 100 times";
     this.numberOfTimesCheckedOut += checkedOutOverTimes;
    if(this.numberOfTimesCheckedOut > 100){
      this.numberOfTimesCheckedOut = "yes "+messageForThrow;
      }else{
      this.numberOfTimesCheckedOut ="No";
       }
    return this.numberOfTimesCheckedOut;
   }
}
// Declare the objects for part 2 here:

let hardPaperBook = new Novel("Pride and Prejudice","Jane Austen",1813,1111111111111,432,32,"No");
let normalPaperBook = new Manual("Top Secret Shuttle Building Manual","Redacted",2013,0000000000000,1147,1,"No");

console.log(hardPaperBook);
console.log(normalPaperBook);
// Code part 3 here:
console.log(normalPaperBook.destroy(2020));
console.log(hardPaperBook.destroy(100));