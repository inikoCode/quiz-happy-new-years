const addUserForm = document.querySelector('.formAddUser');
if (addUserForm) {
  addUserForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { name, email, password } = event.target;
    const data = await fetch('/registration', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
      }),
    });
    const res = await data.json();
    if (res.message === 'success') {
      window.location.assign('/themes');
    }

    // console.log(res);
  });
}
console.log(addUserForm);
