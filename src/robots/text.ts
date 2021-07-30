import { UserInputProps } from "../../@types/UserInput";
import algorithmia from 'algorithmia'

import algorithmiaCredentials from '../../credentials/algorithmia.json'

export function textRobot(userInput: UserInputProps) {
  fetchContentFromWikipedia(userInput)
  // sanitizeContent(userInput)
  // breakContentIntoSentences(userInput)

  async function fetchContentFromWikipedia(userInput: UserInputProps) {
    const algorithmiaClient = algorithmia(algorithmiaCredentials.apiKey)
    const wikipediaAlgorithm = algorithmiaClient.algo('web/WikipediaParser/0.1.2')
    const wikipediaResponse = await wikipediaAlgorithm.pipe(userInput.searchTerm)
    const wikipediaContent = wikipediaResponse.get()

    console.log(wikipediaContent)
  }
}