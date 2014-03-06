# Meteor.js on OpenShift

Deploy a [Meteor](http://meteor.com/) application on [OpenShift](http://openshift.com/).

## Create an OpenShift app from this QuickStart

    rhc app create myapp nodejs-0.10 mongodb-2.4 --from-code=https://github.com/skyveri/openshift-meteor-quickstart.git

## Create a Meteor project

To create a project:

    meteor create myproject

Or you can create one of Meteor's example projects:

    meteor create --example leaderboard

## Deploy

    git add -A
    git commit -m "Create Meteor project"
    git push
