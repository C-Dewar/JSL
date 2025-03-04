const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

// ⚠️⚠️⚠️ Lesson 3: Creating and Removing Elements ⚠️⚠️⚠️
// Function to add new fitness goals and remove completed ones
// NOW LET'S DEBUG TO PREVENT DUPLICATE GOALS FROM BEING SUBMITTED 🚀

const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value;
    const goalList = document.querySelector('#goalList');
    
	// Requirement 1: Check for duplicates
    // Use 'goalList' to get all existing goals and check if 'goalInput' matches any of them.
	
	// Convert the HTML list elements to an array
    const existingGoals = Array.from(goalList.children).map(goal => goal.textContent);
	
	// Normalize the existing elements by trimming and converting to lowercase
	const existingGoalsNormalized = existingGoals.map(goal => goal.trim().toLowerCase());
	
	// Normalize the input value by trimming and converting to lowercase
	const inputGoalNormalized = goalInput.trim().toLowerCase();
	
	// Check if the input value already exists
	const doesGoalAlreadyExist = existingGoalsNormalized.includes(inputGoalNormalized)
    
    if (doesGoalAlreadyExist){
    /*changing the test input "goalInput" to lowercase for validation ensures that case sensitivity isn't a problem, 
    as it's checking the lowercase version of the input. Doing toUpperCase() would have the same effect*/

        //2: Prevent duplicates
        // If a duplicate is found, display an alert to the user and don't add the goal to the list.
        alert("This goal already exists!");
        return; //Return 
        // If it's not a duplicate, proceed with adding it as a new goal.
    } else {
		// ⚠️ Hint 3: Code structure
		// You might want to wrap the duplicate-checking logic in an 'if' statement.
		
		// ⚠️ Hint 4: Event listener
		// The event listener that removes goals when clicked is not related to this issue.
		// Focus on preventing duplicates for now.
		
		const newGoal = document.createElement('li');
		newGoal.textContent = goalInput;
		goalList.appendChild(newGoal);
}};

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

///
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
