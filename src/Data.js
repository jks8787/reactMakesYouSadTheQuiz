export default {
  'questions': {
    'a': {
      'value': 'I am a yes or no question.. right?',
      'steps': [
        'yes': {
          'suggestion': null,
          'nextQuestion': 'questions.b'
        },
        'no': {
          'suggestion': 'suggestions.a',
          'nextQuestion': 'questions.b'
        }
      ]
    }
  },
  'suggestions': {
    'a': 'I am a suggestion that is text',
    'b': 'I am another one'
  }
}
