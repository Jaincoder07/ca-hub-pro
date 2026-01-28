# CA Hub Pro - Practice Management System

A comprehensive practice management application for Chartered Accountants with **Firebase cloud database**.

## 🔥 Firebase Powered Features

- ✅ **Real Authentication** - Secure email/password login via Firebase Auth
- ✅ **Cloud Database** - Data stored in Firestore, accessible from any device
- ✅ **Shared Data** - All team members see the same data in real-time
- ✅ **No Data Loss** - Your data persists even if you clear browser cache

## 🚀 Quick Deploy to Vercel

### Step 1: Upload to GitHub
1. Log in to your GitHub repository (Jaincoder07/ca-hub-pro)
2. Delete all existing files or create a new branch
3. Upload ALL files from this folder
4. Commit changes

### Step 2: Vercel Auto-Deploys
Vercel will automatically detect the changes and redeploy your app within 1-2 minutes.

---

## 📱 How to Login

### First Time Setup (Create Account)
1. Go to your app URL
2. Click "Don't have an account? Create one"
3. Enter your email and password (min 6 characters)
4. Click "Create Account"
5. You're now logged in as Superadmin!

### Existing Users
1. Enter your email and password
2. Click "Sign In"

---

## 👥 Adding Team Members

After logging in as Superadmin:
1. Go to **Staff** in the sidebar
2. Click **"+ Add Staff"**
3. Fill in details (name, email, role)
4. The new team member can create their account with the same email

**Note:** The email in Staff module should match the Firebase Auth email.

---

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📁 Project Structure

```
ca-hub-pro/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── README.md
└── src/
    ├── main.jsx
    └── App.jsx         # Main app with Firebase integration
```

---

## ✨ Features

- 📊 Role-based Dashboards
- 📋 Task Management
- 💰 Invoicing & Billing with GST
- 📄 Receipt Management  
- 👥 Client Management
- 👤 Staff Management
- 📈 Reports & Analytics
- 🔄 Recurring Tasks
- ✅ Approval Workflows
- 🔔 Notifications

---

## 🔒 Firebase Security

Your Firebase project is configured with:
- **Authentication**: Email/Password sign-in
- **Firestore**: Cloud database for all app data

**Important**: For production, update Firestore security rules to restrict access.

---

## 🆘 Troubleshooting

**"Firebase: Error (auth/invalid-credential)"**
- Check email and password are correct
- Try creating a new account

**Data not syncing?**
- Check internet connection
- Refresh the page
- Check browser console for errors

**Changes not appearing after deploy?**
- Wait 1-2 minutes for Vercel to rebuild
- Hard refresh (Ctrl+Shift+R)

---

Enjoy your cloud-powered CA Hub Pro! 🎉
