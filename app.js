// Update the API endpoint URLs
const userAPIUrl = "http://Frontend-service:5000/users";
const teamAPIUrl = "http://Frontend-service:5000/teams";
const relationshipAPIUrl = "http://Frontend-service:5000/relationships";

// Handle create user form submission
$("#create-user-form").submit(function (event) {
  event.preventDefault();
  const username = $("#username").val();
  const userData = { username };

  $.ajax({
    type: "POST",
    url: userAPIUrl,
    data: JSON.stringify(userData),
    contentType: "application/json",
    success: function (response) {
      alert(response.message);
      // Optionally, update the user table with the new data
      // fetchUsers();
    },
    error: function (error) {
      alert("An error occurred. Please try again.");
      console.error(error);
    },
  });
});

// Handle create team form submission
$("#create-team-form").submit(function (event) {
  event.preventDefault();
  const teamname = $("#teamname").val();
  const teamData = { teamname };

  $.ajax({
    type: "POST",
    url: teamAPIUrl,
    data: JSON.stringify(teamData),
    contentType: "application/json",
    success: function (response) {
      alert(response.message);
      // Optionally, update the team table with the new data
      // fetchTeams();
    },
    error: function (error) {
      alert("An error occurred. Please try again.");
      console.error(error);
    },
  });
});

// Handle create relationship form submission
$("#create-relationship-form").submit(function (event) {
  event.preventDefault();
  const userid = $("#userid").val();
  const teamid = $("#teamid").val();
  const relationshipData = { userid, teamid };

  $.ajax({
    type: "POST",
    url: relationshipAPIUrl,
    data: JSON.stringify(relationshipData),
    contentType: "application/json",
    success: function (response) {
      alert(response.message);
      // Optionally, update the relationship table with the new data
      // fetchRelationships();
    },
    error: function (error) {
      alert("An error occurred. Please try again.");
      console.error(error);
    },
  });
});

// Function to fetch and display users
function fetchUsers() {
  $.get(userAPIUrl, function (users) {
    const userTable = $("#user-table");
    userTable.empty();
    userTable.append("<tr><th>User ID</th><th>Username</th></tr>");

    for (const user of users) {
      const row = `<tr><td>${user.user_id}</td><td>${user.username}</td></tr>`;
      userTable.append(row);
    }
  });
}

// Function to fetch and display teams
function fetchTeams() {
  $.get(teamAPIUrl, function (teams) {
    const teamTable = $("#team-table");
    teamTable.empty();
    teamTable.append("<tr><th>Team ID</th><th>Team Name</th></tr>");

    for (const team of teams) {
      const row = `<tr><td>${team.team_id}</td><td>${team.team_name}</td></tr>`;
      teamTable.append(row);
    }
  });
}

// Function to fetch and display relationships
function fetchRelationships() {
  $.get(relationshipAPIUrl, function (relationships) {
    const relationshipTable = $("#relationship-table");
    relationshipTable.empty();
    relationshipTable.append("<tr><th>Relationship ID</th><th>User ID</th><th>Team ID</th></tr>");

    for (const relationship of relationships) {
      const row = `<tr><td>${relationship.relationship_id}</td><td>${relationship.user_id}</td><td>${relationship.team_id}</td></tr>`;
      relationshipTable.append(row);
    }
  });
}

// Fetch users, teams, and relationships on page load
$(document).ready(function () {
  fetchUsers();
  fetchTeams();
  fetchRelationships();
});
