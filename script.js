//your JS code here. If required.

async function myDisplay() {
	let Delay=document.getElementById("delay").value;
	let text=document.getElementById("text").value;
  let myPromise = new Promise(function(resolve) {
    setTimeout(function() {resolve(text);}, Delay);
  });
  document.getElementById("output").innerHTML = await myPromise;
}