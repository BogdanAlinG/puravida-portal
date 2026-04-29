# Pura Vida Huts - Coding Conventions

## Technical Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS + Vanilla CSS (for complex animations)
- **Animations:** Framer Motion + GSAP
- **State Management:** React Context (if needed) / Server Components by default
- **Components:** Radix UI for accessible primitives

## Naming Conventions
- **Components:** PascalCase (e.g., `ProductCard.tsx`)
- **Functions/Variables:** camelCase
- **Styles:** kebab-case in CSS, Tailwind classes in JSX
- **Routes:** kebab-case (e.g., `/tiny-houses/phoenix-xxl`)

## Design Tokens (Tailwind Config)
- **Colors:**
    - `brand-terracotta`: #D2691E
    - `brand-sage`: #7D8E7E
    - `brand-cream`: #F9F7F2
    - `brand-charcoal`: #2D2D2D
- **Fonts:**
    - `serif`: Playfair Display (Headers)
    - `sans`: Inter (Body)

## Folder Structure
- `src/components/ui`: Atomic components (buttons, inputs)
- `src/components/layout`: Layout-specific components (header, footer, sections)
- `src/components/features`: Feature-specific components (huts, configurator)
- `src/lib`: Utility functions and shared logic
- `src/hooks`: Custom React hooks

## Development Workflow
- Follow the "Eco-Luxury" aesthetic: Minimalist, spacious, and responsive.
- Prioritize Server Components where possible.
- Use `framer-motion` for all entry animations and transitions.
