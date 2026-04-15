let users = {};

async function loadUsers() {
  const res = await fetch('users.json');
  users = await res.json();
  document.getElementById('output').innerText =
    JSON.stringify(users, null, 2);
}

function addUser() {
  const code = document.getElementById('code').value;
  const playlist = document.getElementById('playlist').value;

  users[code] = {
    name: "New Device",
    playlist: playlist
  };

  document.getElementById('output').innerText =
    JSON.stringify(users, null, 2);
}

loadUsers();
