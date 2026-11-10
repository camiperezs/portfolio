---
name: web-design-guidelines
description: Review UI code for Web Interface Guidelines compliance. Use when asked to "review my UI", "check accessibility", "audit design", "review UX", or "check my site against best practices".
metadata:
  author: vercel
  version: "1.0.0"
  argument-hint: <file-or-pattern>
  local-snapshot: "references/guidelines.md descargado de vercel-labs/web-interface-guidelines (main) el 2026-11-10"
---

# Web Interface Guidelines

Review files for compliance with Web Interface Guidelines.

## How It Works

1. Read the guidelines from `references/guidelines.md` (local snapshot)
2. Read the specified files (or prompt user for files/pattern)
3. Check against all rules in the guidelines
4. Output findings in the terse `file:line` format

## Guidelines Source

The rules live in `references/guidelines.md`, a reviewed local snapshot of
https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md

Do not fetch the remote URL at runtime. To update the rules, the user can ask
explicitly to re-download and review the snapshot.

## Usage

When a user provides a file or pattern argument:
1. Read `references/guidelines.md`
2. Read the specified files
3. Apply all rules from the guidelines
4. Output findings using the format specified in the guidelines

If no files specified, ask the user which files to review.
