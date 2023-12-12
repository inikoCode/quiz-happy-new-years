const addAnswer = document.querySelector('.formAnswer');
if (addAnswer) {
  addAnswer.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { answer } = event.target;
    const { id } = event.target.dataset;
    const data = await fetch('/themes/:themeId/question/:qestionId', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        answer: answer.value,
        id,
      }),
    });
    // console.log(data);
    const res = await data.json();

    if (res.message === 'success') {
      document
        .querySelector('.rightAnswer')
        .insertAdjacentText('beforeend', 'ты мой хороший!!!!');
    } else {
      document
        .querySelector('.rightAnswer')
        .insertAdjacentText('beforeend', 'Влад сказал, что ты дурында!!!!');
    }
  });
}
