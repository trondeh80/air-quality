## air-quality

This is a tiny web application displaying air-quality in norway.

The application is hosted on Heroku.

--

To run locally:
- run "npm install"
- run "npm run start"

The application will start an express server listening on port 3000.

Application can be built using docker and kubernetes hosted on Google Cloud.

>

To deploy to google, you must first register a new image in google container registry, then apply k8s:
- docker tag airquality_airnode eu.gcr.io/oval-day-94120/airquality_airnode
- docker push eu.gcr.io/oval-day-94120/airquality_airnode
- Run "kubectl apply -f k8s/frontend.yaml"
