$(document).ready(function() {
// GitHub API endpoint for the last 5 commits
var apiUrl = 'https://api.github.com/repos/kspcommunity/kspcommunity.com/commits?per_page=5';

// Make a GET request to the GitHub API
$.get(apiUrl, function(commits) {
    // Iterate through the last 5 commits
    for (var i = 0; i < commits.length; i++) {
    var commit = commits[i];
    var commitDate = new Date(commit.commit.author.date);

    // Append commit information to a div with id "commit-list"
    $('#commit-list').append(
        '<div class="commit-item">' +
        '<strong>Commit:</strong> ' + commit.sha.substring(0, 7) + '<br>' +
        '<strong>Author:</strong> ' + commit.author.login + '<br>' +
        '<strong>Message:</strong> ' + commit.commit.message + '<br>' +
        '<strong>Date:</strong> ' + commitDate.toLocaleString() + '<br><br>' +
        '</div>'
    );
    }
});
});