let signinBtn = document.querySelector(".signin");
let signupBtn = document.querySelector(".signup");
let modalCloseBtn = document.querySelector(".modal-close");
let modalContainer = document.querySelector(".modal-container");



signupBtn.addEventListener("click",(e)=>{
	modalContainer.classList.remove("hide");
	modalContainer.classList.add("show");
})

modalCloseBtn.addEventListener("click",(e)=>{
	modalContainer.classList.add("hide");
	modalContainer.classList.remove("show");
})

