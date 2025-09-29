# NeetCode Solutions

This repository contains solutions to various coding problems from NeetCode, implemented in TypeScript with Jest testing.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure TypeScript (if not already done):
```bash
npx tsc --init
```

## Running Tests

There are several ways to run the tests:

### Run all tests once:
```bash
npm test
```

### Run tests in watch mode (tests re-run on file changes):
```bash
npm run test:watch
```

### Run specific tests:
```bash
npm test -- arrays_and_hashmaps/duplicates
```

### Run tests with coverage report:
```bash
npm test -- --coverage
```

## Project Structure

```
neetcode/
├── arrays_and_hashmaps/
│   └── duplicates/
│       ├── dups.ts        # Solution implementation
│       └── dups.test.ts   # Test cases
├── package.json
├── jest.config.js
└── tsconfig.json
```

## Adding New Solutions

1. Create a new directory for the problem category if it doesn't exist
2. Add your solution file (*.ts)
3. Add corresponding test file (*.test.ts)
4. Run tests to verify your solution

## Requirements

- Node.js (v16 or higher recommended)
- npm (comes with Node.js)


# How to run examples
- tsc src/solutions/arrays_and_hashmaps/anagram/anagram.ts
- npm test
- node src/solutions/arrays_and_hashmaps/anagram/anagram.js