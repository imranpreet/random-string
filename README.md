# Random String Generator

A React application that generates random strings with customizable options.

## Features

- Generate random strings with custom length (4-50 characters)
- Include/exclude:
  - Lowercase letters (a-z)
  - Uppercase letters (A-Z)
  - Numbers (0-9)
  - Special characters (!@#$%^&*()_+-=[]{}|;:,.<>?)
- Copy generated strings to clipboard
- Beautiful and responsive UI

## React Hooks Used

This project demonstrates the use of essential React hooks:

- **useState**: Managing component state (random string, length, options)
- **useCallback**: Memoizing the generateRandomString function for performance
- **useEffect**: Generating an initial random string when the component mounts

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open in your browser at `http://localhost:3000`

## Usage

1. Adjust the length slider to set the desired string length
2. Select which character types to include using the checkboxes
3. Click "Generate Random String" to create a new random string
4. Click the "Copy" button to copy the generated string to your clipboard

## Technologies Used

- React 18
- React Hooks (useState, useCallback, useEffect)
- CSS3 with animations and gradients

## License

MIT
