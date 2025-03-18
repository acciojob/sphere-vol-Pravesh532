function volume_sphere() {
    //Write your code here
	let radi = document.getElementById('radius').value;
	 let volumeOutput = document.getElementBuId("volume");
	let radius = parseFloat(radi);
	 if (isNaN(radius) || radius < 0) {
        volumeOutput.value = "NaN";
        return;
    }
	 let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
	volumeOutput.value = volume.toFixed(4);
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
