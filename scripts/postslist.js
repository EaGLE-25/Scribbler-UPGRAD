let deletePostBtns = document.querySelectorAll(".delete-post");


deletePostBtns.forEach(deletePostBtn=>{
  deletePostBtn.addEventListener("click",(e)=>{
    let postToBeDeleted = parentUntill("post-card",e);
    postToBeDeleted.remove();
  })
})


function parentUntill(untill,e){
  let parentFound = false;
  let parent = e.target.parentNode;
  while(parentFound === false){
    parent = parent.parentNode;
    if(parent.classList.contains(untill)){
      parentFound = true;
    }
  }
  return parent;
}
