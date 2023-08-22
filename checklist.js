document.addEventListener('DOMContentLoaded', function () {
    // Your existing JavaScript code here

    console.log("script loaded");

    // Get the checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const resultDiv = document.getElementById("score");

    // Function to check if a checkbox is unchecked and return a value
    function getValue(checkbox) {
        if (checkbox.checked) {
            return 1;
        } else {
            return 0;
        }
    }

    // Add event listener to each checkbox
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            let totalChecked = 0;
            checkboxes.forEach(function (checkbox) {
                totalChecked += getValue(checkbox);
            });

            const totalCheckboxes = checkboxes.length / 3;
            const percentageChecked = (totalChecked / totalCheckboxes);
            resultDiv.textContent = ` ${percentageChecked}`;
        });
    });
});