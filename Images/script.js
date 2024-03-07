// script.js
document.getElementById('resume-btn').addEventListener('click', function () {
    // Create an anchor element
    let link = document.createElement('a');

    // Set the download attribute with the desired file name
    link.download = 'Mangal Singh Resume.pdf';

    // Set the href attribute to the file path or data URL
    link.href = 'Mangal Singh Resume.pdf'; // Replace with the actual path or data URL

    // Append the anchor element to the document
    document.body.appendChild(link);

    // Trigger a click event on the anchor element
    link.click();

    // Remove the anchor element from the document
    document.body.removeChild(link);
});
