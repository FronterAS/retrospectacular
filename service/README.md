#retrospective

A retrospective tool

##Service

###Setup

```Shell
cd service/bin
node create.js
```

###Run


```Shell
cd service
node app.js
```

###Post a ticket
```Shell
curl -XPOST --header 'Content-Type: application/json' -d '{
  "name" : "another ticket",
  "message" : "Wow"
}' http://localhost:3000/retrospectives/LUu3vCumSw6RXkcoG8PP9g
```
