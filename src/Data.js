export default {
  'questions': {
    'a': {
      'value': 'I am a yes or no question.. right?',
      'steps': {
        'yes': {
          'suggestionId': null,
          'nextQuestionId': 'b'
        },
        'no': {
          'suggestionId': 'a',
          'nextQuestionId': 'c'
        }
      },
      'id': 'a'
    },
    'b': {
      'value': 'I am a yes or no question.. another one right?',
      'steps': {
        'yes': {
          'suggestionId': 'b',
          'nextQuestionId': 'c'
        },
        'no': {
          'suggestionId': null,
          'nextQuestionId': 'c'
        }
      },
      'id': 'b'
    },
    'c': {
      'value': 'I am a yes or no question.. some other one right?',
      'steps': {
        'yes': {
          'suggestionId': null,
          'nextQuestionId': 'a'
        },
        'no': {
          'suggestionId': null,
          'nextQuestionId': 'a'
        }
      },
      'id': 'b'
    }
  },
  'suggestions': {
    'a': 'I am a suggestion that is text',
    'b': 'I am another one'
  }
}
