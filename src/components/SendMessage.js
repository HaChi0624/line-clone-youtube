import React, { useState } from 'react';
import {db, auth} from '../firebase.js';
import firebase from 'firebase/compat/app'

const SendMessage = () => {
  const [messages, setMessages] = useState('');
  const sendMessage = (e) => {
    e.preventDefault();
    const {uid, photoURL} = auth.currentUser;
    db.collection('messages').add({
      text:messages,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    setMessages('');
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className='sendMsg'>
          <input 
            placeholder='メッセージを入力して下さい' 
            type='text' 
            onChange={(e) => setMessages(e.target.value)} 
            value={messages}
          />
        </div>
      </form>
    </div>
  )
}

export default SendMessage