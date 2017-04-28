# react-demiguise
>Demiguise pelts are highly valued as the hair may be spun into Invisibility Cloaks. ― <cite>Fantastic Beasts and Where to Find Them</cite>

React component for showing messages in a row with fade transition

## Demo & Examples
Live demo: [splact.github.io/react-demiguise](http://splact.github.io/react-demiguise/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.

## Installation
The easiest way to use react-demiguise is to install through NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-demiguise.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-demiguise --save
```

## Usage

```
import Demiguise from 'react-demiguise';

<Demiguise
  messages={[
    'Lorem ipsum',
    'Macaroni pepperoni',
    'Shazam!',
    'Nerd Jedi'
  ]}
  delay={1500}
  loop
/>
```

### Properties

* messages – Array of string to show (default `[]`)
* delay – Can be both a number representing delay among messages in millis and an array of numbers defining a different delay per message (default `3000`)
* loop – messages are played in loop if true (default `false`)

### Events

* onLoopEnd – callback executed on loop end

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

MIT
