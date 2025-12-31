# Tasks: Complete Authentication Module

**Input**: Design documents from `/specs/002-complete-auth-module/`
**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, contracts/

## Format: `[ID] [P?] [Story] Description with file path`

- **[P]**: Parallelizable (different files, no dependencies)
- **[Story]**: US1 (Signup), US2 (Verify), US3 (Recovery), US4 (Provisioning), FIX (Maintenance)

---

## Phase 1: Setup & Foundational Fixes

- [X] T001 [FIX] Reorder tabs in `src/app/(auth)/login/LoginForm.tsx` (Email first, Phone second)
- [X] T002 [P] Implement `src/core/entities/auth-token.schema.ts` (AuthToken Zod Schema)
- [X] T003 [P] Implement `src/core/entities/user-profile.schema.ts` (UserProfile Zod Schema)
- [X] T004 Define `AuthRepository` interface in `src/core/repositories/auth.repo.ts` supporting new flows
- [X] T005 Update `AuthRepositoryImpl` in `infrastructure/repositories/auth.repo.impl.ts` with mock/API logic
- [X] T028 [FIX] Refactor `src/app/(auth)/AuthLayout.tsx` to use Next.js `<Image />` and `<Link />`
- [X] T029 [FIX] Refactor `src/app/(auth)/login/LoginForm.tsx` to use Shadcn `<Button />` and `<Input />`

---

## Phase 2: User Story 1 - User Signup & Finish Signup (Priority: P1)

**Goal**: Full registration flow from credentials to mandatory profile setup.

### Implementation for User Story 1

- [X] T006 [P] [US1] Create `SignupForm` using Shadcn in `src/app/(auth)/signup/SignupForm.tsx`
- [X] T007 [US1] Implement `signupAction` in `src/app/(auth)/signup/actions.ts` (FR-001)
- [X] T008 [US1] Create `src/app/(auth)/signup/page.tsx` using `AuthLayout`
- [X] T009 [P] [US1] Create `FinishSignupForm` using Shadcn in `src/app/(auth)/finish-signup/FinishSignupForm.tsx`
- [X] T010 [US1] Implement `finishSignupAction` in `src/app/(auth)/finish-signup/actions.ts` (FR-005)
- [X] T011 [US1] Create `src/app/(auth)/finish-signup/page.tsx` with multi-step progress UI

---

## Phase 3: User Story 2 - Account Verification (Priority: P1)

**Goal**: 6-digit code activation flow.

### Implementation for User Story 2

- [X] T012 [P] [US2] Create `VerifyForm` using Shadcn in `src/app/(auth)/verify/VerifyForm.tsx`
- [X] T013 [US2] Implement `verifyAction` in `src/app/(auth)/verify/actions.ts` (FR-002)
- [X] T014 [US2] Create `src/app/(auth)/verify/page.tsx` with 6-digit input and resend logic

---

## Phase 4: User Story 3 - Forgot & Reset Password (Priority: P2)

**Goal**: Password recovery flow via secure tokens.

### Implementation for User Story 3

- [X] T015 [P] [US3] Create `ForgotPasswordForm` using Shadcn in `src/app/(auth)/forgot-password/ForgotPasswordForm.tsx`
- [X] T016 [US3] Implement `forgotPasswordAction` in `src/app/(auth)/forgot-password/actions.ts` (FR-003)
- [X] T017 [US3] Create `src/app/(auth)/forgot-password/page.tsx`
- [X] T018 [P] [US3] Create `ResetPasswordForm` using Shadcn in `src/app/(auth)/reset-password/ResetPasswordForm.tsx`
- [X] T019 [US3] Implement `resetPasswordAction` in `src/app/(auth)/reset-password/actions.ts` (FR-004)
- [X] T020 [US3] Create `src/app/(auth)/reset-password/page.tsx` with token validation logic

---

## Phase 5: User Story 4 - Create Password (Priority: P2)

**Goal**: Provisioning for invited users.

### Implementation for User Story 4

- [X] T021 [P] [US4] Create `CreatePasswordForm` using Shadcn in `src/app/(auth)/create-password/CreatePasswordForm.tsx`
- [X] T022 [US4] Implement `createPasswordAction` in `src/app/(auth)/create-password/actions.ts` (FR-006)
- [X] T023 [US4] Create `src/app/(auth)/create-password/page.tsx`

---

## Phase 6: Polish & Security Audit

- [X] T024 [P] Ensure all auth actions utilize HttpOnly cookies for session management (FR-008)
- [X] T025 [P] Audit Lighthouse Accessibility (95+) for all new auth pages (SC-003)
- [X] T026 Implement audit logging for all successful and failed auth mutations (SC-002)
- [X] T027 Finalize Playwright E2E tests for the full Signup -> Verify -> Onboard journey

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)** must be complete before any user story work.
- **US1 (Signup)** is a prerequisite for **US2 (Verify)**.
- **US2 (Verify)** is a prerequisite for **Onboarding (Finish Signup)**.
- **Polish (Phase 6)** follows all implementations.

### Parallel Opportunities

- T002, T003 can run in parallel.
- Frontend form components (T006, T009, T012, T015, T018, T021) can be scaffolded in parallel.

---

## Implementation Strategy

### MVP Scope (Signup & Verify)
1. Complete Phase 1.
2. Implement T006-T008 (Signup) and T012-T014 (Verify).
3. Validate session establishment via HttpOnly cookies.

### Incremental Delivery
1. Add Password Recovery (Phase 4).
2. Add Onboarding profile setup (Phase 2).
3. Final Audit and QA.
