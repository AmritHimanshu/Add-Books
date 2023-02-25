console.log("Welcome to the Library");

shownodes();

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

function Display() {
    this.add = function (book, count) {
        // console.log("Adding to the UI");
        let tablebody = document.getElementById("tableBody");
        // let notesobj = [];

        let notes = localStorage.getItem('notes');
        if (notes == null) {
            notesobj = [];
        }
        else {
            notesobj = JSON.parse(notes);
        }

        notesobj.push(book);
        
        localStorage.setItem('notes', JSON.stringify(notesobj));
        // console.log(notesobj);

        //First way to do.....{
        let string = `<tr>
                    <td>${notesobj.length}</td>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                </tr>`;
        tablebody.innerHTML += string;
        // }

        // Second way to do.....{
        // tablebody.innerHTML = "";
        // shownodes();
        // }
    };
}

// let notesobj;

// Display.prototype.add = function (book, count) {
//     console.log("Adding to the UI");
//     let tablebody = document.getElementById("tableBody");
//     // let notesobj = [];

//     let notes = localStorage.getItem('notes');
//     if (notes == null) {
//         notesobj = [];
//     }
//     else {
//         notesobj = JSON.parse(notes);
//     }

//     notesobj.push(book);
//     localStorage.setItem('notes', JSON.stringify(notesobj));
//     console.log(notesobj);

//     let string = `<tr>
//                     <td>${notesobj.length}</td>
//                     <td>${book.name}</td>
//                     <td>${book.author}</td>
//                     <td>${book.type}</td>
//                 </tr>`;
//     tablebody.innerHTML += string;
//     // shownodes();
// };

function shownodes() {
    let notes = localStorage.getItem('notes');
    let tablebody = document.getElementById("tableBody");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let string = "";
    notesObj.forEach(function (element, index) {
        string = `<tr>
                    <td>${index + 1}</td>
                    <td>${element.name}</td>
                    <td>${element.author}</td>
                    <td>${element.type}</td>
                </tr>`;
        tablebody.innerHTML += string;
    });

};

Display.prototype.validate = function (book) {
    if (book.name.length > 2 && book.author.length > 2) {
        return 1;
    }
    else {
        return 0;
    }
};

Display.prototype.clear = function () {
    // console.log("Form has been reset");
    let form = document.getElementById("form");
    form.reset();
};

let count = 0;

let form = document.getElementById("form");
form.addEventListener('submit', function (g) {

    g.preventDefault();
    count = count + 1;
    // console.log("You have submitted the form");

    let name = document.getElementById("bookName").value;
    let author = document.getElementById("authorName").value;

    let type1 = document.getElementById("type1");
    let type2 = document.getElementById("type2");
    let type3 = document.getElementById("type3");
    let type;
    if (type1.checked) {
        type = type1.value;
    }
    else if (type2.checked) {
        type = type2.value;
    }
    else if (type3.checked) {
        type = type3.value;
    }

    let book = new Book(name, author, type)

    let display = new Display();
    if (display.validate(book)) {
        display.add(book, count);
        display.clear();
    }
    else {
        alert("Please enter the valid book detail");
    }

});










