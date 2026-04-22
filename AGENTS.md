# Project Guidelines

## Tech Stack
- React 18 + Vite
- MUI v7 (@mui/material)
- Radix UI primitives (shadcn/ui)
- Tailwind CSS v4
- React Router v7

## Design System

### Components
Use Radix UI primitives (shadcn/ui) as base. Additional MUI components available but prefer Radix-based for consistency.

### Button Variants
- **Primary**: Filled with brand color, bold
- **Secondary**: Outlined, transparent background
- **Tertiary**: Text-only, no border

### Layout
- Use flexbox and grid by default
- Avoid absolute positioning unless necessary
- Responsive layouts preferred

### Rules
- Base font-size: 14px
- Date format: "MMM dd" (e.g., "Jun 10")
- Bottom toolbar: max 4 items
- Chips: sets of 3 or more
- Dropdowns: only when more than 2 options

### Code Style
- Keep files small, extract helpers to own files
- Refactor as you go
- Use tailwind-merge (twMerge) for class conflicts
- Use clsx for conditional classes