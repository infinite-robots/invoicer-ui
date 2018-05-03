# Invoicer UI

The UI for the Infinite Robots Invoicer project.


<div id="contents" />

# Contents

- [1.0 Tech Stack](#1.0)
- [2.0 System Design](#2.0)
  - [2.1 Styling Guidelines](#2.1)
- [3.0 Github Project Info](#3.0)
  - [3.1 Branching Strategy](#3.1)
  - [3.2 Install & Run](#3.2)
- [4.0 Github Kanban Board](#4.0)
  - [4.1 Github Kanban Board Process](#4.1)

---

<div id="1.0" />

# 1.0 Tech Stack

**Front-end:**


**Assets:**


**Hosting:**



[<-- Back to Contents](#contents)

---

<div id="2.0" />

# 2.0 System Design

<div id="2.1" />

## 2.1 Styling Guidelines

[<-- Back to Contents](#contents)

---

<div id="3.0" />

# 3.0 Github Project Info

<div id="3.1" />

## 3.1 Branching Strategy

### Branches

`master`: The main branch that features, bug fixes and documentation updates
will be merged into.

### Creating a branch

Branches should be named by their type, following they're ticket number,
and a few words describing that ticket.

Example: `feature/UI-92-example-branch-name`

### Branch Types

- `feature`: Code that contains new features or functionality to project code base.
- `task`: Changes to already existing components or functionality.
- `fix`: Fixes a broken feature or piece of functionality.

### Committing Code

Commits should be named with their Github ticket number, as well as a short
description of what was achieved in this commit.

If a ticket is small enough of a task (like editing some docs/fixing typos etc)
one can commit straight to dev instead of opening a pull request.

e.g. `UI-94: Example git commit`

If the commit is small enough that it isn't worth a Github Card and Pull Request
(fixing a README typo, removing old info/files), label it a PATCH and commit 
directly to dev.

e.g. `PATCH: Removing incorrect README info`

### Merging Code

To merge your branch, open a pull request on Github and change the title of the
pull request to match that of the Github ticket, with square brackets around the
ticket number, and regular brackets around the type of card (feature/task/fix).

e.g. `[UI-92] (Feature) Example Pull Request Name`

When code has been reviewed (if necessary) select the option 'Squash and Merge'

[<-- Back to Contents](#contents)

---

# 4.0 Github Kanban Board

Link to UNDRGRND Github Kanban Board: https://trello.com/b/Eawz2533

<div id="4.1" />

## 4.1 Github Kanban Board Process

In our Github Kanban Board we currently have 5 columns: Backlog Refinement, ToDo, In
Progress, PR/QA, Done, Cancelled.

**Backlog Refinement**: New cards are created here. When creating a new card, you must label it with the
project initials, the card number, and a short description of what the card is
for.

e.g. UG-18: Update README with Github Kanban Process

A full description must be added to the card as well as a label before it can be
moved to the ToDo column for a team member to pick up and complete.

**ToDo**: Card is ready to be picked up but has not yet been.

**In Progress**: Branch has been opened (if required) and a member is working on that ticket.

**PR/QA**: Requires a peer code review, and is currently in a  pull request from feature
branch to dev. (Not always a necessary step)

**Done**: Card has been completed and merged into `dev` branch.

**Cancelled**: Card has been cancelled and is no longer a ToDo. A comment must
be left on the card detailing reasons for its cancellation.


[<-- Back to Contents](#contents)

---
