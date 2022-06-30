NAMESPACE=$(git rev-parse --abbrev-ref HEAD);

kubectl create namespace $NAMESPACE;

docker build -t migrations:$NAMESPACE api/prisma
docker build -t client:$NAMESPACE client
docker build -t api:$NAMESPACE api
docker build -t consumer:$NAMESPACE consumer

kubectl apply -f k8s/rabbitmq.yaml --namespace $NAMESPACE;
kubectl apply -f k8s/consumer.yaml --namespace $NAMESPACE;
kubectl apply -f k8s/db.yaml --namespace $NAMESPACE;
kubectl apply -f k8s/api.yaml --namespace $NAMESPACE;
kubectl apply -f k8s/client.yaml --namespace $NAMESPACE;
kubectl apply -f k8s/ingress.yaml --namespace $NAMESPACE;
