 // 1. Select the container element
 const container = document.getElementById("container");

 // 2. Create the <p> element with red text
 const redParagraph = document.createElement("p");
 redParagraph.textContent = "Hey I'm red!";
 redParagraph.style.color = "red"; // Set the text color to red

 // 3. Create the <h3> element with blue text
 const blueHeading = document.createElement("h3");
 blueHeading.textContent = "I'm a blue h3!";
 blueHeading.style.color = "blue"; // Set the text color to blue

 // 4. Create the <div> element with a black border and pink background
 const divElement = document.createElement("div");
 divElement.style.border = "2px solid black"; // Black border
 divElement.style.backgroundColor = "pink"; // Pink background

 // 4.1 Inside the <div>, create an <h1> element
 const divHeading = document.createElement("h1");
 divHeading.textContent = "I'm in a div";

 // 4.2 Inside the <div>, create a <p> element
 const divParagraph = document.createElement("p");
 divParagraph.textContent = "ME TOO!";

 // 5. Append the <h1> and <p> to the <div>
 divElement.appendChild(divHeading);
 divElement.appendChild(divParagraph);

 // 6. Append all elements to the container
 container.appendChild(redParagraph);
 container.appendChild(blueHeading);
 container.appendChild(divElement);