console.log('This is ES6 version of Project 2');
// constructor
// function Book(name,author,type) {
//     this.name=name;
//     this.author=author;
//     this.type=type;
// }
// function Display() {

    
// }

// // add methods to display prototype

// Display.prototype.add=function (book) {
//     console.log("adding to ui");
//     let tableBody = document.getElementById('tableBody');
//         let uiString = `<tr>
//                             <td>${book.name}</td>
//                             <td>${book.author}</td>
//                             <td>${book.type}</td>
//                         </tr>`;
//         tableBody.innerHTML += uiString;

// }
// // implement the clear function
// Display.prototype.clear=function () {
//     let libraryForm=document.getElementById('libraryForm');
//     libraryForm.reset();
// }

// // implement the validate function
// Display.prototype.validate=function () {
//     if (book.name.length<2|| book.author.length<2){
//         return false;
//     }
//     else{
//         return true;
//     }
// }

// Display.prototype.show=function (type,displayMessage) {
//     let message=document.getElementById('message');
//     let boldText;
//         if(type==='success'){
//             boldText = 'Success';
//         }
//         else{
//             boldText = 'Error!';
//         }
//     message.innerHTML=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
//     <strong>${boldText}:</strong> ${displayMessage}
//     <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//     <span aria-hidden="true">×</span>
//     </button>
//     </div>`;
//     setTimeout(() => {
//         message.innerHTML=''
//     }, 2000);
    
// }





// // add submit eventlistner to libraryform
// let libraryForm=document.getElementById('libraryForm');
// libraryForm.addEventListener('submit',libraryFormSubmit);
// function libraryFormSubmit(e){
//     console.log("form submitted");
//     let name=  document.getElementById('bookName').value;
//     let author=document.getElementById('author').value;
    
//     let fiction=  document.getElementById('fiction');
//     let programming=document.getElementById('programming');
//     let cooking=  document.getElementById('cooking');
//     let type
    
//     if(fiction.checked){
//         type=fiction.value;
//     }
//     else if(programming.checked){
//         type=programming.value;
//     }
    
//     else if(cooking.checked){
//         type=cooking.value;
//     }
//     let book=new Book(name,author,type);
//     console.log(book);
    
//     let display=new Display();
//     if(display.validate(book)){
//          display.add(book);
//         display.clear();
//         display.show('successfull','book has been added');
//     }
//     else{
//         display.show('danger','yo can not add this')
//     }
    
//     e.preventDefault();
// };
console.log('hi ES6 version of js');
console.log('This is ES6 version of Project 2');
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {
        console.log("Adding to UI");
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr>`;
        tableBody.innerHTML += uiString;
    }

    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false
        }
        else {
            return true;
        }
    }

    show(type, displayMessage) {
        let message = document.getElementById('message');
        let boldText;
        if(type==='success'){
            boldText = 'Success';
        }
        else{
            boldText = 'Error!';
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${boldText}:</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>`;
        setTimeout(function () {
            message.innerHTML = ''
        }, 5000);
    
    }
}

// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('YOu have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added')
    }
    else {
        // Show error to the user
        display.show('danger', 'Sorry you cannot add this book');
    }

    e.preventDefault();
}