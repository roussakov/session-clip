# Demo
This project is currently accessible in web via http://demo.sessionclip.com

All recorder sessions can be accessed via
http://dashboard.sessionclip.com

# Development

In order to run this project on your local machine
1. Install Docker
2. Clone this repository
3. Run `docker-compose up` command from root project folder

Assuming your docker is running on 127.0.0.1 add following line to the etc/hosts file:
127.0.0.1 demo.sessionclip.localhost api.sessionclip.localhost dashboard.sessionclip.localhost sessionclip.localhost

Hit the browser with http://demo.sessionclip.localhost:8080
