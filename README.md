#retrospective

A retrospective tool

##Service

###Setup

```Shell
cd service
npm install
```

```Shell
cd service/bin
node create.js
```

###Run


```Shell
cd service
node app.js
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

###Setup

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

