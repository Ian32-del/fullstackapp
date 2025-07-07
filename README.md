# fullstackapp

🚀 Full-Stack Flask + React App Deployed on Kubernetes
This project is a containerized full-stack web app built with:

. Backend: Flask (Python)

. Frontend: React (JavaScript)

. Containerization: Docker

. Orchestration: Kubernetes (Minikube)

It demonstrates how to build, connect, and deploy both frontend and backend services in a Kubernetes environment.

📁 Project Structure
bash
Copy
Edit
fullstackapp/
│
├── flask-backend/         # Flask API
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── react-frontend/        # React frontend
│   ├── src/App.js
│   ├── Dockerfile
│   └── package.json
│
└── k8s-manifests/         # Kubernetes configs
    ├── backend-deployment.yaml
    └── frontend-deployment.yaml
✨ Features
REST API built with Flask, returning a message as JSON

React app fetches message from backend and displays it

Optimized multi-stage Docker builds

Kubernetes deployments with internal service communication

Exposed via NodePort for external access

Tested on Minikube using Docker driver

✅ Fixes & Lessons Learned
This section highlights what was debugged and improved during development:

❗ React App must be rebuilt with API URL:
You must inject the correct backend URL when building the frontend image:

bash
Copy
Edit
REACT_APP_API_URL=http://flask-backend-service:5000/api/message npm run build
This URL is resolved internally by Kubernetes DNS.

❗ Minikube image management:
Instead of pushing to Docker Hub, we used:

bash
Copy
Edit
minikube image load flask-backend
minikube image load react-frontend
This is faster and avoids authentication and network issues.

✅ Removed multiple conflicting deployments:
Deleting older pods or duplicate deployments avoided resource conflicts.

🧠 Used ClusterIP for backend, NodePort for frontend:
The frontend was exposed externally, while the backend was kept internal but reachable through Kubernetes DNS.

🛠️ Fixed “Pending” pods:
Ensured images were locally available to the Minikube cluster.

🐳 Docker Build & Test (Optional)
Backend:
bash
Copy
Edit
cd flask-backend
docker build -t flask-backend .
docker run -p 5000:5000 flask-backend
Frontend:
bash
Copy
Edit
cd react-frontend
REACT_APP_API_URL=http://localhost:5000/api/message npm run build
docker build -t react-frontend .
docker run -p 3000:80 react-frontend
☸️ Kubernetes Deployment Guide
1. Start Minikube:
bash
Copy
Edit
minikube start
2. Load Docker Images into Minikube:
bash
Copy
Edit
minikube image load flask-backend
minikube image load react-frontend
3. Apply K8s Manifests:
bash
Copy
Edit
cd k8s-manifests
kubectl apply -f backend-deployment.yaml
kubectl apply -f frontend-deployment.yaml
4. Access the App:
bash
Copy
Edit
minikube service react-frontend-service
It will open a browser window pointing to the NodePort URL. You should see the message fetched from the Flask API displayed on the React app.

🧪 Debugging Tips
View pod logs:

bash
Copy
Edit
kubectl logs <pod-name>
Check backend response from inside the frontend pod:

bash
Copy
Edit
kubectl exec -it <frontend-pod> -- curl http://flask-backend-service:5000/api/message
Delete stuck pods:

bash
Copy
Edit
kubectl delete pod <pod-name>
Get services and ports:

bash
Copy
Edit
kubectl get svc
📸 Screenshot
(Insert screenshot of your deployed frontend showing backend message here)

📚 What You’ll Learn
React + Flask integration

Docker multi-stage builds (especially for React)

K8s ClusterIP vs NodePort

Injecting environment variables at build time

Debugging common deployment issues in Minikube

🚀 Future Enhancements
 Add NGINX reverse proxy or Ingress

 HTTPS with TLS

 CI/CD pipeline (e.g., GitHub Actions)

 Helm charts for reusable deployments

 Monitoring with Prometheus + Grafana

👨‍💻 Author
Chris Ian
📍 Kenya
💼 DevOps | Software Engineer
🔗 GitHub Profile

📄 License
This project is open-source under the MIT License.

