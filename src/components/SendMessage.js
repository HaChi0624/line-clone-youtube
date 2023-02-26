import React, { useState } from 'react';
import {db, auth} from '../firebase.js';
import firebase from 'firebase/compat/app'

const SendMessage = () => {
  const [message, setMessage] = useState('');
  const sendMessage = (e) => {
    e.preventDefault();
    const {uid, photoURL} = auth.currentUser;
    db.collection('message').add({
      text:message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    setMessage('');
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className='sendMsg'>
          <input 
            placeholder='メッセージを入力して下さい' 
            type='text' 
            onChange={(e) => setMessage(e.target.value)} 
            value={message}
          />
        </div>
      </form>
    </div>
  )
}

export default SendMessage