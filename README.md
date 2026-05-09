# MERN Student Management System

## Deployment Setup for Render.com

### Backend Environment Variables
Set these in your Render backend service:

```
MONGO_URL=your_mongodb_connection_string
PORT=5001
FRONTEND_URL=https://your-frontend-app.onrender.com
```

### Frontend Environment Variables
Set this in your Render frontend service:

```
VITE_API_URL=https://your-backend-app.onrender.com
```

### Configuration Files Fixed
- ✅ **tailwind.config.mjs**: Renamed from `.cjs` and updated to use ES module syntax
- ✅ **postcss.config.cjs**: Kept as CommonJS for PostCSS compatibility
- ✅ **API client**: Updated to use axios with environment variables
- ✅ **CORS**: Configured for production domains

### Steps to Deploy:

1. **Backend Deployment:**
   - Create a new Web Service on Render
   - Connect your GitHub repository
   - Set the build command: `npm install`
   - Set the start command: `npm run start`
   - Add environment variables as listed above

2. **Frontend Deployment:**
   - Create a new Static Site on Render
   - Connect your GitHub repository
   - Set the build command: `npm run build`
   - Set the publish directory: `dist`
   - Add the VITE_API_URL environment variable

3. **Update URLs:**
   - Replace `your-frontend-app.onrender.com` with your actual frontend URL
   - Replace `your-backend-app.onrender.com` with your actual backend URL

### Local Development:
- Backend runs on `http://localhost:5001`
- Frontend runs on `http://localhost:5173` (Vite dev server)
- Make sure MongoDB is connected and running

### Troubleshooting:
- If you get CORS errors, check that FRONTEND_URL is set correctly in backend
- If API calls fail, verify VITE_API_URL points to your backend URL
- Check Render logs for any connection or environment variable issues
- Build warnings should now be resolved with the updated config files