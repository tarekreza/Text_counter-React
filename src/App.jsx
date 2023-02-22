import { Button } from "flowbite-react";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [word, setWord] = useState(0);

  const handleOnChange = (e) => {
    const changedText = e.target.value;
    setText(changedText);
    
    setWord(countWords(changedText))
  };
  const handleOnUppercase = () => {
    let uppercase = text.toUpperCase();
    setText(uppercase);
  };
  const handleOnLowercase = () => {
    let uppercase = text.toLowerCase();
    setText(uppercase);
  };
  function countWords(sentence) {
    // Remove any leading or trailing spaces from the sentence
    sentence = sentence.trim();
  
    // If the sentence is empty, return 0
    if (sentence === '') {
      return 0;
    }
  
    // Use a regular expression to split the sentence into an array of words
    const words = sentence.split(/\s+/);
  
    // Return the length of the array, which is the total number of words
    return words.length;
  }

  return (
    <>
      {/* <div className="bg-[#111827] h-screen"> */}
      <div className="bg-[url('background.svg')] h-screen">
        <div className="w-4/5 mx-auto">
          <h1 className="pt-16 text-white lg:text-lg font-serif">Enter your text</h1>
          <textarea
            value={text}
            onChange={handleOnChange}
            id="message"
            rows="6"
            className="my-2 mx-auto w-full block p-2.5  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your text to analyze..."
          />
          <p className="text-white">Total character : {text.length}</p>
          <p className="text-white">Total word : {word}</p>
          <div className="lg:flex lg:justify-center lg:space-x-4  mt-3 ">
            <div>
              <Button className = "mx-auto " color="dark" onClick={handleOnUppercase}>
                Convert to UPPERCASE
              </Button>
            </div>
            <div className = "m-0">
              <Button className = "mx-auto my-3 lg:m-0" color="dark" onClick={handleOnLowercase}>
                Convert to lowercase
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
