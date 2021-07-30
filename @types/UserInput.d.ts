export interface UserInputProps {
  searchTerm: string
  prefix: string
  sourceContent: string
  sanitizedContent: string,
  sentences: [
    {
      text: string
      keywords: Array<string>
      images: Array<string>
    }
  ]
}