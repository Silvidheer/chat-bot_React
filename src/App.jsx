import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [chatMessages, setChatMessages] = React.useState([
    {message: "hello chatbot", sender: "user"},
    {message: "Hello! how can I help you?", sender: "robot"},
    {message: "I want to know about your services", sender: "user"},
    {message: "We provide web development services", sender: "robot"}
  ]);
  return (
    <div className="app-container">
      
      <ChatMessages chatMessages={
        chatMessages
      }/>
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App
