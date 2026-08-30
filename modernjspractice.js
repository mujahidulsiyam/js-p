let movies = [
  { title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi" },
  { title: "Titanic", year: 1997, rating: 7.9, genre: "Romance" },
  { title: "The Matrix", year: 1999, rating: 8.7, genre: "Sci-Fi" },
  { title: "Avatar", year: 2009, rating: 7.8, genre: "Sci-Fi" },
  { title: "Notebook", year: 2004, rating: 7.8, genre: "Romance" },
];

let topSifi=movies?.map((m)=> m).filter((f)=>f.genre =="Sci-Fi").sort()
console.log(topSifi);


let topSiFi = movies?.filter((m)=>m.genre === "Sci-Fi")?.sort((a,b)=>b.rating-a.rating);
