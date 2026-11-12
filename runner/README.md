# Isolated code execution service — deployment requirements

The Next.js API route at `/api/execute` expects an authenticated runner at `RUNNER_URL/execute` using `Authorization: Bearer RUNNER_TOKEN`.

Do **not** deploy a runner that simply calls host-level subprocess execution. Before enabling this endpoint for students, implement a dedicated runner host with disposable sandboxed containers or microVMs for Python, JavaScript, Java, C, and C++.

Required controls:
- Deny outbound and inbound networking in sandboxes.
- Run as an unprivileged user, drop Linux capabilities, apply seccomp/AppArmor, never mount Docker socket.
- Set hard CPU, wall-clock, memory, process-count, file-size and output-size limits.
- Mount a read-only root filesystem and minimal ephemeral writable workdir; destroy after every run.
- Authenticate callers and rate-limit per user; do not accept arbitrary shell commands or Docker flags.
- Pin and scan compiler/runtime images; log job metadata without storing secrets.
- Add tests for infinite loops, fork bombs, filesystem access, network access and concurrent jobs.

The runner is intentionally not claimed as implemented. Production code execution remains disabled until a sandbox backend passes security tests.
