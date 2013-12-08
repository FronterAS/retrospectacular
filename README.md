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

```Shell
# create and update config file
cp service/config.json.example service/config.json
cd service
npm install
cd service/bin
node create.js
cd -
npm start
```

##Static

Requires global install of bower and grunt-cli
```Shell
npm install -g bower
npm install -g grunt-cli
```

And Compass
```Shell
gem install compass
```

```Shell
cd static
npm install
bower install
grunt compass
cd app/scripts
cp config.js.example config.js
```
Edit the config to suit
```Shell
cd -
grunt server
```

