# 🧹 Clean Code — Notes & Practice

My personal code notes, refactoring challenges, and examples from completing the **Clean Code** course on [Scrimba](https://scrimba.com/).

## 🎯 Topics & Challenges Covered

### 1. Clean Functions & Conditionals (`Functions/`)
- **Function Design & Naming:** Writing concise, intention-revealing functions and standardizing naming conventions (`Functions_Introduction.js`, `Clean Functions_Naming_Standardization.js`, `Naming_and_Standardization_Challenge.js`).
- **Encapsulating Conditionals:** Extracting complex boolean logic into descriptive helper functions for cleaner control flow (`Encapsulating_Conditionals.js`, `Encapsulating_Conditionals_Challenge.js`).

### 2. Clean Comments (`Comments/`)
- **Writing Meaningful Comments:** Understanding when comments add real value versus when code should explain itself (`Clean_Comments_Introduction.js`, `good_Comment.js`, `Good Comments (Challenge.js`).
- **Eliminating Noise:** Removing redundant visual markers and relying on Git history instead of commented-out code (`Avoid_Visual_Markers.js`, `Avoid_Visual_Markers_Challenge.js`, `Avoiding_Comments_with_Git.js`).

### 3. Variables, Formatting & Linting
- **Eliminating Magic Numbers:** Replacing unexplained hardcoded numbers with descriptive named constants (`MagicNumbers.js`, `MagicNumbers2.js`).
- **Spacing & Returns:** Structuring vertical whitespace and clean return statements for better readability (`SpacingandReturns.js`).
- **Code Linting:** Configured with ESLint (`eslint.config.mjs`) to enforce consistent code quality.

## 📂 Repository Structure

```text
CleanCode/
├── Comments/           # Examples, challenges, and screenshots on writing clean comments
├── Functions/          # Function naming, standardization, and conditional encapsulation
├── docs/               # Reference screenshots
├── eslint.config.mjs   # ESLint configuration
├── MagicNumbers.js     # Refactoring magic numbers (Part 1)
├── MagicNumbers2.js    # Refactoring magic numbers (Part 2)
├── SpacingandReturns.js# Clean vertical spacing and return patterns
└── readme.md           # Project overview and notes