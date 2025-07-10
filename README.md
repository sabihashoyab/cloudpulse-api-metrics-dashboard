# CloudPulse – API Health & Uptime Monitoring (Full Stack DevOps)

A full-stack, cloud-native monitoring system that tracks the health and performance of public APIs in real time. A Python-based agent logs API latency, status codes, and errors into Supabase (PostgreSQL), while a Node.js backend serves data to a live Svelte + Plotly.js dashboard. Deployed with Docker, provisioned via Ansible, and automated with GitHub Actions.

---

## Key Features

- Monitors 3–5 public APIs every 60 seconds (e.g., OpenWeather, IPinfo)
- Captures:
  - Status codes
  - Latency (ms)
  - API availability (uptime %)
- Logs structured metrics to Supabase (PostgreSQL)
- REST API backend (Node.js) exposes data for frontend access
- Frontend dashboard (Svelte + Plotly.js) displays live charts
- Deployed via Docker containers
- CI/CD pipeline using GitHub Actions
- Infrastructure setup automated with Ansible

---

## Getting Started

### Requirements

- Python 3.8+
- Node.js 18+
- Docker + Docker Compose
- Supabase account (PostgreSQL backend)
- (Optional) Fly.io or Render for cloud deployment

### Tech Stack
- Python – Requests, Scheduler (monitoring agent)
- Supabase – PostgreSQL + REST API (data storage)
- Node.js – Express backend (API server)
- Svelte + Plotly.js – Dashboard UI with real-time data visualization
- Docker & Docker Compose – Containerization and orchestration
- Ansible – Infrastructure-as-code provisioning
- GitHub Actions – Continuous Integration & Deployment (CI/CD)
