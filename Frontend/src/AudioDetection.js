// Sarthak@2024



import React, { useState } from 'react';
import axios from 'axios';
import './AudioDetection.css';

const AudioDetection = () => {
  const [audioFile, setAudioFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [predictionError, setPredictionError] = useState(null);

  const handleFileChange = (e) => {
    setAudioFile(e.target.files[0]);
  };

  const handlePredict = async () => {
    try {
      if (!audioFile) {
        setPredictionError('Please select an audio file.');
        return;
      }

      const formData = new FormData();
      formData.append('audio', audioFile);

      const response = await axios.post('http://localhost:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setPrediction(response.data.predicted_label);
      setPredictionError(null); // Reset prediction error

    } catch (error) {
      console.error('Error predicting:', error);
      setPredictionError('Error predicting: ' + error.message);
    }
  };

  return (
    <div className="audio-detection-container">
      <h1>Select a audio from local directory</h1>
      <div className="file-upload-container">
        <label htmlFor="file-upload" className="file-upload-label">
          Choose File
          <input type="file" accept="audio/*" id="file-upload" onChange={handleFileChange} />
        </label>
        {audioFile && <p className="chosen-file">Chosen File: <em>{audioFile.name}</em></p>}
      </div>
      <button className="button-predict" onClick={handlePredict}>Predict</button>

      {prediction !== null && (
        <div className="prediction-container">
          <h2>Prediction:</h2>
          <p>{prediction}</p>
        </div>
      )}

      {predictionError && (
        <div className="error-container">
          <h2>Error:</h2>
          <p>{predictionError}</p>
        </div>
      )}
    </div>
  );
};

export default AudioDetection;
 








