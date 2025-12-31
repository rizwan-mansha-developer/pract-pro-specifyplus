# pract-pro-specifyplus Constitution

## Core Principles

### I. Clean Architecture (Independence & Dependency Rule)
The UI is a detail. Business logic (Zod schemas, utility functions) must be decoupled from the framework where possible. Dependencies must point inwards: Server components should orchestrate, while domain logic remains pure.

### II. S.O.L.I.D. Principles
Every component must have a Single Responsibility. If a component handles a form, a network request, and a complex UI transition, it must be decomposed into smaller, specialized units.

### III. Strict Typing & Validation (Zod)
The use of `any` is strictly prohibited. Every external input (API response, Form submission, URL params) must be parsed through a Zod schema. If a type is unknown, use `unknown` and narrow it using Zod.

### IV. Test-Driven Mindset
Quality is ensured through a multi-layered testing strategy:
- **Unit Tests**: Vitest for pure logic and Zod schema validation.
- **Component Tests**: React Testing Library for verifying Shadcn component interactions.
- **E2E**: Playwright for critical paths (Auth flows, API integrations).

### V. Component Evolution (Server vs Client)
Favor React Server Components (RSC) by default for data fetching and SEO. Use 'use client' strictly for components requiring hooks or browser APIs, keeping client boundaries as small as possible. Favor composition (children) over large prop-drilling configurations.

### VI. Feature-First Organization
Organize code by feature, not by technical role (e.g., `features/auth/components` instead of a global `components` folder). This improves discoverability and encapsulation.

### VII. Automation & MCP-First
The development workflow MUST leverage Model Context Protocol (MCP) servers to automate context gathering and task execution. This includes:
- **Figma MCP**: For real-time design reference and asset extraction.
- **Jira/GitHub MCP**: For automated ticket tracking, status updates, and PR management.
- **Swagger/OpenAPI MCP**: For automated API contract validation and client generation.
The agent should be the primary orchestrator, utilizing these servers to minimize manual context switching.

### VIII. Asset Management (SVGs as Components)
SVGs MUST be managed as React components using `@svgr/webpack`. All shared icons must reside in a centralized `icons/` directory with an `index.ts` file that exports each icon component. This ensures consistency, type safety, and ease of use across the application.

### IX. Package Management (pnpm Mandate)
`pnpm` is the ONLY permitted package manager for this project. It ensures efficient disk usage, faster installs, and strict dependency resolution. All commands must use `pnpm` (e.g., `pnpm add`, `pnpm run`).

### X. Shadcn & Next.js-First UI
The implementation MUST prioritize Shadcn UI components and Next.js built-in tags over standard HTML elements. 
- **Buttons/Inputs**: Use `<Button />` and `<Input />` from Shadcn.
- **Links**: Use `next/link`'s `<Link />`.
- **Images**: Use `next/image`'s `<Image />`.
Direct use of `<button>`, `<input>`, `<a>`, or `<img>` is prohibited if an equivalent abstraction exists. This ensures consistency, accessibility, and optimization.

### XI. Context-Aware Form Architecture
All form components (Input, Select, Checkbox, etc.) MUST be implemented as context-aware components using `useFormContext` from `react-hook-form`. 
- **Pattern**: Forms must be wrapped in `FormProvider`.
- **Consumption**: Components extract their own registration/control logic via `useFormContext`, receiving only a `name` prop and other UI-specific props.
- **Benefits**: Eliminates prop-drilling of `register` or `control` objects and ensures deep nesting compatibility.

## Technical Stack & Patterns

- **Framework**: Next.js (App Router).
- **Package Manager**: pnpm.
- **Assets**: `@svgr/webpack` for SVG-to-Component transformation.
- **Styling**: Tailwind CSS v4+ (CSS-first config, avoid @apply) and Shadcn UI (accessible primitives).
- **Data Management**: TanStack Query for client-side sync; Server Actions for all data writes (using `useTransition` or `useFormStatus`).
- **Persistence**: Cookies are the single source of truth for session/auth data. LocalStorage is forbidden to prevent hydration mismatches.
- **Form Handling**: React Hook Form with `@hookform/resolvers/zod` + FormProvider pattern.

## Development Workflow

- **Refactor Ruthlessly**: If a component exceeds 150 lines, it must be decomposed.
- **Git Protocol**: Conventional commits only (`feat:`, `fix:`, `docs:`, `refactor:`).
- **AI Agent Implementation**:
  - Always start by defining the Zod Schema for the data.
  - Use Tailwind v4 syntax (e.g., the new `@theme` block).
  - Implement forms as 'use client' but handle submission via Server Actions in a separate `actions.ts` file.
  - **MANDATORY**: Use Shadcn components and Next.js optimized tags by default.
  - **MANDATORY**: Use `FormProvider` and `useFormContext` for all form implementations.

## Governance
This constitution supersedes all other practices. Amendments require documentation of reasoning and a version bump. All PRs and reviews must verify compliance with these principles.

**Version**: 1.4.0 | **Ratified**: 2025-12-31 | **Last Amended**: 2025-12-31
