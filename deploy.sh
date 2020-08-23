#!/bin/bash

if [ "$#" -ne 1 ]; then
	echo "This Script Should Only accept a commit message as an argument"
	exit 1
	fi

COMMIT=$1
echo $COMMIT
git add *
git commit -m "$COMMIT"
git push -u origin master
npm run build
firebase deploy


exit 1
fi