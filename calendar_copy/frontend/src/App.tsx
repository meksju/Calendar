import React from 'react';
import './App.css';
import EventCalendar from './components/Calendar';
import EventProvider from "./context";

function App() {
  return (
    <EventProvider>
      <EventCalendar/>
    </EventProvider>
  );
}

export default App;
