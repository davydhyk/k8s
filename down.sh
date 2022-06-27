NAMESPACE=$(git rev-parse --abbrev-ref HEAD);
kubectl delete all --all -n {$NAMESPACE};
kubectl delete namespace $NAMESPACE;