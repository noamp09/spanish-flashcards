function addToLocalStorageJSON(word, englishTranslation) {
    // Check if localStorage is supported
    if (typeof localStorage === 'undefined') {
      console.error('Local Storage is not supported by this browser.');
      return;
    }
  
    // Get the existing JSON data (or create an empty array if it doesn't exist)
    let jsonData;
    try {
      jsonData = JSON.parse(localStorage.getItem('spanishWords')) || [];
    } catch (error) {
      console.error('Error parsing existing JSON data:', error);
      jsonData = [];
    }
  
    // Check if the word already exists in the data
    const existingWord = jsonData.find(item => item.spanish === word);
    if (existingWord) {
      console.warn(`Word '${word}' already exists in the JSON data.`);
      return;
    }
  
    // Create a new word object
    const newWord = { spanish: word, english: englishTranslation };
  
    // Add the new word object to the data array
    jsonData.push(newWord);
  
    // Stringify the updated data and store it in localStorage
    try {
      localStorage.setItem('spanishWords', JSON.stringify(jsonData));
      console.log(`Word '${word}' added to localStorage successfully.`);
    } catch (error) {
      console.error('Error saving data to localStorage:', error);
    }
  }

  export default addToLocalStorageJSON