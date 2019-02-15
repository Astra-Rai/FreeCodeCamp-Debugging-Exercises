//Debugging
//Catch Misuage of Single and Double quotes

//Before
/*
let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
console.log(innerHtml);


*/
//After

let innerHtml = "<p>Click here to <a href='Home'>return home</a></p>";

console.log(innerHtml);
//you cannot have double quotes within double quotes
//can you use quotes, single or double within when using string literals?