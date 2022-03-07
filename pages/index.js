function HomePage() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1 style={{ fontFamily: 'fantasy', color: '#4b9be1' }}>
        {"firestarlettii's website"}
      </h1>
      <h2
        style={{
          fontFamily: 'cursive',
          color: 'rgb(243, 103, 123)',
          marginBottom: '10rem'
        }}
      >
        what do you think you should do? click the buttons below!
      </h2>
      <button
        style={{
          fontFamily: 'monospace',
          padding: '1rem',
          fontSize: '2rem',
          background: 'blue',
          color: 'white'
        }}
        onClick={() => alert('Hi friends~~!!')}
      >
        Welcome
      </button>
      <button
        style={{
          fontFamily: 'monospace',
          padding: '1rem',
          fontSize: '2rem',
          background: 'orange',
          color: 'white',
          marginTop: '2rem'
        }}
        onClick={() => {
          let name = prompt("lets be friends!");
          if (name) {
            alert('Nice to meet you, ' + name + '!');
          } else {
            alert('Nice to meet you handsome');
          }
        }}
      >
        {"Hi I am Firestar!"}
      </button>
    </div>
  );
}

export default HomePage;
