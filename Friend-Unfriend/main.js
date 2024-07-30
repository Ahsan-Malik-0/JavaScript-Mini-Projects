let istatus = document.querySelector("#status");
let btn = document.querySelector("#add-friend");
let check = 0;

btn.addEventListener("click", function () {
    if (check == 0) {
        istatus.innerHTML = "Friend";
        istatus.style.color = "green";
        btn.innerHTML = "UnFriend";
        check = 1;
    }
    else {
        istatus.innerHTML = "Stranger";
        istatus.style.color = "Red";
        btn.innerHTML = "Friend";
        check = 0;
    }
})