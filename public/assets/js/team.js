// JSON data for team members
var teamMembers = [
    {
        "username": "G9 Aerospace",
        "iconPath": "assets/images/dev-pfps/g9aerospace.svg",
        "role": "Owner",
        "description": "I coded most of the frontend"
    },
    {
        "username": "Dave",
        "iconPath": "assets/images/dev-pfps/dave.svg",
        "role": "Developer",
        "description": "I coded most of the backend"
    },
    {
        "username": "Lucsoft",
        "iconPath": "assets/images/dev-pfps/lucsoft.svg",
        "role": "Contributor",
        "description": "I contributed a lot of stuff!"
    },
    {
        "username": "Kakashi",
        "iconPath": "assets/images/dev-pfps/kakashi.svg",
        "role": "Developer",
        "description": "I contributed nothing, yet"
    }
];

// Function to generate team member cards
function generateTeamCards() {
    var container = document.getElementById('team-members-container');
    
    teamMembers.forEach(function(member) {
        var card = document.createElement('div');
        card.classList.add('card');

        var icon = document.createElement('img');
        icon.src = member.iconPath;
        icon.alt = member.username;
        card.appendChild(icon);

        var details = document.createElement('div');
        details.classList.add('card-details');

        var username = document.createElement('h2');
        username.textContent = member.username;
        details.appendChild(username);

        var role = document.createElement('p');
        role.textContent = member.role;
        role.classList.add(getRoleClass(member.role));
        details.appendChild(role);

        var description = document.createElement('p');
        description.textContent = member.description;
        details.appendChild(description);

        card.appendChild(details);

        container.appendChild(card);
    });
}

// Function to get class name based on role
function getRoleClass(role) {
    switch(role.toLowerCase()) {
        case 'owner':
            return 'owner';
        case 'dev':
        case 'developer':
            return 'developer';
        case 'security':
            return 'security';
        case 'contributor':
            return 'contributor';
        default:
            return '';
    }
}

// Call the function to generate team member cards
generateTeamCards();
