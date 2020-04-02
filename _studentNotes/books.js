const books = [
    {
        title: 'the cat in the hat',
        published: 1960,
        pages: 79,
        coauthor: {
            name:'Dr. Oz'
        },
    }
];

console.log(books)

for(var i=0; i< books.length; i++) {
    console.log(books[i].title)
}
