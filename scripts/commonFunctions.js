export function openModal(modal){
	modal.classList.remove("hide");
	modal.classList.add("show");
}

export function closeModalById(modalID){
	let modal = document.getElementById(modalID); 
	modal.classList.add("hide");
	modal.classList.remove("show");
}

export function closeModal(modal){
	modal.classList.add("hide");
	modal.classList.remove("show");
}

export function goToPage(href){
	window.location.href = href;
}
