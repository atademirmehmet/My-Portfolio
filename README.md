# mehmetatademir.com.tr - DevOps Portfolio

A minimalist, dark-themed personal portfolio for a DevOps Engineer with Kubernetes/Helm deployment.

## 📁 Project Structure

```
mehmetatademir/
├── frontend/                    # Static website (Nginx)
│   ├── index.html              # Portfolio page
│   └── Dockerfile              # Nginx Alpine container
├── backend/                     # API Service (Node.js)
│   ├── server.js               # Express API
│   ├── package.json            # Dependencies
│   └── Dockerfile              # Node.js Alpine container
└── helm/
    └── portfolio/              # Helm chart
        ├── Chart.yaml
        ├── values.yaml
        └── templates/
            ├── _helpers.tpl
            ├── frontend-deployment.yaml
            ├── frontend-service.yaml
            ├── backend-deployment.yaml
            ├── backend-service.yaml
            ├── ingress.yaml
            └── serviceaccount.yaml
```

## 🐳 Docker Build

```bash
# Build frontend image
cd frontend
docker build -t portfolio-frontend:latest .

# Build backend image
cd ../backend
docker build -t portfolio-backend:latest .
```

## 🚀 K3s Deployment with Helm

```bash
# Install/Upgrade
helm upgrade --install portfolio ./helm/portfolio \
  --namespace portfolio \
  --create-namespace \
  --set frontend.image.repository=your-registry/portfolio-frontend \
  --set backend.image.repository=your-registry/portfolio-backend

# Uninstall
helm uninstall portfolio -n portfolio
```

## 📝 Configuration

Edit `helm/portfolio/values.yaml` to customize:
- **Image registry/tags**
- **Replica counts**
- **Ingress hosts & TLS**
- **Resource limits**

## 🔧 Local Development

```bash
# Frontend: Open index.html directly in browser
open frontend/index.html

# Backend: Run locally
cd backend
npm install
npm run dev
# API available at http://localhost:5000
```
# Portfolio
# Portfolio
