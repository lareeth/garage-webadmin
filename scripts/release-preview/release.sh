#!/usr/bin/env bash

current_dir="$(dirname $(realpath $0))"
project_dir="$(dirname $(dirname $current_dir))"

echo $current_dir

mkdir -p $current_dir/released

rm -rf $current_dir/released/**

echo "$project_dir/dist $current_dir/released"
cp -r $project_dir/dist $current_dir/released/dist

cp $current_dir/files/** $current_dir/released/

printf -v date '%(%Y-%m-%d)T\n' -1

zip -r $current_dir/garage-webadmin-prelease-$date.zip $current_dir/released/
