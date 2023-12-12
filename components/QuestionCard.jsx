const React = require('react');

function QuestionCard({ question }) {
  return (
    <>
      <div>Вопрос {question.id}</div>
      <img src={question.photo} alt="pic" />
      <p>{question.description}</p>
      <form className="formAnswer" data-id={question.id}>
        <input type="text" name="answer" placeholder="Введите ответ" />
        <button type="submit">Ответить</button>
        <div className='rightAnswer' ></div>
      </form>
    </>
  );
}

module.exports = QuestionCard;
