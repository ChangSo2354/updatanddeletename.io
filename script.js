var nameArray = ["So", "Dara", "Sok", "Seyha", "vy"];

var tbody = document.querySelector('tbody');
var nameInput = document.getElementById('num-text');
var btnSubmit = document.getElementById('btn-submit');
var btnUpdate = document.getElementById('btn-update');
var currentIndex = -1;

// Popup function for feedback
const popup = (title, text, icon) => {
    swal({
        title: title,
        text: text,
        icon: icon,
        button: "Done",
    });
}

// Display array data
const showArray = () => {
    var show = '';
    nameArray.forEach((value, index) => {
        show += `
        <tr>
            <td>${index}</td>
            <td>${value}</td>
            <td>
                <button onclick="updateArray(${index})" class="btn btn-outline-warning">Update</button>
                <button onclick="deleteArray(${index})" class="btn btn-outline-danger">Delete</button>
            </td>
        </tr>
        `;
    });
    tbody.innerHTML = show;
}

// Update name in the array
const updateArray = (index) => {
    currentIndex = index; // Store the index of the item to update
    btnUpdate.classList.remove('d-none');
    nameInput.value = nameArray[index]; // Pre-fill input with the current name

    // Update button click listener
    btnUpdate.onclick = function () {
        let updatedName = nameInput.value;
        if (updatedName && updatedName.trim() !== "") {
            nameArray[currentIndex] = updatedName.trim(); // Update the name in the array
            showArray();
            btnUpdate.classList.add('d-none');
            nameInput.value = '';
            popup("Success", "Update Name Success", "success");
        } else {
            popup("Error", "Please enter a valid name", "error");
        }
    }
}

// Delete name from the array
const deleteArray = (index) => {
    nameArray.splice(index, 1); // Remove item at the index
    showArray();
    popup("Success", "Delete Name Success", "success");
}

// Add new name to the array
btnSubmit.addEventListener('click', function () {
    let newName = nameInput.value;
    if (newName && newName.trim() !== "") {
        nameArray.push(newName.trim()); // Add the new name to the array
        showArray();
        nameInput.value = '';
        popup("Success", "Name Added", "success");
    } else {
        popup("Error", "Please enter a valid name", "error");
    }
});

// Initial load of the array
showArray();