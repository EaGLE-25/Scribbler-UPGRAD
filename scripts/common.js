import {openModal} from "./commonFunctions.js";
import {closeModal} from "./commonFunctions.js";
import {closeModalById} from "./commonFunctions.js";
import {goToPage} from "./commonFunctions.js";

console.log(closeModalById);

let signinBtn = document.querySelector(".signin");
let signupBtn = document.querySelector(".signup");
let modalCloseBtn = document.querySelector(".modal-close");
let signupModal = document.querySelector(".signup-modal");
let signinModal = document.querySelector(".signin-modal");
let notMemberSignUp = document.querySelector(".not-member .signup-link");
let createPostBtn = document.querySelector(".create-posts");
let createPostModal = document.querySelector(".create-post-modal");
let allPostsBtn = document.querySelector(".all-posts");





signupBtn.addEventListener("click",(e)=>{
	openModal(signupModal);
})

signinBtn.addEventListener("click",(e)=>{
	openModal(signinModal);
})

createPostBtn.addEventListener("click",(e)=>{
	openModal(createPostModal);
})

notMemberSignUp.addEventListener("click",(e)=>{
	e.preventDefault();
	closeModal(signinModal);
	openModal(signupModal);
})

allPostsBtn.addEventListener("click",(e)=>{
	goToPage("/html/postslist.html");
})

// function openModal(modal){
// 	modal.classList.remove("hide");
// 	modal.classList.add("show");
// }

// function closeModalById(modalID){
// 	let modal = document.getElementById(modalID); 
// 	modal.classList.add("hide");
// 	modal.classList.remove("show");
// }

// function closeModal(modal){
// 	modal.classList.add("hide");
// 	modal.classList.remove("show");
// }

// function goToPage(href){
// 	window.location.href = href;
// }
