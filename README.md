# Full Stack Open - Part 1 Exercises

This repository contains exercises from Part 1 of the Full Stack Open course, organized into three separate folders demonstrating React fundamentals.

you can see each exercise solved in the commits

## Project Structure

```
part1/
├── courseinfo/         # Course Information Application
├── unicafe/            # Unicafe Feedback Application
├── anecdotes/          # Anecdotes Application
└── README.md           # This file
```

---

## 📁 [courseinfo/](courseinfo/) - Course Information Application

**Path:** `./courseinfo/`

A React application that displays course information using component composition and props.

### Features

- Displays course name, parts, and exercise counts
- Component-based architecture with Header, Content, Part, and Total components
- Button click history tracker

### Key Files

- [src/App.jsx](courseinfo/src/App.jsx) - Main application with state management
- [src/components/Header.jsx](courseinfo/src/components/Header.jsx) - Header component
- [src/components/Content.jsx](courseinfo/src/components/Content.jsx) - Content component
- [src/components/Part.jsx](courseinfo/src/components/Part.jsx) - Part component
- [src/components/Total.jsx](courseinfo/src/components/Total.jsx) - Total component

### Running the Application

```bash
cd courseinfo
npm install
npm run dev
```

---

## 📁 [unicafe/](unicafe/) - Unicafe Feedback Application

**Path:** `./unicafe/`

A customer feedback application that collects and displays statistics for a café.

### Features

- Collect feedback (good, neutral, bad)
- Calculate and display statistics (average, positive percentage)
- Conditional rendering of statistics
- Reusable Button component

### Key Files

- [src/App.jsx](unicafe/src/App.jsx) - Main application with feedback state
- [src/Statistics.jsx](unicafe/src/Statistics.jsx) - Statistics display component
- [src/Button.jsx](unicafe/src/Button.jsx) - Reusable button component

### Running the Application

```bash
cd unicafe
npm install
npm run dev
```

---

## 📁 [anecdotes/](anecdotes/) - Anecdotes Application

**Path:** `./anecdotes/`

An application that displays random programming anecdotes and allows voting for favorites.

### Features

- Display random programming anecdotes
- Vote for anecdotes
- Show the most voted anecdote
- Array state management

### Key Files

- [src/App.jsx](anecdotes/src/App.jsx) - Main application with voting logic

### Running the Application

```bash
cd anecdotes
npm install
npm run dev
```

---

## Technology Stack

All projects use the same technology stack:

- **React** 19.2.0
- **Vite** 7.2.4 - Build tool and dev server
- **ESLint** 9.39.1 - Code linting

## Development Dependencies

- @vitejs/plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- TypeScript type definitions for React

## Common Scripts

Each project includes the following npm scripts:

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Getting Started

1. Clone the repository
2. Navigate to the desired exercise folder
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`

## Course Information

These exercises are part of the [Full Stack Open](https://fullstackopen.com/) course by the University of Helsinki.

## License

MIT
