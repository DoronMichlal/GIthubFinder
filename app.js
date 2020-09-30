import Github from './github.js';
import UI from './ui.js';

const github = new Github();
const ui = new UI();

// Search input
const searchUser = document.querySelector('#searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if (userText !== '') {
        // Make HTTP call
        github.getUser(userText).then((data) => {
            if (data.profile.message === 'Not Found') {
                // Show alert
                ui.showAlert('User Not Found...', 'alert alert-danger');
            } else {
                // Show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        });
    } else {
        // Clear profile
        ui.clearProfile();
    }
});
