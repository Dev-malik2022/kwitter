function addUser()
{
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name" , user_name);

    window.location = "kwitter_room.html";
}

function Logout()
{
    logout = document.getElementById("logout" , logout ).value;

    window.location = "index.html"; 
}

function divelem()
{
    windows.alert("Congratulations ! You can now chat with the selected class");
}