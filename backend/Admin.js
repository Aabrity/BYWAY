document.addEventListener('DOMContentLoaded', function () {
    const submissionsContainer = document.getElementById('submissionsContainer');

    function getSubmissions() {
        
        fetch('http://localhost:3001/api/get')
            .then(response => response.json())
            .then(submissions => {
                displaySubmissions(submissions);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    function displaySubmissions(submissions) {
       
        const submissionsHTML = submissions.map(submission => (
            `<div class="submission">
                <p>Name: ${submission.fullName}</p>
                <p>Email: ${submission.emailAddress}</p>
                <p>phoneNumber: ${submission.phoneNumber}</p>
                <p>SelectTrip: ${submission.selectTrip}</p>
                <p>TripLength: ${submission.tripLength}</p>
                <p>ApproxDate: ${submission.approxDate}</p>
                <p>Adults: ${submission.numberOfAdults}</p>
                <p>Children: ${submission.numberOfChildren}</p>
                <p>HotelType: ${submission.hotelType}</p>
                <p>TourType: ${submission.tourType}</p>
                <p>EstimatedBudget: ${submission.estimatedBudget}</p>
                <p>GuideLanguage: ${submission.guideLanguage}</p>
                <p>MoreInfo: ${submission.moreInfo}</p>
                <p>SelectCountry: ${submission.selectCountry}</p>
                <p>WhereDidYouFindUs: ${submission.whereDidYouFindUs}</p>
                <button class="button-delete" data-id="${submission.id}">Delete</button>
            </div>`
        )).join('');

        submissionsContainer.innerHTML = submissionsHTML;

       
        const deleteButtons = document.querySelectorAll('.button-delete');
        deleteButtons.forEach(button => {
            button.addEventListener('click', handleDelete);
        });
    }

  
    function handleDelete(event) {
        const submissionId = event.target.dataset.id;

       
        fetch(`http://localhost:3001/api/delete/${submissionId}`, {
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
