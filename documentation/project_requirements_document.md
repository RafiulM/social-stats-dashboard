# Project Requirements Document: social-stats-dashboard

## 1. Project Overview

The Social Stats Dashboard is a web application designed to help individuals and small businesses monitor their social media performance in one unified place. By connecting multiple social profiles (e.g., Twitter, Facebook, Instagram, LinkedIn), users can see real-time follower counts, engagement metrics, and post analytics on a single dashboard. This solves the core problem of hopping between different platforms to track growth, making data-driven decisions easier and faster.

The main goals are: 
- Give users a clear, consolidated view of key social KPIs (followers, likes, shares, comments).
- Enable quick trend analysis with charts and date filters.
- Provide a lightweight, responsive interface that loads data quickly. 

Success is measured by: 
- Users connecting at least one social account within the first minute of signup.
- Dashboard load time under 2 seconds for up to 5 connected accounts.
- 80% monthly active user retention in a pilot group.

## 2. In-Scope vs. Out-of-Scope

### In-Scope (Version 1)
- User authentication (email/password + OAuth for social networks).
- Connecting and disconnecting social media accounts (Twitter, Facebook, Instagram, LinkedIn).
- Dashboard showing: total followers, engagement rate, top posts, follower growth chart.
- Date filtering (last 7 days, 30 days, custom range).
- Basic export: download a PDF snapshot of the dashboard.
- Responsive design (desktop and tablet).
- Secure storage of OAuth tokens and user credentials.

### Out-of-Scope (Later Phases)
- AI-driven content recommendations or post scheduling.
- Team collaboration or multi-user workspaces.
- Custom branding or white-labeling for enterprises.
- In-depth sentiment analysis or natural language processing.
- Mobile app or native iOS/Android builds.

## 3. User Flow

A new user visits the landing page and signs up with their email and a secure password or uses Google OAuth. After verifying their email, they’re guided to “Connect Accounts” where they pick which social networks to authorize. Each OAuth flow redirects them back to the app and securely stores their tokens in the database.

Once accounts are connected, the user lands on the main Dashboard screen. Here they see a top bar with date filters (7 days, 30 days, custom). Below, there’s a row of summary cards (total followers, engagement rate, new posts). The middle section shows a line chart for follower growth and a bar chart for top 5 posts. A sidebar allows them to switch between Accounts view, Exports, and Settings.

## 4. Core Features

- **Authentication Module**: Email/password + OAuth 2.0 flows for Twitter, Facebook, Instagram, LinkedIn.
- **Account Management**: Link/unlink social profiles; show connection status.
- **Dashboard**: 
  - Summary cards (followers, engagement rate, new followers).
  - Line chart for follower growth over time.
  - Bar chart for top-performing posts.
  - Date range picker with presets (7d, 30d) and custom.
- **Data Fetching & Sync**: Scheduled jobs to pull metrics every hour; on-demand refresh button.
- **Export Feature**: Generate and download a PDF snapshot of current dashboard.
- **Responsive UI**: Layout adapts to desktop and tablet breakpoints.
- **Settings Page**: Update profile, manage connected accounts, change password.

## 5. Tech Stack & Tools

- **Frontend**: Next.js (React), Tailwind CSS for rapid styling, Chart.js for graphs.
- **Backend**: Node.js with Express.js, Sequelize ORM, PostgreSQL database.
- **Authentication**: OAuth 2.0 (passport.js strategies), JWT for session management.
- **Scheduled Tasks**: node-cron or Bull queue for hourly data sync.
- **PDF Generation**: Puppeteer or PDFKit.
- **Hosting**: Vercel for frontend, Heroku or AWS Elastic Beanstalk for backend.
- **Dev Tools**: VS Code, ESLint, Prettier, GitHub Actions for CI/CD.
- **APIs**: Official social media REST APIs via OAuth tokens.
- **AI Models**: None in v1 (no machine learning features needed).

## 6. Non-Functional Requirements

- **Performance**: Dashboard initial load ≤ 2 seconds with 5 accounts.
- **Scalability**: Backend should handle 1,000 users and 5,000 API calls/hour.
- **Security**: Encrypt OAuth tokens at rest; HTTPS for all requests; secure JWT handling.
- **Compliance**: GDPR cookie consent; privacy policy outlining data usage.
- **Usability**: WCAG AA accessibility; intuitive date picker; clear error messages.
- **Reliability**: 99.5% uptime SLA; retry logic for failed API calls.

## 7. Constraints & Assumptions

- We assume the social APIs allow reading metrics without extra enterprise permission.
- API rate limits must be respected (Twitter: 900 requests/15 min window, etc.).
- Users will have existing social accounts with required permission scopes.
- OAuth credentials (client IDs/secrets) are pre-provisioned and stored securely.
- System clock accuracy is maintained on servers for cron jobs.

## 8. Known Issues & Potential Pitfalls

- **API Rate Limits**: Hitting limits if many users sync simultaneously.  
  - Mitigation: Stagger sync jobs; implement exponential backoff.
- **Data Gaps**: Some networks return incomplete metrics during outages.  
  - Mitigation: Cache last-known values and show a warning if data is stale.
- **OAuth Token Expiry**: Tokens may expire or be revoked without notice.  
  - Mitigation: Detect 401 errors, prompt re-authentication in Settings.
- **Cross-Browser PDF Rendering**: Inconsistent styling in generated PDFs.  
  - Mitigation: Use Puppeteer headless Chrome for consistent results.

---

This document outlines everything an AI model needs to generate detailed technical specs and subsequent guidelines without ambiguity. It covers the project’s purpose, what’s in and out of scope, core workflows, tech choices, and key constraints. Use this as the single source of truth for all next-phase documentation.