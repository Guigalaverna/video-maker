import * as readline from 'readline-sync'

export function userInputRobot() {
  let searchTerm: string
  let prefix: string
  
  searchTerm = askAndReturnSearchTerm();
  prefix = askAndReturnPrefix();

  
  function askAndReturnSearchTerm() {
    return readline.question('Type a Wikipedia term: ')
  }
  
  function askAndReturnPrefix() {
    const prefixes = ['Who is', 'What is', 'The history of']
    
    const selectedPrefix = readline.keyInSelect(prefixes, 'Choose one option: ')
    
    return prefixes[selectedPrefix]
  }

  const userInput = {
    searchTerm,
    prefix
  }
  
  return userInput
}