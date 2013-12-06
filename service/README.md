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
  "role" : "con",
  "message" : "We didn't drink enough coffee!!",
  "createdAt": "2013-12-06T09:44:49.258Z",
}' http://localhost:3000/retrospectives/LUu3vCumSw6RXkcoG8PP9g
```
