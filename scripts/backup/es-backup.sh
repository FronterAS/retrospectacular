#!/bin/sh
original=retro_prod
backup=retro_prod_$(date +"%d%m%Y_%H%M%S")
base=/var/backup/es

year=$(date +"%Y")
month=$(date +"%m")
day=$(date +"%d")

path=$base/$year/$month/$day
/bin/mkdir -p $path

/usr/bin/env esdump --url http://localhost:9200/ --indexes $original --bzip2 --file "${path}/${backup}.bz2"

#/usr/bin/env esimport --url http://localhost:9200 --index $backup --file "${path}/${backup}.bz2"
