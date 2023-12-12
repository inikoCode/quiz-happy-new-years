const React = require('react');
const Layout = require('./Layout');
const QuestionCard = require('./QuestionCard');

function ThemeItem({ question }) {
  return (
    <Layout>
      <QuestionCard question={question} />

      <a href={`/themes/${question.theme_id}/question/${question.id+1}`}>Далее</a>
    </Layout>
  );
}

module.exports = ThemeItem;
