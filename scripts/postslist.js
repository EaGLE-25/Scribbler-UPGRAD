let deletePostBtns = document.querySelectorAll(".delete-post");
let deleteModal = document.querySelector(".delete-post-modal");
let deleteYes = document.querySelector(".delete-yes");
let deleteNo = document.querySelector(".delete-no");



deletePostBtns.forEach(deletePostBtn=>{
  deletePostBtn.addEventListener("click",(e)=>{
    let postToBeDeleted = parentUntill("post-card",e.target);
    deleteYes.setAttribute("onclick",`deletePost(${postToBeDeleted})`);
    openModal(deleteModal);
  })
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

function deletePost(postToBeDeleted){
  console.log(postToBeDeleted);
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