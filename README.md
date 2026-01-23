# CA Hub Pro

A comprehensive practice management solution for Chartered Accountants built with React and Firebase.

## Features

- **Dashboard** - Overview of tasks, staff workload, and key metrics
- **Task Management** - Create, assign, and track tasks with status updates
- **Client Management** - Manage client information and history
- **Staff Management** - Role-based access control (Superadmin, Reporting Manager, Seniors, Articles)
- **Invoicing** - Generate invoices and track payments
- **Reports** - Comprehensive reporting and analytics
- **Templates** - Reusable templates for common tasks
- **Approval Workflows** - Multi-level approval system for task changes
- **Recurring Tasks** - Schedule and manage recurring tasks

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Firebase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ca-hub-pro.git
cd ca-hub-pro
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open http://localhost:3000 in your browser

### Firebase Setup

The app uses Firebase for authentication and database. The Firebase config is already included in the code. If you want to use your own Firebase project:

1. Create a new Firebase project at https://console.firebase.google.com
2. Enable Authentication (Email/Password)
3. Create a Firestore database
4. Update the firebaseConfig in `src/App.jsx`

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy

The app will automatically build and deploy.

## Project Structure

```
ca-hub-pro/
├── src/
│   ├── App.jsx        # Main application component
│   ├── main.jsx       # React entry point
│   └── index.css      # Global styles
├── index.html         # HTML template
├── package.json       # Dependencies
├── vite.config.js     # Vite configuration
└── README.md          # This file
```

## User Roles

1. **Superadmin** - Full access to all features
2. **Reporting Manager** - Manage assigned staff and tasks
3. **Seniors** - Handle assigned tasks
4. **Articles** - Basic task access

## License

MIT License

## Support

For support, please open an issue on GitHub.
