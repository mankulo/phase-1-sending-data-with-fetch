// Add your code here
//function submitData (userName, userEmail) {
  //  fetch(`http://localhost:3000/users`, {
    //    method: "POST",
      //  headers: {
        //    "Content-type": "application/json",
          //  Accept: "application/json",
        //},
        //body:JSON.stringify ({
          //  userName: `${userName}`,
            //userEmail: `${userEmail}`
        //})
    //});
//}
//submitData(mankulo, romeroLukaku);



//const userName = mankulo
//const userEmail = romeroLukaku


const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
    body: JSON.stringify({
        name: "Steve",
        email: 'steve@steve.com'
    })
};

function submitData (userName, userEmail) {
    return fetch('http://localhost:3000/users', configurationObject)
    .then(response => response.json())
    .then(object => console.log(object))
    .catch(error => {
        const errorMessageElement = document.createElement('p');
        errorMessageElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorMessageElement);
    })
    
};

submitData('Steve', 'steve@steve.com');
