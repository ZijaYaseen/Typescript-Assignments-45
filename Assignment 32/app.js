/* Assignment 32;
Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/
// List of current users
var currentUsers = ["Shizra", "Khazina", "Laraib", "Hamis", "Yaseen"];
// List of new users
var newUsers = ["shizrA", "YASEEN", "Ali", "Zija", "Rizwana"];
// Loop through new users list;  // Convert username to lowercase for case-insensitive comparison; // Check if the username exists in the current users list;
newUsers.forEach(function (newUser) {
    if (currentUsers.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("Username ".concat(newUser, " is already taken. Please enter a new username."));
    }
    else {
        console.log("Username ".concat(newUser, " is available."));
    }
});
