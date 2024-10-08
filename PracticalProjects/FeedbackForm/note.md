 document.getElementById("submit").addEventListener("click",(e)=>{
        e.preventDefault();
        var FirstName = document.getElementById("FirstName").value;
        var LastName = document.getElementById("LastName").value; 
        var Phone = document.getElementById("Phone").value;
        var Email = document.getElementById("Email").value;
        var Feedback = document.getElementById("Feedback").value;

        const data = {
            user:[
                {
                    "FirstName": FirstName,
                    "LastName": LastName,
                    "Phone": Phone,
                    "Email":Email,
                    "Feedback":Feedback
                },
                {
                    "FirstName": FirstName,
                    "LastName": LastName,
                    "Phone": Phone,
                    "Email":Email,
                    "Feedback":Feedback
                }
            ]
        }
        localStorage.setItem("data",JSON.stringify(data));
        return;
    })