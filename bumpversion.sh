#!/bin/bash

function bump {
	output=$(npm version ${release} --no-git-tag-version)
	version=${output:1}
	search='("version":[[:space:]]*").+(")'
	replace="\1${version}\2"
	
	sed -E "s/${search}/${replace}/g" "$1" >> new_package.json
	rm "$1"
	mv new_package.json "$1"
}

function help {
	echo "Usage: $(basename $0) [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease]"
}

if [ -z "$1" ] || [ "$1" = "help" ]; then
	help
	exit
fi

release=$1

if [ -d ".git" ]; then
	changes=$(git status --porcelain)
	
	if [ -z "${changes}" ]; then
		bump package.json
		git add .
		git commit -m "[BUMP_VERSION] - Bump to ${version}"
		git tag -a "${output}" -m "${version}"
		git push origin --tags
	else
		echo "Please commit staged files prior to bumping"
	fi
fi
