import { useState } from 'react';

function App() {
  const [message, setMessage] = useState('Bienvenue à NetEra DigiNest!');

  return (
    <div className="bg-secondary text-white min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-primary">
        {message}
      </h1>
      <button
        className="mt-4 px-4 py-2 bg-primary text-white rounded"
        onClick={() => setMessage('Merci de visiter NetEra DigiNest!')}
      >
        Change Message
      </button>
    </div>
  );
}

export default App;
