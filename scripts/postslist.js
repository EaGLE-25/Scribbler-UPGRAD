let deletePostBtns = document.querySelectorAll(".delete-post");
let deleteModal = document.querySelector(".delete-post-modal");
let deleteYes = document.querySelector(".delete-yes");
let deleteNo = document.querySelector(".delete-no");
let moreInfoBtn = document.querySelector(".post-card .more-info");

console.log(moreInfoBtn);



deletePostBtns.forEach(deletePostBtn=>{
  deletePostBtn.addEventListener("click",(e)=>{
    let postToBeDeleted = parentUntill("post-card",e.target);
    deleteYes.setAttribute("data-delete-post",postToBeDeleted.id);
    openModal(deleteModal);
  })
})

deleteYes.addEventListener("click",(e)=>{
  deletePost(e.target.getAttribute("data-delete-post"));
})

moreInfoBtn.addEventListener("click",(e)=>{
  goToPage("post.html");
})


function parentUntill(untill,element){
  let parentFound = false;
  let parent = element.parentNode;
  while(parentFound === false){
    parent = parent.parentNode;
    if(parent.classList.contains(untill)){
      parentFound = true;
    }
  }
  return parent;
}

function deletePost(postToBeDeletedId){
  const postToBeDeleted = document.getElementById(postToBeDeletedId);
  postToBeDeleted.remove();
  closeModal(deleteModal);
}


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

function goToPage(href){
	window.location.href = href;
}