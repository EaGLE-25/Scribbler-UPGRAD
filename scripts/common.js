let signinBtn = document.querySelector(".signin");
let signupBtn = document.querySelector(".signup");
let modalCloseBtn = document.querySelector(".modal-close");
let signupModal = document.querySelector(".signup-modal");
let signinModal = document.querySelector(".signin-modal");
let notMemberSignUp = document.querySelector(".not-member .signup-link");


signupBtn.addEventListener("click",(e)=>{
	openModal(signupModal);
})

signinBtn.addEventListener("click",(e)=>{
	openModal(signinModal);
})

notMemberSignUp.addEventListener("click",(e)=>{
	e.preventDefault();
	closeModal(signinModal);
	openModal(signupModal);
})


function openModal(modal){
	modal.classList.remove("hide");
	modal.classList.add("show");
}

function closeModalById(modalID){
	let modal = document.getElementById(modalID); 
	modal.classList.add("hide");
	modal.classList.remove("show");
}

function closeModal(modal){
	modal.classList.add("hide");
	modal.classList.remove("show");
}