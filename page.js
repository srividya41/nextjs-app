"use client"
import { someFunction } from './ai-agent.js';
import { useState } from 'react'
 
export default function Form() {
  const [selectedInput, setSelectedInput] = useState('');
  const [file, setFile] = useState(null);
 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Selected Input: ${selectedInput}`);
    console.log(`File: ${file}`);
  };
 
  return (
    <div className="flex flex-col items-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://i.pinimg.com/originals/ab/79/f3/ab79f3a8cdbd6afb23b979c673751d36.jpg')"}}>
      <h2 className="text-center mt-4 mb-4 text-white text-7xl font-bold">Code Documentation</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <label htmlFor="input" className="text-white text-3xl font-bold">Select:</label>
        <select
          id="input"
          name="input"
          value={selectedInput}
          onChange={(event) => setSelectedInput(event.target.value)}
          className="mb-4"
        >
          <option value="">--Please choose an option--</option>
          <option value="input1">Local File</option>
          <option value="input2">Github</option>
        </select>
        {selectedInput === 'input1' && (
          <div>
            <label htmlFor="file" className="text-white">Upload File:</label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={(event) => setFile(event.target.files[0])}
              className="mb-4"
            />
          </div>
        )}
        {selectedInput === 'input2' && (
          <div>
            <label htmlFor="repository" className="text-white">Repository:</label>
            <input
              type="text"
              id="repository"
              name="repository"
              className="mb-4"
            />
          </div>
        )}
       
        <button type="submit" className="bg-white text-blue-700 px-4 py-2 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">Submit</button>
        <button></button>    .   <button></button>
 
        <button><a href="path/to/file" className="bg-white text-blue-700 px-4 py-2 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out" download>Download File</a></button>
      </form>
    </div>
  );
}