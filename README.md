#retrospective

A retrospective tool

##Service

```Shell
cd service
npm install
cd service/bin
node create.js
cd -
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

