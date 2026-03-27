#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const prompts = require('prompts');

async function init() {
  console.log('\n🎨 Style Prompt Skill Initializer\n');

  const response = await prompts({
    type: 'select',
    name: 'ide',
    message: 'Which AI IDE or tool are you using for this project?',
    choices: [
      { title: 'Cursor', value: 'cursor' },
      { title: 'Windsurf', value: 'windsurf' },
      { title: 'Claude Code', value: 'claude' },
      { title: 'Standard (Other Agents/Manual)', value: 'standard' }
    ],
  });

  if (!response.ide) {
    console.log('Installation cancelled.');
    return;
  }

  const projectRoot = process.cwd();
  const packageDir = path.join(__dirname, '..');
  
  // Destination for the full skill library (for reference)
  const skillDest = path.join(projectRoot, '.agents/skills/style-prompt');

  // 1. Sync the core skill files to the local project
  try {
    await fs.ensureDir(skillDest);
    
    // Copy references and SKILL.md
    await fs.copy(path.join(packageDir, 'references'), path.join(skillDest, 'references'));
    await fs.copy(path.join(packageDir, 'SKILL.md'), path.join(skillDest, 'SKILL.md'));
    
    console.log('✅ Style specifications synced to .agents/skills/style-prompt/');
  } catch (err) {
    console.error('❌ Error syncing skill files:', err.message);
    return;
  }

  // 2. IDE-Specific "Bridge" Initialization
  switch (response.ide) {
    case 'cursor':
      const cursorRulePath = path.join(projectRoot, '.cursor/rules/prompt-skill.mdc');
      await fs.ensureDir(path.dirname(cursorRulePath));
      await fs.writeFile(cursorRulePath, `---
description: Universal UI Style Library (S01-S30) for React/Tailwind CSS generation. Extracts design DNA, rules, and tokens.
globs: **/*.{tsx,ts,css,json}
---
# Style Prompt Skill Bridge

This project utilizes the **Style Prompt Skill** for high-fidelity UI generation.
To implement a specific style, browse the local reference library and follow the instructions in the main skill file:

- **Main Entry**: [.agents/skills/style-prompt/SKILL.md](./.agents/skills/style-prompt/SKILL.md)
- **Reference Table**: See "Reference Library" in SKILL.md for S01-S30 direct links.`);
      console.log('✅ Cursor rule created: .cursor/rules/prompt-skill.mdc');
      break;

    case 'windsurf':
      const windsurfPath = path.join(projectRoot, '.windsurf/rules/style-prompt.md');
      await fs.ensureDir(path.dirname(windsurfPath));
      // Link or copy the SKILL.md to the windsurf rules folder
      await fs.copy(path.join(skillDest, 'SKILL.md'), windsurfPath);
      console.log('✅ Windsurf rule created: .windsurf/rules/style-prompt.md');
      break;

    case 'claude':
      const claudePath = path.join(projectRoot, '.claude/skills/style-prompt/SKILL.md');
      await fs.ensureDir(path.dirname(claudePath));
      // Copy the entire skill to the .claude folder
      await fs.copy(skillDest, path.dirname(claudePath));
      console.log('✅ Claude Code skill registered: .claude/skills/style-prompt/');
      break;

    case 'standard':
      console.log('✅ Standard installation complete. Follow instructions in .agents/skills/style-prompt/SKILL.md');
      break;
  }

  console.log('\n🚀 Setup complete! Your AI agent now has access to 30 design styles.');
  console.log('Tip: Try asking "Generate a login page using S01 Tech Minimal style".\n');
}

init().catch(console.error);
