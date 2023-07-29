const addBlog = document.getElementById("addBlog");
const overlay = document.getElementById("overlay");

addBlog.addEventListener("click", () => {
  overlay.style.display = "block";
});

function submitForm(event) {
  event.preventDefault(); // Prevent form submission (page reload)
  // Get a reference to the form and its elements
  const form = document.getElementById("myForm");
  const posturlInput = document.getElementById("postUrl");
  const postTitleInput = document.getElementById("postTitle");
  const postDescriptionInput = document.getElementById("postDescription");
  // Get the values from the form inputs
  const posturl = posturlInput.value;
  const postTitle = postTitleInput.value;
  const postDescription = postDescriptionInput.value;

  //for random keys
  function generateRandomString() {
    return Math.random().toString(36).substr(2, 10);
  }
  const uniqueKey = `post_${Date.now()}_${generateRandomString()}`;
  console.log(uniqueKey);

  // Create an object to store the data
  const postData = {
    posturl,
    postTitle,
    postDescription,
  };

  // Convert the object to a JSON string
  const jsonData = JSON.stringify(postData);

  // Store the JSON string in localStorage
  localStorage.setItem(uniqueKey, jsonData);

  // Function to get data from localStorage
  function getDataFromLocalStorage() {
    // Get the JSON string from localStorage
    const jsonData = localStorage.getItem(uniqueKey);

    // Check if data exists in localStorage
    if (jsonData) {
      // Parse the JSON string back into an object
      const postData = JSON.parse(jsonData);

      // Access the data properties
      const posturl = postData.posturl;
      const postTitle = postData.postTitle;
      const postDescription = postData.postDescription;

      // Now you can use the data as needed
      console.log("Post URL:", posturl);
      console.log("Post Title:", postTitle);
      console.log("Post Description:", postDescription);

      // Create the main div element
      const mainDiv = document.createElement("div");
      mainDiv.classList.add("box");

      // Create the image element
      const imgElement = document.createElement("img");
      imgElement.src = `${posturl}`;
      imgElement.classList.add("box-img");
      imgElement.alt = "dynamic img";

      // Create the h2 element
      const h2Element = document.createElement("h2");
      h2Element.textContent = `Blog Title : 4 ${postTitle}`;

      // Create the p element
      const pElement = document.createElement("p");
      pElement.textContent = `Blog Description : ${postDescription}`;

      // Create the button element
      const buttonElement = document.createElement("button");
      buttonElement.classList.add("read");
      buttonElement.textContent = "Read";

      // Append the image, h2, p, and button elements to the main div
      mainDiv.appendChild(imgElement);
      mainDiv.appendChild(h2Element);
      mainDiv.appendChild(pElement);
      mainDiv.appendChild(buttonElement);

      // Append the main div to the container
      let showContent = document.getElementById("show-content");

      showContent.appendChild(mainDiv);
    } else {
      alert("no data found");
    }
  }

  // Call the function to retrieve and use the data
  getDataFromLocalStorage();

  // Remove the form after submission
  overlay.style.display = "none";
}

// // Example: Populate the form fields with the retrieved data
// document.getElementById("posturl").value = posturl;
// document.getElementById("postTitle").value = postTitle;
// document.getElementById("postDescription").value = postDescription;
let cross = document.getElementById("cross");
cross.addEventListener("click", () => {
  overlay.style.display = "none";
});
//to clear local storage
//localStorage.clear();
