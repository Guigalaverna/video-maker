import * as robots from './robots'

(() => {
  let userInput
  // Initialize robots
  userInput = robots.userInputRobot()
  robots.textRobot(userInput)
})()