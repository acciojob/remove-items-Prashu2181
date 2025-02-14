//your JS code here. If required.
const colorSelect = document.getelementById("colorSelect");
const removeButton = document.quertSelector("input[type='button']");

removeButton.addEventListener("click", ()=>{
	const selectedIndex = colorSelect.selectedIndex;

	if(selectedIndex !== -1){
		colorSelect.remove(selectedIndex);
	}
})
