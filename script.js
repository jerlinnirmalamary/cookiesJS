// setCookie
function setCookie(){
    const cookieName=document.getElementById("setCookieNameInput").value;
    console.log(cookieName);
    const cookieValue=document.getElementById("setCookieValueInput").value;
    console.log(cookieValue);

    if(!cookieName || !cookieValue){
        alert("Please enter both a name and a value for the cookie");
        return;
    }

    document.cookie=`${cookieName}=${cookieValue}; expires=Thu, 28 Dec 2023 17:39:00 UTC; path=/`;
    location.reload();
    alert("Cookie set!");
}

// GetCookie
function GetCookie(){
    const getcookieName=document.getElementById("getCookieNameInput").value;
    if(!getcookieName){
        alert("Please enter a name to retrieve the cookie");
        return;
    }

    const cookies=document.cookie.split(';');
    alert(cookies)
    let found =false;
    for(let i =0; i<cookies.length;i++){
        const cookie=cookies[i].trim();
        if(cookie.startsWith(`${getcookieName}=`)){
            const value=cookie.substring(`${getcookieName}=`.length);
            alert("Cookie value : "+ value)
            found=true;
            location.reload();
        }
    }

if(!found){
    alert("Cookie with the specified name does not exist.");
    location.reload();
}

}


// Update Cookie
function updateCookie(){
   const UpdateCookieName=document.getElementById("UpdateCookieNameInput").value;
   const UpdateCookieValue=document.getElementById("UpdateCookieValueInput").value;
    if(!UpdateCookieName){
        alert("Please enter a name to update the cookie")
        return;
    }else if(!UpdateCookieValue){
        alert("Please enter the new value of the cookie")
        return;
    }
    let data=checkDateExist(UpdateCookieName);
    if(!data){
        alert("Cookie with the specified name does not exist");
        location.reload();

    }else{
        document.cookie=`${UpdateCookieName}=${UpdateCookieValue}; Sat, 30 Dec 2023 17:39:00 UTC; path=/`;
        alert("cookies updated....")
        location.reload()
    }
}


// Detete cookies

function deleteCookie(){
    const deleteCookieName=document.getElementById("deleteCookieNameInput").value;
    if(!deleteCookieName){
        alert("Cookies with specified name does not exist")
        location.reload();
    }else{
        document.cookie=`${deleteCookieName}=; expires=Fri, 01 Dec 2023 00:00:00 UTC; path=/`;
        alert("The Cookie is deleted!");
        location.reload();
    }
}





// Function to check the existing cookie
function checkDateExist(UpdateCookieName){
    const cookies=document.cookie.split(';');
    let found =false;
    for(let i =0; i<cookies.length;i++){
        const cookie=cookies[i].trim();
        if(cookie.startsWith(`${UpdateCookieName}=`)){
            found=true;
           break;
        }
    }
    return found;
}

