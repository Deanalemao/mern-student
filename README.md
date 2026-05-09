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
No frontend `.env` is required for deployment.
The frontend uses relative API calls to `/api`, and the backend serves the built static assets.

### Configuration Files Fixed
- ✅ **tailwind.config.mjs**: Renamed and updated to use ES module syntax
- ✅ **postcss.config.cjs**: Kept as CommonJS for PostCSS compatibility
- ✅ **API client**: Uses relative `/api` paths by default
- ✅ **CORS**: Configured for local dev and production frontend origins

### Steps to Deploy as a Single Render Service:

1. **Deploy one Web Service on Render** using this repository root.
2. Set the build command:
   - `npm install && npm run build`
3. Set the start command:
   - `npm run start`
4. Use only the backend `.env` file under `backend/.env`.

### Backend `.env` Requirements
Set these in Render:

```
MONGO_URL=your_mongodb_connection_string
PORT=5001
FRONTEND_URL=https://your-render-frontend-url.onrender.com
```

### Update URLs:
- Replace `your-render-frontend-url.onrender.com` with your actual Render deployment URL.

### Local Development:
- Backend runs on `http://localhost:5001`
- Frontend dev runs on `http://localhost:5173`
- Vite proxies `/api` to `http://localhost:5001`, so no frontend env variable is needed

### Troubleshooting:
- If you get CORS errors, verify `FRONTEND_URL` in backend config
- If API calls fail, confirm the backend is running and the repo root is deployed correctly
- Verify Render logs if deployment fails

### Local Development:
- Backend runs on `http://localhost:5001`
- Frontend runs on `http://localhost:5173` (Vite dev server)
- Make sure MongoDB is connected and running

### Troubleshooting:
- If you get CORS errors, check that FRONTEND_URL is set correctly in backend
- If API calls fail, verify VITE_API_URL points to your backend URL
- Check Render logs for any connection or environment variable issues
- Build warnings should now be resolved with the updated config files