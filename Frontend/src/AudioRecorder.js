// // AudioRecorder.js
// import React, { useState, useEffect } from 'react';
// import { ReactMic } from 'react-mic';
// import download from 'downloadjs';

// const AudioRecorder = () => {
//   const [isRecording, setIsRecording] = useState(false);
//   const [audioBlob, setAudioBlob] = useState(null);

//   const onStartRecording = () => {
//     setIsRecording(true);
//   };

//   const onStopRecording = (recordedBlob) => {
//     setIsRecording(false);
//     setAudioBlob(recordedBlob.blob);
//   };

//   const onSaveAudio = () => {
//     if (audioBlob) {
//       // Change the file extension to .webm
//       const fileName = `recorded_audio_${Date.now()}.webm`;
//       download(audioBlob, fileName, 'audio/webm');
//     }
//   };

//   useEffect(() => {
//     // Additional processing or actions after recording stops
//     // This can include sending the audioBlob to the backend for prediction
//   }, [audioBlob]);

//   return (
//     <div>
//       <ReactMic
//         record={isRecording}
//         onStop={onStopRecording}
//         onStart={onStartRecording}
//         mimeType="audio/webm" // Change mimeType to match the file extension
//       />
//       <div>
//         <button onClick={onStartRecording} disabled={isRecording}>
//           Start Recording
//         </button>
//         <button onClick={onStopRecording} disabled={!isRecording}>
//           Stop Recording
//         </button>
//       </div>
//       <div>
//         <button onClick={onSaveAudio} disabled={!audioBlob}>
//           Save Audio
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AudioRecorder;








// import React, { useState, useEffect } from 'react';
// import { ReactMic } from 'react-mic';
// import download from 'downloadjs';
// import axios from 'axios';

// const AudioRecorder = () => {
//   const [isRecording, setIsRecording] = useState(false);
//   const [audioBlob, setAudioBlob] = useState(null);
//   const [predictedLabel, setPredictedLabel] = useState(null);

//   const onStartRecording = () => {
//     setIsRecording(true);
//   };

//   const onStopRecording = (recordedBlob) => {
//     setIsRecording(false);
//     setAudioBlob(recordedBlob.blob);
//   };

//   const onSaveAudioAndPredict = async () => {
//     console.log('Saving audio and predicting...');
    
//     if (audioBlob) {
//       // Save audio
//       const fileName = `recorded_audio_${Date.now()}.webm`;
//       download(audioBlob, fileName, 'audio/webm');

//       // Send audio to backend for prediction
//       try {
//         const formData = new FormData();
//         formData.append('audio', new Blob([audioBlob], { type: 'audio/webm' }));

//         const response = await axios.post('http://localhost:5000/predict', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });

//         // Update the state with the predicted label
//         setPredictedLabel(response.data.predicted_label);

//       } catch (error) {
//         console.error('Error predicting:', error);
//         // Handle prediction error
//       }
//     } else {
//       console.log('No audio to save and predict.');
//     }
//   };

//   useEffect(() => {
//     // Additional processing or actions after recording stops
//     // This can include sending the audioBlob to the backend for prediction
//   }, [audioBlob]);

//   return (
//     <div>
//       <ReactMic
//         record={isRecording}
//         onStop={onStopRecording}
//         onStart={onStartRecording}
//         mimeType="audio/webm"
//       />
//       <div>
//         <button onClick={onStartRecording} disabled={isRecording}>
//           Start Recording
//         </button>
//         <button onClick={onStopRecording} disabled={!isRecording}>
//           Stop Recording
//         </button>
//         <button onClick={onSaveAudioAndPredict} disabled={!audioBlob}>
//           Save Audio and Predict
//         </button>
//       </div>

//       {predictedLabel !== null && (
//         <div>
//           <h2>Predicted Label:</h2>
//           <p>{predictedLabel}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AudioRecorder;


















// import React, { useState, useEffect } from 'react';
// import { ReactMic } from 'react-mic';
// import download from 'downloadjs';
// import axios from 'axios';

// const AudioRecorder = () => {
//   const [isRecording, setIsRecording] = useState(false);
//   const [audioBlob, setAudioBlob] = useState(null);
//   const [predictedLabel, setPredictedLabel] = useState(null);

//   const onStartRecording = () => {
//     setIsRecording(true);
//   };

//   const onStopRecording = (recordedBlob) => {
//     setIsRecording(false);
//     setAudioBlob(recordedBlob.blob);
//   };

//   const onSaveAudioAndPredict = async () => {
//     console.log('Saving audio and predicting...');
    
//     if (audioBlob) {
//       // Save audio
//       const fileName = `recorded_audio_${Date.now()}.webm`;
//       download(audioBlob, fileName, 'audio/webm');

//       // Send audio to backend for prediction
//       try {
//         const formData = new FormData();
//         formData.append('audio', new Blob([audioBlob], { type: 'audio/webm' }));

//         const response = await axios.post('http://localhost:5000/predict', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });

//         // Update the state with the predicted label
//         setPredictedLabel(response.data.predicted_label);

//       } catch (error) {
//         console.error('Error predicting:', error);
//         // Handle prediction error
//       }
//     } else {
//       console.log('No audio to save and predict.');
//     }
//   };

//   useEffect(() => {
//     // Additional processing or actions after recording stops
//     // This can include sending the audioBlob to the backend for prediction
//   }, [audioBlob]);

//   return (
//     <div>
//       <ReactMic
//         record={isRecording}
//         onStop={onStopRecording}
//         onStart={onStartRecording}
//         mimeType="audio/webm"
//       />
//       <div>
//         <button onClick={onStartRecording} disabled={isRecording}>
//           Start Recording
//         </button>
//         <button onClick={onStopRecording} disabled={!isRecording}>
//           Stop Recording
//         </button>
//         <button onClick={onSaveAudioAndPredict} disabled={!audioBlob}>
//           Save Audio and Predict
//         </button>
//       </div>

//       {predictedLabel !== null && (
//         <div style={{ backgroundColor: 'white', padding: '10px', marginTop: '20px', borderRadius: '8px' }}>
//           <h2>Predicted Label:</h2>
//           <p>{predictedLabel}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AudioRecorder;




















// import React, { useState, useEffect } from 'react';
// import { ReactMic } from 'react-mic';
// import download from 'downloadjs';
// import axios from 'axios';

// const AudioRecorder = () => {
//   const [isRecording, setIsRecording] = useState(false);
//   const [audioBlob, setAudioBlob] = useState(null);
//   const [predictedLabel, setPredictedLabel] = useState(null);

//   const onStartRecording = () => {
//     setIsRecording(true);
//   };

//   const onStopRecording = (recordedBlob) => {
//     setIsRecording(false);
//     setAudioBlob(recordedBlob.blob);
//   };

//   const onSaveAudioAndPredict = async () => {
//     console.log('Saving audio and predicting...');
    
//     if (audioBlob) {
//       // Save audio
//       const fileName = `recorded_audio_${Date.now()}.webm`;
//       download(audioBlob, fileName, 'audio/webm');

//       // Send audio to backend for prediction
//       try {
//         const formData = new FormData();
//         formData.append('audio', new Blob([audioBlob], { type: 'audio/webm' }));

//         const response = await axios.post('http://localhost:5000/predict', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });

//         // Update the state with the predicted label
//         setPredictedLabel(response.data.predicted_label);

//       } catch (error) {
//         console.error('Error predicting:', error);
//         // Handle prediction error
//       }
//     } else {
//       console.log('No audio to save and predict.');
//     }
//   };

//   useEffect(() => {
//     // Additional processing or actions after recording stops
//     // This can include sending the audioBlob to the backend for prediction
//   }, [audioBlob]);

//   return (
//     <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
//       <ReactMic
//         record={isRecording}
//         onStop={onStopRecording}
//         onStart={onStartRecording}
//         mimeType="audio/webm"
//         style={{ width: '100%', height: '100%' }}
//       />
//       <div style={{ marginTop: '20px' }}>
//         <button onClick={onStartRecording} disabled={isRecording}>
//           Start Recording
//         </button>
//         <button onClick={onStopRecording} disabled={!isRecording}>
//           Stop Recording
//         </button>
//         <button onClick={onSaveAudioAndPredict} disabled={!audioBlob}>
//           Save Audio and Predict
//         </button>
//       </div>

//       {predictedLabel !== null && (
//         <div style={{ marginTop: '20px', backgroundColor: 'white', padding: '10px', borderRadius: '8px' }}>
//           <h2>Predicted Label:</h2>
//           <p>{predictedLabel}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AudioRecorder;














// import React, { useState, useEffect } from 'react';
// import { ReactMic } from 'react-mic';
// import download from 'downloadjs';
// import axios from 'axios';

// const AudioRecorder = () => {
//   const [isRecording, setIsRecording] = useState(false);
//   const [audioBlob, setAudioBlob] = useState(null);
//   const [predictedLabel, setPredictedLabel] = useState(null);

//   const onStartRecording = () => {
//     setIsRecording(true);
//   };

//   const onStopRecording = (recordedBlob) => {
//     setIsRecording(false);
//     setAudioBlob(recordedBlob.blob);
//   };

//   const onSaveAudioAndPredict = async () => {
//     console.log('Saving audio and predicting...');
    
//     if (audioBlob) {
//       // Save audio
//       const fileName = `recorded_audio_${Date.now()}.webm`;
//       download(audioBlob, fileName, 'audio/webm');

//       // Send audio to backend for prediction
//       try {
//         const formData = new FormData();
//         formData.append('audio', new Blob([audioBlob], { type: 'audio/webm' }));

//         const response = await axios.post('http://localhost:5000/predict', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });

//         // Update the state with the predicted label
//         setPredictedLabel(response.data.predicted_label);

//       } catch (error) {
//         console.error('Error predicting:', error);
//         // Handle prediction error
//       }
//     } else {
//       console.log('No audio to save and predict.');
//     }
//   };

//   useEffect(() => {
//     // Additional processing or actions after recording stops
//     // This can include sending the audioBlob to the backend for prediction
//   }, [audioBlob]);

//   return (
//     <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', overflow: 'hidden', margin: '0 20px' }}>
//       <ReactMic
//         record={isRecording}
//         onStop={onStopRecording}
//         onStart={onStartRecording}
//         mimeType="audio/webm"
//         style={{ width: '100%', height: '100%' }}
//       />
//       <div style={{ marginTop: '20px' }}>
//         <button onClick={onStartRecording} disabled={isRecording}>
//           Start Recording
//         </button>
//         <button onClick={onStopRecording} disabled={!isRecording}>
//           Stop Recording
//         </button>
//         <button onClick={onSaveAudioAndPredict} disabled={!audioBlob}>
//           Save Audio and Predict
//         </button>
//       </div>

//       {predictedLabel !== null && (
//         <div style={{ marginTop: '20px', backgroundColor: 'white', padding: '10px', borderRadius: '8px' }}>
//           <h2>Predicted Label:</h2>
//           <p>{predictedLabel}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AudioRecorder;


























// import React, { useState, useEffect } from 'react';
// import { ReactMic } from 'react-mic';
// import download from 'downloadjs';
// import axios from 'axios';

// const AudioRecorder = () => {
//   const [isRecording, setIsRecording] = useState(false);
//   const [audioBlob, setAudioBlob] = useState(null);
//   const [predictedLabel, setPredictedLabel] = useState(null);

//   const onStartRecording = () => {
//     setIsRecording(true);
//   };

//   const onStopRecording = (recordedBlob) => {
//     setIsRecording(false);
//     setAudioBlob(recordedBlob.blob);
//   };

//   const onSaveAudioAndPredict = async () => {
//     console.log('Saving audio and predicting...');
    
//     if (audioBlob) {
//       // Save audio
//       const fileName = `recorded_audio_${Date.now()}.webm`;
//       download(audioBlob, fileName, 'audio/webm');

//       // Send audio to backend for prediction
//       try {
//         const formData = new FormData();
//         formData.append('audio', new Blob([audioBlob], { type: 'audio/webm' }));

//         const response = await axios.post('http://localhost:5000/predict', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });

//         // Update the state with the predicted label
//         setPredictedLabel(response.data.predicted_label);

//       } catch (error) {
//         console.error('Error predicting:', error);
//         // Handle prediction error
//       }
//     } else {
//       console.log('No audio to save and predict.');
//     }
//   };

//   useEffect(() => {
//     // Additional processing or actions after recording stops
//     // This can include sending the audioBlob to the backend for prediction
//   }, [audioBlob]);



//   return (
//     <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', overflow: 'hidden', margin: '0 20px' }}>
//       <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>SPEAK IN YOUR MIC</h2>
//       <ReactMic
//         record={isRecording}
//         onStop={onStopRecording}
//         onStart={onStartRecording}
//         mimeType="audio/webm"
//         style={{ width: '100%', height: '100%' }}
//       />
//       <div style={{ marginTop: '20px' }}>
//         <button onClick={onStartRecording} disabled={isRecording}>
//           Start Recording
//         </button>
//         <button onClick={onStopRecording} disabled={!isRecording}>
//           Stop Recording
//         </button>
//         <button onClick={onSaveAudioAndPredict} disabled={!audioBlob}>
//           Save Audio and Predict
//         </button>
//       </div>

//       {predictedLabel !== null && (
//         <div style={{ marginTop: '20px', backgroundColor: 'white', padding: '10px', borderRadius: '8px' }}>
//           <h2>Predicted Label:</h2>
//           <p>{predictedLabel}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AudioRecorder;


































// import React, { useState, useEffect } from 'react';
// import { ReactMic } from 'react-mic';
// import download from 'downloadjs';
// import axios from 'axios';

// const AudioRecorder = () => {
//   const [isRecording, setIsRecording] = useState(false);
//   const [audioBlob, setAudioBlob] = useState(null);
//   const [predictedLabel, setPredictedLabel] = useState(null);

//   const onStartRecording = () => {
//     setIsRecording(true);
//   };

//   const onStopRecording = (recordedBlob) => {
//     setIsRecording(false);
//     setAudioBlob(recordedBlob.blob);
//   };

//   const onSaveAudioAndPredict = async () => {
//     console.log('Saving audio and predicting...');

//     if (audioBlob) {
//       // Save audio
//       const fileName = `recorded_audio_${Date.now()}.webm`;
//       download(audioBlob, fileName, 'audio/webm');

//       // Send audio to backend for prediction
//       try {
//         const formData = new FormData();
//         formData.append('audio', new Blob([audioBlob], { type: 'audio/webm' }));

//         const response = await axios.post('http://localhost:5000/predict', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });

//         // Update the state with the predicted label
//         setPredictedLabel(response.data.predicted_label);

//       } catch (error) {
//         console.error('Error predicting:', error);
//         // Handle prediction error
//       }
//     } else {
//       console.log('No audio to save and predict.');
//     }
//   };

//   useEffect(() => {
//     // Additional processing or actions after recording stops
//     // This can include sending the audioBlob to the backend for prediction
//   }, [audioBlob]);

//   const onFrequencyData = (frequencyData) => {
//     // Additional logic for frequency data processing
//   };

//   return (
//     <div style={{
//       backgroundColor: 'white',
//       padding: '20px',
//       borderRadius: '8px',
//       boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//       overflow: 'hidden',
//       margin: 'auto',
//       marginTop: '30px', // Adjust the top margin as needed
//       marginBottom: '30px',
//       width: '300px', // Adjust the width as needed
//       height: '400px', // Adjust the height as needed
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     }}>
//       <h2 style={{ marginBottom: '20px' }}>SPEAK IN YOUR MIC</h2>
//       <ReactMic
//         record={isRecording}
//         onStop={onStopRecording}
//         onStart={onStartRecording}
//         mimeType="audio/webm"
//         style={{ width: '100%', height: '100%' }}
//         onData={onFrequencyData}
//       />
//       <div style={{ marginTop: '20px' }}>
//         <button onClick={onStartRecording} disabled={isRecording}>
//           Start Recording
//         </button> 
//         <button onClick={onStopRecording} disabled={!isRecording}>
//           Stop Recording
//         </button>
//         <button className="button-predict" onClick={onSaveAudioAndPredict} disabled={!audioBlob}>
//           Predict
//         </button>
//       </div>


//       {predictedLabel !== null && (
//         <div style={{ marginTop: '20px', backgroundColor: 'white', padding: '10px', borderRadius: '8px' }}>
//           <h2>Predicted Label:</h2>
//           <p>{predictedLabel}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AudioRecorder;
















import React, { useState, useEffect } from 'react';
import { ReactMic } from 'react-mic';
import axios from 'axios';

const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [predictedLabel, setPredictedLabel] = useState(null);

  const onStartRecording = () => {
    setIsRecording(true);
  };

  const onStopRecording = (recordedBlob) => {
    setIsRecording(false);
    setAudioBlob(recordedBlob.blob);
  };

  const onSaveAudioAndPredict = async () => {
    console.log('Predicting...');

    if (audioBlob) {
      try {
        const formData = new FormData();
        formData.append('audio', new Blob([audioBlob], { type: 'audio/webm' }));

        const response = await axios.post('http://localhost:5000/predict', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        // Update the state with the predicted label
        setPredictedLabel(response.data.predicted_label);

      } catch (error) {
        console.error('Error predicting:', error);
        // Handle prediction error
      }
    } else {
      console.log('No audio to predict.');
    }
  };

  useEffect(() => {
    // Additional processing or actions after recording stops
    // This can include sending the audioBlob to the backend for prediction
  }, [audioBlob]);

  const onFrequencyData = (frequencyData) => {
    // Additional logic for frequency data processing
  };

  return (
    <div style={{
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      margin: 'auto',
      marginTop: '30px', // Adjust the top margin as needed
      marginBottom: '30px',
      width: '300px', // Adjust the width as needed
      height: '400px', // Adjust the height as needed
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h2 style={{ marginBottom: '20px' }}>SPEAK IN YOUR MIC</h2>
      <ReactMic
        record={isRecording}
        onStop={onStopRecording}
        onStart={onStartRecording}
        mimeType="audio/webm"
        style={{ width: '100%', height: '100%' }}
        onData={onFrequencyData}
      />
      <div style={{ marginTop: '20px' }}>
        <button onClick={onStartRecording} disabled={isRecording}>
          Start Recording
        </button> 
        <button onClick={onStopRecording} disabled={!isRecording}>
          Stop Recording
        </button>
        <button className="button-predict" onClick={onSaveAudioAndPredict} disabled={!audioBlob}>
          Predict
        </button>
      </div>

      {predictedLabel !== null && (
        <div style={{ marginTop: '20px', backgroundColor: 'white', padding: '10px', borderRadius: '8px' }}>
          <h2>Prediction:</h2>
          <p>{predictedLabel}</p>
        </div>
      )}
    </div>
  );
};

export default AudioRecorder;
