const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Start time for uptime calculation
const startTime = Date.now();

/**
 * Health check endpoint
 * Used by Kubernetes liveness/readiness probes
 */
app.get('/api/health', (req, res) => {
    res.status(200).json({
        status: 'healthy',
        timestamp: new Date().toISOString()
    });
});

/**
 * Status endpoint
 * Returns system operational status and uptime
 */
app.get('/api/status', (req, res) => {
    const uptime = Math.floor((Date.now() - startTime) / 1000);
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = uptime % 60;

    res.status(200).json({
        operational: true,
        message: 'System Status: Operational',
        uptime: `${hours}h ${minutes}m ${seconds}s`,
        uptimeSeconds: uptime,
        version: process.env.APP_VERSION || '1.0.0',
        environment: process.env.NODE_ENV || 'development'
    });
});

/**
 * Readiness probe endpoint
 * Returns 200 when the service is ready to accept traffic
 */
app.get('/api/ready', (req, res) => {
    res.status(200).json({
        ready: true,
        timestamp: new Date().toISOString()
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: 'Not Found',
        path: req.path
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).json({
        error: 'Internal Server Error',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
    });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Backend API running on port ${PORT}`);
    console.log(`   Health check: http://localhost:${PORT}/api/health`);
    console.log(`   Status: http://localhost:${PORT}/api/status`);
});
