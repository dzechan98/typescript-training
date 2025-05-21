# TypeScript Project

This project contains various TypeScript examples organized by chapters.

## Prerequisites

- [Node.js](https://nodejs.org/) (v12 or newer)
- npm (comes with Node.js)

## Installation

Clone the repository and install dependencies:

```bash
# Install dependencies
npm install
```

## Project Structure

The project contains several TypeScript files organized by chapters:

- `chapter1.ts`: Basic types and type inference
- `chapter2.ts`: Interfaces, type aliases, and enums
- `chapter3.ts`: Product inventory management example
- `chapter5.ts`: Optional properties and type checking
- Additional chapters (6 and 7) for future content

## Running the Examples

You can run any TypeScript file using ts-node:

```bash
npx ts-node src/chapter1.ts
npx ts-node src/chapter2.ts
npx ts-node src/chapter3.ts
```

## Building the Project

Compile TypeScript to JavaScript:

```bash
npx tsc
```

This will create compiled JavaScript files in the `dist` directory as specified in the [tsconfig.json](d:\Workspace\typescript\tsconfig.json).

## Development

For development with automatic recompilation:

```bash
npx tsc --watch
```
