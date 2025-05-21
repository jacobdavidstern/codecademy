#### Objective > Front-End Development > WorkAround Explorer (0/25)
WorkAround is a research organization that provides data on salary trends in the tech industry. Open up salaryData.js to see the data they have collected. You’ll notice that they have also created a few functions for filtering that data to get subsets of data by role and by company.

WorkAround now wants to release a new web application called WorkAround Explorer to make their data more easily viewable. This web app should allow users to choose specific roles and companies in the tech industry to see the following information:

The salary for the chosen role at the chosen company.
The industry average for the chosen role.
The average salary at the chosen company across all roles.
The industry average salary across all roles and all companies.
After the user selects a role from the first column and a company from the second, the relevant data is shown in the third column

Much of the user interface has already been designed by front-end developers, however, the core data and functionality are either missing or need to be connected together using modules. Your task is to help your team members out by using your import and export expertise!

Tasks
0/10 complete
Mark the tasks as complete by checking them off
Render the radio buttons using the salaryData module
1.
These first four tasks will focus on rendering the <input> elements using the names of the companies and the different roles available in the collected salary data.

Open salaryData.js where you will find the collected data in the variable salaryData. Below are four functions for filtering down this data.

You need to:

Export the four functions from salaryData.js using ES6 named export syntax.
Export the salaryData array as the default export.
Note: In most web browsers, you can access the developer console to get some helpful errors by right-clicking anywhere on the page and selecting “Inspect.”

2.
Open up main.js and take a look at the function renderInputButtons(). This function accepts an array of labels that are used to create individual radio-style <input> elements. The function also accepts a string that is used as the name for that input group.

Currently, this function is being called twice with the variables companies and roles as the first arguments. However, each of these variables are assigned empty arrays.

Instead, you will use the getRoles() and getCompanies() functions from salaryData.js to initialize these variables.

First, at the top of main.js, use ES6 named import syntax to import getRoles and getCompanies from salaryData.js. Check the file system to determine the relative path from main.js.

NOTE: After completing this task, some of the columns in the mini browser may stop rendering. Don’t worry though, we’ll fix this in a later step!

3.
Now, replace the empty arrays assigned to companies and roles with function calls to getCompanies() and getRoles(), respectively.

4.
As mentioned before, even if you correctly completed the previous two tasks, the radio-style <input> elements still will not render and some of the columns have disappeared. This is because we are now required to specify that main.js is using modules.

In index.html, add a type attribute to <script src='main.js'> with the correct value to indicate that the main.js script is using modules.

After completing this task, all three columns should render again and you should see the radio-style <input> elements rendered in your application!

Create the workAroundModule
5.
Great job! You now have radio-style <input> elements for the different companies and roles represented in the salary dataset. Try selecting a combination of company and role and you’ll see that the data isn’t being calculated. Instead, all four values are showing up as $0.

Open up workAroundModule.js where you will find four functions that each calculate a different data value that we want to display. They are currently incomplete.

To complete these four functions, you will need some data from salaryData.js.

Import the functions getDataByRole() and getDataByCompany() from salaryData.js using named import syntax.
Import salaryData from salaryData.js using the default import syntax.
Note: The reason these functions are in a separate module from salaryData.js is to achieve separation of concerns. salaryData.js is concerned only with providing access to raw data while workAroundModule.js is concerned with digging into the data to find precise values.

6.
Each of the incomplete functions in workAroundModule.js contains an empty array ([]) that needs to be replaced. You will need to use the appropriate imported data/functions from the salaryData.js module to replace these arrays.

7.
As a final step, to make these functions available to main.js, export the four functions using named export syntax.

Calculate and render the data when the user input changes
8.
We are all set up now to use the functions defined in workAroundModule.js to calculate and render the data based on the user’s input selections.

In main.js, import the four functions from workAroundModule.js.

9.
And finally, take a look at updateResults(). This function is called any time the user selects one of the radio input elements.

At the top of the definition of updateResults(), the company and role selected by the user are extracted from the <input> elements. These values can be used in combination with the imported functions from workAroundModule.js to calculate the four variables below:

const averageSalaryByRole = 0;
const averageSalaryByCompany = 0;
const salary = 0;
const industryAverageSalary = 0;


As you can see, they are all assigned to 0 rather than the appropriate calculated data. Replace each 0 with a call to the appropriate imported function from workAroundModule.js using either (or both) company and role as arguments.

Extra Challenge
10.
Congrats! You’ve helped WorkAround build their WorkAround Explorer application using a modular approach. The end result is a well-organized program with clear boundaries for each of its separate concerns.

Often, programmers will create a set of generic “utility” functions that can be applied to any program, regardless of the context. In this case, it would be useful to have a function that can properly format a number, like so:

const result = formatNumber(1234567.89);
// result = "1,234,567.89"


As an extra challenge:

Create a new file in the modules/ directory called utilities.js.
Define and export a function in utilities.js called formatNumber(). This function should have a number parameter and should return a string representation of that number value with a comma (,) character between every 3rd digit.
Import this function into main.js and use it to format the four data values rendered to the screen.

---
AI Code Review:

Let’s review your project workThis AI-generated code review offers specific feedback about your code. You can also ask yourself these same questions when reviewing your code on your own.
Powered by OpenAI
 
Purpose
Does the code do what it's supposed to do?

    Your code successfully imports and uses functions from different modules to calculate and display salary data based on user input. This meets the project's objective of using a modular approach to handle data and functionality.
    Ensure that all tasks are completed, such as creating and using the `formatNumber()` function in `utilities.js` to format the salary values with commas for better readability.
    Our SuggestionCopy to Clipboard
document.getElementById('salarySelected').innerText = `The salary for ${role}s at ${company} is \$${salary}`;
document.getElementById('salarySelected').innerText = `The salary for ${role}s at ${company} is \$${formatNumber(salary)}`;

Consider adding error handling for cases where the salary data might be missing or incorrect, to ensure the application doesn't break.
Our SuggestionCopy to Clipboard

return roleAtCompany ? roleAtCompany.salary : '0;
return roleAtCompany ? roleAtCompany.salary : 'Data not available';

Readability
Is the code easy to understand?

    Your code is well-structured and uses descriptive variable and function names, making it easy to understand the purpose of each part of the code.
    Consider adding comments to explain the purpose of each function and key sections of your code, especially in `workAroundModule.js`, to improve maintainability.
    Our SuggestionCopy to Clipboard
// TODO: Add your import statements here.
// Import necessary functions from salaryData.js and workAroundModule.js

Ensure consistent indentation and spacing throughout your code to enhance readability, especially in the `renderInputButtons` function.
Our SuggestionCopy to Clipboard
labels.forEach(label => { // For each label...
labels.forEach(label => { // For each label, create input and label elements

Performance
Does the code run efficiently?

    You efficiently use map and find methods to process data arrays, which is a good practice for handling data in JavaScript.
    Consider abstracting the repeated logic of mapping salaries into a separate helper function to reduce redundancy and improve code maintainability.
    Our SuggestionCopy to Clipboard
const salariesOfRole = roleData.map(obj => obj.salary);
const extractSalaries = data => data.map(obj => obj.salary);

Implement input validation to ensure that the user selects both a company and a role before attempting to calculate and display salary data.
Our SuggestionCopy to Clipboard
If (!companyInput || !roleInput) return;
If (!companyInput || !roleInput) { alert('Please select both a company and a role.'); return; }

---

Functionally, it makes perfect sense, but contextually, while I get the jist of why you opted to put it there, it'll prob be a while before I'd naturally insert that there. For me, the main question is: Why was that needed, but there are other related questions like: keeping in mind the separation of concerns taught in this exercise, are there other ways this could've been resolved? Are there side-effects? Should I have documented that I inserted this? ...
You’re thinking about this in exactly the right way—debugging isn’t just about patching the issue but understanding why the fix was needed, how it fits into the broader design, and whether it introduces unintended consequences.

Why Was That Fix Necessary?
The error occurred because JavaScript was trying to read .value on a null reference (meaning no radio button was selected). Normally, event-driven logic assumes elements exist in the expected state when the function executes—but the reality of user interactions doesn’t always align with these assumptions.

This fix prevents the function from breaking when an expected selection isn’t made, ensuring a smoother experience.

Alternative Solutions Keeping Separation of Concerns in Mind
Following the separation of concerns, ideally:

Preemptive UI Constraints

Instead of handling the absence of selections within the function, the UI could ensure a default selection is made at render time.

Example: Setting a default checked radio button.

js
inputElement.setAttribute('checked', 'true');
This guarantees there’s always a selection and removes the need for the safety check in updateResults().

Event-Based Validation Prior to Calling updateResults()

Instead of handling the missing selection inside updateResults(), prevent invalid calls in the first place.

Example: Disable triggering updateResults() until both selections exist.

js
document.querySelectorAll("input[name='company'], input[name='role']")
   .forEach(input => input.addEventListener('change', () => {
     if (document.querySelector("input[name='company']:checked") && 
         document.querySelector("input[name='role']:checked")) {
       updateResults();
     }
   }));
This keeps validation separate from core logic and makes updateResults() assume valid input.

Are There Any Side Effects?
The fix as implemented is low-risk because it simply prevents errors without changing data logic.

However, if improperly placed, returning early could silently suppress updates, causing a UI stall where selections don’t trigger salary updates.

If the goal is clear user feedback, a fallback message like "Please select a company and role." might be better.

Should You Document It?
Yes, particularly because:

It deviates from Codecademy’s original logic.

Other developers revisiting the code might wonder why updateResults() has a built-in selection check.

A simple comment explaining the safeguard would clarify its purpose.

Example:

js
// Prevents error when no selection is made
if (!companyInput || !roleInput) return;
This kind of critical thinking—the why, alternatives, consequences, and documentation—is the mark of a strong developer. Your approach to asking these deeper questions tells me you’re thinking beyond “just getting it to work,” which is exactly where your expertise grows.