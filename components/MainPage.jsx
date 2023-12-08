const React = require('react');
const Layout = require('./Layout');

function MainPage() {
  return (
    <Layout>
      <div className='mainPage'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          
        }}
      >
        <h1
          style={{
            margin: '0 auto',
            fontFamily: 'Gill Sans',
            marginTop: '40px'
          }}
        >
          Для продолжения необходима смешная шутка из зала 
        </h1>
        
        <img
          style={{ width: '600px', height: '750px', margin: '0 auto', borderRadius: '10px', marginTop: '15px' }}
          src='/img/mainPhoto.jpeg'
          alt='we_are'
        />
        <div
          style={{
            margin: '0 auto',
            fontFamily: 'Gill Sans',
            fontSize: '25px',
            marginTop: '20px',
          }}
        >
          Надпись, которая вас точно заинтерусует
        </div>
      </div>
    </Layout>
  );
}

module.exports = MainPage;