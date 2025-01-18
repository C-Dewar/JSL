function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here

    const regex = /^pet_\d{4}[A-Za-z]+$/;
    /**Makes use of the Regex validation functionality to test/validate the input. 
     * The above format reads as follows:
     * The Regex validation statement format starts and ends with a backslash "/"
     * "^": Asserts the start of the string.
     * pet_: Matches the literal string pet_.
     * \d{4}: Matches exactly 4 digits (for the year). The date range isn't specified, so it is possible for an illogical date input provided
     *        it follows the appropriate number of digits. To further prevent bugs, this would need to be addressed more specifically. "0000"
     *        would technically be a valid input, even though that is a potential bug.
     *        For increased specificity, i.e. a date range from 2000 - present (i.e. 2025) the following could be used in stead of \d{4}
     *        "(20(0[0-9]|1[0-9]|2[0-5]))" this would match the input allowing only dates after 2000 to be valid and limit it to the current
     *        year manually. This could definitely be optomised by making the current year a dynamic/pulled element instead of using this hardcoded option.
     *        (0[0-9]{3}|1[0-9]{3}|20[0-2][0-5]) could be used as an alternative hardcoded solution to accept 0000 - 2025 date ranges.
     * [A-Za-z]+: Matches one or more alphabetic characters (for the pet's name) the plus 
     *            sign ensures that there is at least one character present representing the pets name i.e. "B"
     * $: Asserts the end of the string.
     */

    let resultElement = document.getElementById('result');

    if(regex.test(input)){
        resultElement.innerText = "Valid Input";
        resultElement.classList.remove('invalid');
        resultElement.classList.add('valid');
    }else{
        resultElement.innerText = "Invalid Input";
        resultElement.classList.remove('valid');
        resultElement.classList.add('invalid')
    }
        // Check if input starts with 'pet_' and followed by alphanumeric characters

        //document.getElementById('result').innerText = result;
        
}

/**Important to note is that the HTML contains the onclick event listener to confirm validation upon being clicked.
 * I am much more used to this being contained within the JavaScript file. 
 * The line of code to do so would be to add the following event listener at the end of the codestack:
 * 
 * document.getElementById('validateButton').addEventListener('click', validateSyntax);
 * 
 * Instead of using Regex, you could also use a more manual check like .startsWith("pet_"); however, the regex 
 * allows for higher specificity and the ability to manually add inclusions, i.e. other acceptable characters if needed.
 */


