NAMESPACE=$(git rev-parse --abbrev-ref HEAD);

kubectl create namespace $NAMESPACE;

docker build -t client:$NAMESPACE client

kubectl apply -f k8s/client.yaml --namespace $NAMESPACE;
kubectl apply -f k8s/ingress.yaml --namespace $NAMESPACE;