# Zid × Foodics Integration

A Node.js and TypeScript backend integration designed to synchronize data between **Zid E-commerce** and **Foodics POS**, with a webhook-first architecture.

## Overview

Zid × Foodics Integration aims to connect an online store with a point-of-sale system to keep business data synchronized and reduce manual operations.

The integration focuses on real-time event handling through Webhooks, with API communication used for synchronization and retrieving additional information when needed.

## Core Objectives

- Synchronize products between Zid and Foodics.
- Synchronize customer orders.
- Keep inventory and stock levels consistent.
- Receive and process Webhook events.
- Support external shipping provider integration.
- Handle failed events and prevent duplicate processing.

## Architecture

The system follows a modular, event-driven backend architecture.

**Webhook-First Workflow:**

1. Receive events from Zid, Foodics, or shipping providers.
2. Validate incoming Webhook requests.
3. Persist incoming events.
4. Prevent duplicate event processing (Idempotency).
5. Process events asynchronously.
6. Execute synchronization operations.
7. Track processing status and errors.

## Technology Stack

- Node.js
- TypeScript
- Express.js
- MongoDB
- Redis
- REST APIs
- Webhooks

## Project Structure

```text
src/
├── config/
│   ├── db.ts
│   ├── redis.ts
│   └── env.ts
│
├── modules/
│   ├── orders/
│   ├── products/
│   ├── inventory/
│   ├── webhooks/
│   └── integrations/
│
├── handlers/
│   ├── zid/
│   └── foodics/
│
├── middlewares/
├── routes/
├── services/
├── utils/
└── app.ts
```

## API Endpoints

### Health Check

```http
GET /health
```

### Orders

```http
GET  /api/v1/orders
POST /api/v1/orders
```

### Webhooks

| Method | Endpoint | Provider |
|---|---|---|
| POST | `/api/v1/webhooks/zid` | Zid |
| POST | `/api/v1/webhooks/foodics` | Foodics |
| POST | `/api/v1/webhooks/shipping` | Shipping |

## Installation

Clone the repository:

```bash
git clone https://github.com/fahdkhodair/zid.git
```

Navigate to the project:

```bash
cd zid
```

Install dependencies:

```bash
npm install
```

Configure environment variables using a `.env` file.

Example:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
REDIS_URL=redis://127.0.0.1:6379
```

Start the development server:

```bash
npm run dev
```

## Testing

API endpoints and Webhook receivers can be tested using Postman.

Example:

```http
POST http://localhost:3000/api/v1/webhooks/zid
```

## Key Engineering Principles

- Webhook-Driven Architecture
- Modular Design
- Separation of Concerns
- Asynchronous Event Processing
- Idempotent Event Handling
- Error Handling and Logging
- Scalable Integration Architecture

## Repository

GitHub: https://github.com/fahdkhodair/zid

## Project Goal

To build a reliable integration layer between Zid and Foodics that automates order management, product synchronization, inventory updates, and shipping workflows.
