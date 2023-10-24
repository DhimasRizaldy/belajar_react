import React from 'react';
import ReactDom from 'react-dom';
import './css/style.css';

function Header() {
  return (
    <h1 className='text-5xl font-bold text-blue-600'>Hello WPU</h1>
  );
}

function Button() {
  return (
    <button className='bg-green-500 p-3 text-white inline-block m-3 rounded shadow hover:bg-green-700'>Ini Button</button>
  );
}

function Paragraf() {
  return (
    <p className='m-3 bg-yellow-200'>Magna dolore excepteur pariatur deserunt dolore quis excepteur minim eiusmod esse tempor qui qui aliquip.Magna dolore excepteur pariatur deserunt dolore quis excepteur minim eiusmod esse tempor qui qui aliquip.Magna dolore excepteur pariatur deserunt dolore quis excepteur minim eiusmod esse tempor qui qui aliquip.Magna dolore excepteur pariatur deserunt dolore quis excepteur minim eiusmod esse tempor qui qui aliquip.</p>
  )
}

function App() {
  return (
    <div className='p-4'>
      <Header />
      <Button />
      <Paragraf />
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('root'));