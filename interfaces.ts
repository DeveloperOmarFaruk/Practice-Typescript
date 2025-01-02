// Task 4: Union and Intersection Types
// Objective: Create union and intersection types using interfaces.

// Instructions:

// Define interfaces Book and Magazine.
// Create:
// A type that is a union of Book and Magazine.
// A type that is an intersection of Book and Magazine.

interface Book {
  title: string;
  author: string;
  pages: number;
}

interface Magazine {
  title: string;
  issue: number;
  publishedDate: string;
}

type BookOrMagazine = Book | Magazine;
type BookAndMagazine = Book & Magazine;

const bookExample: BookOrMagazine = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 180,
};

const magazineExample: BookOrMagazine = {
  title: "National Geographic",
  issue: 225,
  publishedDate: "January 2025",
};

const combinedExample: BookAndMagazine = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 180,
  issue: 225,
  publishedDate: "January 2025",
};

console.log(bookExample);
console.log(magazineExample);
console.log(combinedExample);

// Output
// {
//   title: 'The Great Gatsby',
//   author: 'F. Scott Fitzgerald',
//   pages: 180
// }

// {
//   title: 'National Geographic',
//   issue: 225,
//   publishedDate: 'January 2025'
// }

// {
//   title: 'The Great Gatsby',
//   author: 'F. Scott Fitzgerald',
//   pages: 180,
//   issue: 225,
//   publishedDate: 'January 2025'
// }
