# Design System Guidelines

## General Guidelines

- Only use absolute positioning when necessary. Opt for responsive and well structured layouts that use flexbox and grid by default
- Refactor code as you go to keep code clean
- Keep file sizes small and put helper functions and components in their own files

## Design System Rules

### Components
- Use Radix UI primitives (shadcn/ui) as base
- Additional MUI components available but prefer Radix-based for consistency

### Button Variants
- **Primary**: Filled with brand color, bold - Used for main action in a section or page
- **Secondary**: Outlined with primary color, transparent background - Used for alternative or supporting actions
- **Tertiary**: Text-only with no border - Used for least important actions

### Rules
- Base font-size: 14px
- Date format: "MMM dd" (e.g., "Jun 10")
- Bottom toolbar: max 4 items
- Chips: sets of 3 or more
- Dropdowns: only when more than 2 options