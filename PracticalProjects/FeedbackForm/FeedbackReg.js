var Data = [
]

function readData (){
    
    localStorage.setItem("Data",JSON.stringify(Data));
    var tabledata = document.querySelector("#body");

    var obj = localStorage.getItem("Data");
    var objData = JSON.parse(obj);
    var elements = "";

    objData.map(record => (
        elements += `<tr>
        <td>${record.FirstName}</td>
        <td>${record.LastName}</td>
        <td>${record.Phone}</td>
        <td>${record.Email}</td>
        <td>${record.Feedback}</td>
        </tr>`
    ))
    tabledata.innerHTML = elements;
}

function AddData() {
    
    var FName = document.getElementById("FirstName").value;
    var LName = document.getElementById("LastName").value;
    var Phone = document.getElementById("Phone").value;
    var Email = document.getElementById("Email").value;
    var Feedback = document.getElementById("Feedback").value;

    var newObj = { 
        FirstName: FName,
        LastName: LName,
        Phone: Phone,
        Email:Email,
        Feedback: Feedback
    }
    Data.push(newObj);
    readData();
}