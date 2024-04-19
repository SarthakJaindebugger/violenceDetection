// Sarthak@2024

// to the application:

// export FLASK_APP=app.py
// export FLASK_ENV=development
// // flask run


// import React from 'react';
// import AudioDetection from './AudioDetection';

// const App = () => {
//   return (
//     <div>
//       <AudioDetection />
//     </div>
//   );
// };

// export default App;




// // App.js
// import React, { useState } from 'react';
// import AudioDetection from './AudioDetection';
// import AudioRecorder from './AudioRecorder';

// const App = () => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   return (
//     <div>
//       <h1>Audio Violence Detection App</h1>
//       <div>
//         <label>
//           <input
//             type="radio"
//             name="audioOption"
//             value="selectFile"
//             onChange={() => setSelectedOption('selectFile')}
//           />
//           Select Audio File
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="audioOption"
//             value="recordAudio"
//             onChange={() => setSelectedOption('recordAudio')}
//           />
//           Record Audio
//         </label>
//       </div>
//       {selectedOption === 'selectFile' ? (
//         <AudioDetection />
//       ) : selectedOption === 'recordAudio' ? (
//         <AudioRecorder />
//       ) : null}
//     </div>
//   );
// };

// export default App;












// // App.js
// import React, { useState } from 'react';
// import AudioDetection from './AudioDetection';
// import AudioRecorder from './AudioRecorder';
// import './AudioDetection.css'; // Import the CSS file for styling


// const App = () => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   return (
//     <div>
//       <h1>Audio Violence Detection App</h1>
//       <div className="button-container">
//         <button
//           className={selectedOption === 'selectFile' ? 'active' : ''}
//           onClick={() => setSelectedOption('selectFile')}
//         >
//           Select Audio File
//         </button>

        
//         <button
//           className={selectedOption === 'recordAudio' ? 'active' : ''}
//           onClick={() => setSelectedOption('recordAudio')}
//         >
//           Record Audio
//         </button>
//       </div>
//       {selectedOption === 'selectFile' && (
//         <div className="audio-card">
//           <AudioDetection />
//         </div>
//       )}
//       {selectedOption === 'recordAudio' ? (
//         <AudioRecorder />
//       ) : null}
//     </div>
//   );
// };

// export default App;







// // App.js
// import React, { useState } from 'react';
// import AudioDetection from './AudioDetection';
// import AudioRecorder from './AudioRecorder';
// import './AudioDetection.css'; // Import the CSS file for styling

// const App = () => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//   };

//   return (
//     <div>
//       <h1>Audio Violence Detection App</h1>
//       <div className="button-container">
//         <button
//           className={selectedOption === 'selectFile' ? 'active' : ''}
//           onClick={() => handleOptionClick('selectFile')}
//         >
//           Existing Audio
//         </button>
//         <span className="or-divider">or</span>
//         <button
//           className={selectedOption === 'recordAudio' ? 'active' : ''}
//           onClick={() => handleOptionClick('recordAudio')}
//         >
//           Record New Audio
//         </button>
//       </div>
//       {selectedOption === 'selectFile' && (
//         <div className="audio-card">
//           <AudioDetection />
//         </div>
//       )}
//       {selectedOption === 'recordAudio' && (
//         <div className="audio-card">
//           <AudioRecorder />
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;




























// App.js
import React, { useState } from 'react';
import AudioDetection from './AudioDetection';
import AudioRecorder from './AudioRecorder';
import './AudioDetection.css'; // Import the CSS file for styling
import micImage from './mic-image.png'; // Import the image

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <h1>Audio Violence Detection</h1>
      <div className="button-container">
        <button
          className={selectedOption === 'selectFile' ? 'active' : ''}
          onClick={() => handleOptionClick('selectFile')}
        >
          <strong> Upload audio </strong>
        </button>
        <span className="or-divider">or</span>
        <button
          className={selectedOption === 'recordAudio' ? 'active' : ''}
          onClick={() => handleOptionClick('recordAudio')}
        >
          <img
            src={micImage}  // Use the imported image
            alt="Record New Audio"
            style={{ width: '50px', height: '55px' }}
          />
        </button>
      </div>
      {selectedOption === 'selectFile' && (
        <div className="audio-card">
          <AudioDetection />
        </div>
      )}
      {selectedOption === 'recordAudio' && (
        <div className="audio-card">
          <AudioRecorder />
        </div>
      )}
    </div>
  );
};

export default App;
