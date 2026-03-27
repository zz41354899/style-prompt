# Style Prompt Skill (S01-S30)

A portable "Agents Skill" providing 30 unique, production-ready UI design styles for React and Tailwind CSS.

## Features
- **30 Design Styles**: From "Tech Minimal" to "Aurora Borealis".
- **Multi-IDE Support**: One command to set up for **Cursor**, **Windsurf**, or **Claude Code**.
- **Agentic Design**: Structured for progressive disclosure and low context overhead.

## Quick Start

### 1. Run via npx (No installation required)
Go to your project root and run:
```bash
npx style-prompt-skill init
```

### 2. Manual Installation
If you prefer to keep it in your `package.json`:
```bash
npm install -D style-prompt-skill
# then
npx style-prompt init
```

## How it Works
When you run `init`, the CLI:
1.  Copies the style specification library to your project's `.agents/skills/` directory.
2.  Creates the tool-specific configuration file (e.g., `.cursor/rules/*.mdc`) so your AI assistant knows about the library immediately.

## Supported Tools
- **Cursor AI**: Automatically generates `.cursor/rules/prompt-skill.mdc`.
- **Windsurf IDE**: Automatically generates `.windsurf/rules/style-prompt.md`.
- **Claude Code**: Automatically sets up the `.claude/skills/` structure.

## Structure
- `SKILL.md`: The main entry point for AI agents.
- `references/`: 30 individual markdown files containing Design DNA, tokens, and prompts.

---
Created for seamless AI-assisted design work.
