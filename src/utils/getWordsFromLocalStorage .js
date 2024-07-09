const getRandomWordFromLocalStorage = () => {
    // Retrieve the words from localStorage
    const words = JSON.parse(localStorage.getItem('spanishWords')) || [];
  
    // Return a random word
    if (words.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };


export default getRandomWordFromLocalStorage