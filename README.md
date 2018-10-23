## air-quality

This is a tiny web application displaying air-quality in norway.

Application is built using docker and kubernetes hosted on Google Cloud.

>

To deploy to google, you must first register a new image in google container registry, then apply k8s:
- docker tag airquality_airnode eu.gcr.io/oval-day-94120/airquality_airnode
- docker push eu.gcr.io/oval-day-94120/airquality_airnode
- Run "kubectl apply -f k8s/frontend.yaml"