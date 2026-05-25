async function generateSummary() {

const skills =
document.getElementById("skills").value;

const API_KEY = "AIzaSyBOF";

try {

const response = await fetch(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
{
method: "POST",

headers: {
"Content-Type": "application/json",
},

body: JSON.stringify({
contents: [{
parts: [{
text:
`Generate professional resume summary for ${skills}`
}]
}]
})
});

const data = await response.json();

console.log(data);

if(data.candidates){

document.getElementById("output").innerText =
data.candidates[0].content.parts[0].text;

}
else{

document.getElementById("output").innerText =
"API Error";

console.log(data);

}

}
catch(error){

console.log(error);

document.getElementById("output").innerText =
"Something went wrong";

}
}
