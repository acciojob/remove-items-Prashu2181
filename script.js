document.addEventListener("DOMContentLoaded", () =>{
	const colorSelect = document.getelementById("colorSelect");
const removeButton = document.quertSelector("input[type='button'][value = 'Select and Remove']");

removeButton.addEventListener("click", ()=>{
	const selectedIndex = colorSelect.selectedIndex;

	if(selectedIndex !== -1){
		colorSelect.remove(selectedIndex);
	}
});

});
