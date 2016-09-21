export default {
  'questions': {
    'a': {
      'value': 'I am yes or no question 1.. right?',
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
      'value': 'I am yes or no question 2.. another one right?',
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
      'value': 'I am yes or no question 3.. some other one right?',
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
    'b': 'I am another suggestion'
  }
}
