#!/bin/bash

ssh -i "unirent-pvt-key.pem" -f -N -L 3310:unirent-mysqldb.c7xeexvsh9c3.us-east-1.rds.amazonaws.com:3306 ec2-user@54.174.239.75
sleep 3
