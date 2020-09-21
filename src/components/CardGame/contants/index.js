export const LETTERS_OPTIONS = ['A', 'B', 'C', 'D'];

export const QUESTIONS = {
  flag: {
    getQuestion: () => 'Which country does this flag belong to?'
  },

  name: {
    getQuestion: ({ capital }) => `${capital} is the capital of`
  },

  capital: {
    getQuestion: ({ name }) => `The capital of ${name}`
  }
};

