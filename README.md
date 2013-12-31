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
cd ../../
npm start >logs/output.log 2>logs/error.log &
```
###Prod setup
```Shell
sudo aptitude install monit
cd scripts/
sudo cp monit/retrospectacular_app /etc/monit/conf.d
sudo cp upstart/retrospectacular_app.conf /etc/init/
sudo stop monit
sudo start monit
sudo killall -9 node
sudo monit start retrospectacular_app
sudo monit status retrospectacular_app
```

###Post a ticket
```Shell
curl -XPOST --header 'Content-Type: application/json' -d '{
  "role" : "con",
  "message" : "We didn't drink enough coffee!!",
  "createdAt": "2013-12-06T09:44:49.258Z",
}' http://localhost:3000/retrospectives/LUu3vCumSw6RXkcoG8PP9g
```

###Unit-test

```Shell
cd service
npm install -g mocha
mocha
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
grunt
cd app/scripts
cp config.js.example config.js
```
Edit the config to suit
```Shell
cd -
grunt server
```

