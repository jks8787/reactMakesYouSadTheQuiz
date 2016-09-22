export default {
  'questions': {
    'a': {
      'value': 'Are you learning React by copying from the boilerplate projects?',
      'steps': {
        'yes': {
          'suggestionId': 'a',
          'nextQuestionId': 'b'
        },
        'no': {
          'suggestionId': 'b',
          'nextQuestionId': 'b'
        }
      },
      'id': 'a'
    },
    'b': {
      'value': 'Are you using a Flux library (or Redux)?',
      'steps': {
        'yes': {
          'suggestionId': null,
          'nextQuestionId': 'c'
        },
        'no': {
          'suggestionId': null,
          'nextQuestionId': 'd'
        }
      },
      'id': 'b'
    },
    'c': {
      'value': 'Does it add a lot of boilerplate for no obvious gain?',
      'steps': {
        'yes': {
          'suggestionId': 'c',
          'nextQuestionId': 'e'
        },
        'no': {
          'suggestionId': null,
          'nextQuestionId': 'e'
        }
      },
      'id': 'c'
    },
    'd': {
      'value': 'Do you have a few bloated stateful components at the top of your component hierarchy that are often the source of bugs?',
      'steps': {
        'yes': {
          'suggestionId': 'd',
          'nextQuestionId': 'e'
        },
        'no': {
          'suggestionId': null,
          'nextQuestionId': 'e'
        }
      },
      'id': 'd'
    },
    'e': {
      'value': 'Are you using a JavaScript bundler (e.g. Webpack, Browserify)?',
      'steps': {
        'yes': {
          'suggestionId': null,
          'nextQuestionId': 'f'
        },
        'no': {
          'suggestionId': null,
          'nextQuestionId': 'g'
        }
      },
      'id': 'e'
    },
    'f': {
      'value': 'Are you working on a production app?',
      'steps': {
        'yes': {
          'suggestionId': 'e',
          'nextQuestionId': 'g'
        },
        'no': {
          'suggestionId': 'f',
          'nextQuestionId': 'g'
        }
      },
      'id': 'f'
    },
    'g': {
      'value': 'Do you feel comfortable using ES2015 features (e.g. classes and fat arrows)?',
      'steps': {
        'yes': {
          'suggestionId': null,
          'nextQuestionId': 'h'
        },
        'no': {
          'suggestionId': 'g',
          'nextQuestionId': 'j'
        }
      },
      'id': 'g'
    },
    'h': {
      'value': 'Are you using experimental language features that didn’t make it into ES2015 (e.g. decorators)?',
      'steps': {
        'yes': {
          'suggestionId': null,
          'nextQuestionId': 'i'
        },
        'no': {
          'suggestionId': 'h',
          'nextQuestionId': 'j'
        }
      },
      'id': 'h'
    },
    'i': {
      'value': 'Can you spend days on fixing your tooling every few weeks due to bugs, incompatibilities, and standard changes?',
      'steps': {
        'yes': {
          'suggestionId': null,
          'nextQuestionId': 'j'
        },
        'no': {
          'suggestionId': null,
          'nextQuestionId': 'j'
        }
      },
      'id': 'i'
    },
    'j': {
      'value': 'Do you update to new major versions of your dependencies as they come out?',
      'steps': {
        'yes': {
          'suggestionId': 'i',
          'nextQuestionId': 'k'
        },
        'no': {
          'suggestionId': 'j',
          'nextQuestionId': 'k'
        }
      },
      'id': 'j'
    },
    'k': {
      'value': 'Are you still sad?',
      'steps': {
        'yes': {
          'suggestionId': 'k',
          'nextQuestionId': 'l'
        },
        'no': {
          'suggestionId': null,
          'nextQuestionId': 'l'
        }
      },
      'id': 'k'
    },
    'l': {
      'value': 'React makes you happy! Or, at least, it doesn’t make you that sad anymore',
      'steps': {
        'yes': {
          'suggestionId': 'l',
          'nextQuestionId': null,
        },
        'no': {
          'suggestionId': 'l',
          'nextQuestionId': null
        }
      },
      'id': 'l'
    }
  },
  'suggestions': {
    'a': 'React makes you sad. Are you learning React by copying from the boilerplate projects? -Learning React by copying boilerplates is like learning to cook by eating food in fancy restaurants. It doesn’t work. You need to start with basics and ignore the fear of missing out. It’s unfounded. People create boilerplates to show off what they built or learned, not to help you learn. They are created by and for power users, and are often way more experimental than they care to admit. Boilerplates compete for attention which leads to more bloat. If you’re in it for React, learn it in the order Pete Hunt described in his guide: https://github.com/petehunt/react-howto. Look at boilerplates no sooner than you can create your own',
    'b': 'While boilerplates are not a good way to learn the technologies they combine, they are useful to see how these technologies can be tied together *after* you’re comfortable with each of them independently. It’s a great way to discover new technologies but you shouldn’t feel obligated to use them at all. Don’t give up on boilerplates completely. Just keep in mind that a boilerplate is a bag of tricks, not a solid base for your app',
    'c': 'Remove the Flux library. Get a good feel for structuring apps in vanilla React by reading “Thinking in React” in the official docs',
    'd': 'Consider adding a Flux library. It can help externalize the state shared between many components and update it consistently',
    'e': 'Add a bundler as a build step to keep dependencies manageable and serve the JavaScript code efficiently. Use Google Page Speed insights tool to gauge how well you are doing. Remember to minify and envify your code',
    'f': 'There is no need for a bundler if you are just learning React. Copy https://github.com/jarsbe/react-simple and start hacking with no build step. Use <script> tags until you are comfortable with React and want to learn more about module systems and different bundlers',
    'g': 'Don’t use ES2015 yet. You don’t need it to learn React. Third-party libraries will often use ES2015 syntax in their documentation but you don’t need third-party libraries when you are just learning React itself. When you feel like updating your JavaScript knowledge, https://leanpub.com/understandinges6/read is an amazing guide. Use http://babeljs.io/repl to verify your assumptions',
    'h': 'Stick to using at most ES2015, JSX, and object spread operator',
    'i': 'Unless we are talking about React which is tested heavily before every release, consider slowing down rate of package updates. You can try new versions of the dependencies but it’s best to keep them in a branch for a couple of months until the community finds and fixes the most common issues. Don’t make decisions based on the fear of missing out! When looking for older docs, don’t forget to check tagged releases on GitHub, e.g. https://github.com/reactjs/react-router/tree/0.13.x/doc',
    'j': 'This is a good call. However we encourage you to try (in a branch!) new versions of React as soon as they come out. Unlike many community packages, they are tested heavily by Facebook. Keep an eye on the release notes as they link to the codemods that automate parts of the migration process for you',
    'k': 'Write a constructive blog post about the problems you encountered. Refrain from personal attacks. Be polite. Help the community figure out the solutions. Consider another stack that better suites your needs (e.g. Ember)',
    'l': 'Share the quiz: https://github.com/jks8787/reactMakesYouSadTheQuiz, Share the flowchart: http://bit.ly/react-makes-you-sad. inspired by https://github.com/petehunt/react-howto'
  }
}
