NAMESPACE=$(git rev-parse --abbrev-ref HEAD);
kubectl delete namespace $NAMESPACE;
