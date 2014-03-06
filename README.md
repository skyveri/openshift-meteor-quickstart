# Meteor on OpenShift

Deploy a [Meteor](http://meteor.com/) application on [OpenShift](http://openshift.com/).

## Create an OpenShift app from this QuickStart

    rhc app create myopenshiftapp nodejs-0.10 mongodb-2.4 --from-code=https://github.com/skyveri/openshift-meteor-quickstart.git

## Create a Meteor app

    cd myopenshiftapp
    meteor create mymeteorapp

## Editing the app

Every time you edit your code, commit the changes:

    git add -A
    git commit -m "Describe the changes you made"

## Deploy

Make sure all changes have been committed:

    git status

Deploy your app on OpenShift:

    git push

## Credits

This QuickStart uses code from these projects:

> [Meteor.js on OpenShift](https://github.com/openshift-quickstart/openshift-meteorjs-quickstart)  
> [Running a custom/latest Node[.js] version on Red Hat's OpenShift PaaS](https://github.com/ramr/nodejs-custom-version-openshift)
