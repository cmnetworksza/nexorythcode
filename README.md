# NEXORYTH CODE

**Learn. Code. Innovate.**

A professional online programming academy and coding platform.

## Architecture
- Next.js / TypeScript / Tailwind CSS frontend
- Supabase Authentication and PostgreSQL with row-level security
- Monaco coding editor
- Separate isolated code execution service (not yet implemented)

## Current implementation status
- Supabase initial schema deployed: profiles, courses, lessons, enrollments, lesson_progress, projects, assignments, submissions.
- Frontend, runner, grading service and deployment are not yet implemented.

## Security principles
- Never expose Supabase secret/service-role keys to browsers.
- Execute untrusted code only in a separate sandbox with strict CPU, memory, time, process, filesystem and network limits.
- Instructor role assignment requires privileged administration, not self-service.

## Next steps
1. Scaffold Next.js application with pinned dependencies.
2. Implement authentication, dashboards and course workflows.
3. Add Monaco editor and saved projects.
4. Implement isolated multi-language execution and automated tests.
5. Deploy after security and integration testing.
