
var books={
    "ICT":[
    { 
        "name":"Structured programming",
        "module":"1"
     },  { 
        "name":"Structured programming",
        "module":"1"
     },  { 
        "name":"Structured programming",
        "module":"1"
     },  { 
        "name":"Structured programming",
        "module":"1"
     },  { 
        "name":"Structured programming",
        "module":"1"
     },  { 
        "name":"Structured programming",
        "module":"1"
     },  { 
        "name":"Structured programming",
        "module":"1"
     },
    ]
}
var book=books.ICT;
bookcount=book.length;
i;

function display(){
for(i=0;i<bookcount;i=i+1){
    document.getElementById("books").innerHTML=books.ICT

}
}