#retrospective

A retrospective tool

##Database
###Setup
http://www.elasticsearch.org/download/


The easiest way is to download the tar.gz and run the binary.

```Shell
cd /opt
wget https://download.elasticsearch.org/elasticsearch/elasticsearch/elasticsearch-0.90.7.tar.gz
tar -xvf elasticsearch-0.90.7.tar.gz
```

###Run
```Shell
cd elasticsearch-0.90.7/bin
./elasticsearch
```


##Service

###Setup

```Shell
# create and update config file
cp service/config.json.example service/config.json

# Build the dbs
node service/create.js
```

###Run


```Shell
cd service
node app.js
```

##Static

###Setup

```Shell
cd static
npm install
bower install
grunt server
```

###Frontend
```Shell
cd static/app/scripts
cp config.js.example config.js
```

Edit the config to suit
