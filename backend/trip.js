document.addEventListener('DOMContentLoaded', function () {
   
  const submissionTableBody = document.getElementById('submission');

  function getSubmissions() {
      console.log('Fetching submissions...');
      fetch('http://localhost:8081/planTrip/api/get')
          .then(response => response.json())
          .then(submissions => {
              console.log('Submissions received:', submissions);
              displaySubmissions(submissions);
          })
          .catch(error => {
              console.error('Error fetching submissions:', error);
          });
  }
  
  function displaySubmissions(submissions) {
      const submissionsHTML = submissions.map(submission => (
          `<tr>
              <td>${submission.fullName}</td>
              <td>${submission.emailAddress}</td>
              <td>${submission.phoneNumber}</td>
              <td>${submission.selectTrip}</td>
              <td>${submission.tripLength}</td>
              <td>${submission.approxDate}</td>
              <td>${submission.numberOfAdults}</td>
              <td>${submission.numberOfChildren}</td>
              <td>${submission.hotelType}</td>
              <td>${submission.tourType}</td>
              <td>${submission.estimatedBudget}</td>
              <td>${submission.guideLanguage}</td>
              <td>${submission.moreInfo}</td>
              <td>${submission.selectCountry}</td>
              <td>${submission.whereDidYouFindUs}</td>
              <td>
              <button class="button-delete" data-id="${submission.id}">Delete</button>
          </td>
          
          </tr>`
      )).join('');

      submissionTableBody.innerHTML = submissionsHTML;

      const deleteButtons = document.querySelectorAll('.button-delete');
      deleteButtons.forEach(button => {
          button.addEventListener('click', handleDelete);
      });
  }
  

  function handleDelete(event) {
      const submissionId = event.target.dataset.id;

      fetch(`http://localhost:8081/planTrip/api/delete/${submissionId}`, {
          method: 'DELETE',
      })
      
          .then(response => response.json())
          .then(result => {
              console.log('Submission deleted successfully:', result);

              getSubmissions();
          })
          .catch(error => {
              console.error('Error deleting submission:', error);
          });
  }

  // Initial load of submissions
  getSubmissions();
});