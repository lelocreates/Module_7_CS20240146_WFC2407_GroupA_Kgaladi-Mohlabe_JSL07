document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');
  
    // Hide the modal initially
    modal.style.display = 'none';
  
    cardForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // 🚨 Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage');
      const courseNameInput = document.getElementById('courseName');
  
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input
  
      if (studentName.trim() === '' || personalMessage.trim() === '') {
        alert('Please fill in all fields');
        return;
      }
  
      // 🚨 Generate certificate content dynamically 
      // added .innerHTML and the dynamic fields and static text
      certificateContent.innerHTML = ` 
      <h1>Certificate of Achievement</h1>
      <p>This is to certify that</p>
      <h3>${studentName}</h3>
      <p>has almost completed</p>
      <h3>${courseName}</h3>
      <p>with lengendary perseverance, and world class bad-assery for never giving up! 🏆</p>
      <img src="logo.png" alt="Certificate Image" class="logo" />
      <h3>${personalMessage}</h3>
    `;
    
      //  Display the modal
      modal.style.display = 'block';
  
      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if(courseNameInput) courseNameInput.value = '';
    });
  
    //  🚨 Close the modal when the close button is clicked
    // add event listener and the parameters 
    closeModal.addEventListener('click', function () {
      this.parentElement.style.display = 'none';
    });
  });
  