// Run the code when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select all items
    const items = document.querySelectorAll(".item");
    const container2 = document.getElementById("container2");
    
    // Add event listeners to each item
    items.forEach(function(item) {
      item.addEventListener("dragstart", dragStart);
      item.addEventListener("dragend", dragEnd);
    });
    
    // Add event listeners to container2 for dragover and drop events
    container2.addEventListener("dragover", dragOver);
    container2.addEventListener("drop", drop);
  });
  
  // Function to handle dragstart event
  function dragStart(event) {
    // Set the data to be transferred during drag
    event.dataTransfer.setData("text", event.target.id);
  }
  
  // Function to handle dragend event
  function dragEnd(event) {
    // Remove the dragging class from the dragged element
    event.target.classList.remove("item-dragging");
  }
  
  // Function to handle dragover event
  function dragOver(event) {
    event.preventDefault(); // Prevent the default dragover behavior
  }
  
  // Function to handle drop event
  function drop(event) {
    event.preventDefault(); // Prevent the default drop behavior
    
    // Get the data transferred during drag
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    
    // Clone the dragged element
    var clonedElement = draggedElement.cloneNode(true);
    
    // Append the cloned element to the drop target
    event.target.appendChild(clonedElement);
    
    // Remove the dragged element from the source container
    draggedElement.parentNode.removeChild(draggedElement);
    
    // Update the success message
    showMessage("Item dropped successfully!");
    
    // Add the dragging class to the dropped item
    clonedElement.classList.add("item-dragging");
  }
  
  // Function to reset the containers and the success message
  function reset() {
    var container1 = document.getElementById("container1");
    var container2 = document.getElementById("container2");
    
    // Move all elements from container2 back to container1
    while (container2.firstChild) {
      container1.appendChild(container2.firstChild);
    }
    
    // Clear the success message
    showMessage("");
    
    // Remove the dragging class from all dragged items
    const draggedItems = document.querySelectorAll(".item-dragging");
    draggedItems.forEach(function(item) {
      item.classList.remove("item-dragging");
    });
  }
  
  // Function to show a message
  function showMessage(message) {
    var messageElement = document.getElementById("message");
    messageElement.innerHTML = message;
  }
  