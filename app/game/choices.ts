export type Choice = {
  text: string;
  trust: number;
  response: string;
};


export const chapter1Choices: Choice[] = [

  {
    text: "I want to protect this place.",
    trust: 10,
    response:
      "Elfaria looks surprised. Few people have ever said that."
  },


  {
    text: "I want to know the secrets of the Willow.",
    trust: -5,
    response:
      "Elfaria's expression becomes colder. She has heard those words before."
  },


  {
    text: "I don't know why I'm here...",
    trust: 5,
    response:
      "Elfaria smiles softly. 'Then perhaps the Willow chose you for a reason.'"
  }

];