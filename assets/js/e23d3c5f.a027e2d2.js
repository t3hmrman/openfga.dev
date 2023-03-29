"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[3416],{92452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>k,frontMatter:()=>p,metadata:()=>d,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(5270),i=n(74866),l=n(85162);const p={title:"Docker Setup Guide",description:"Setting up an OpenFGA server with Docker",sidebar_position:1,slug:"/getting-started/setup-openfga/docker"},s="\ud83d\udc33 Setup OpenFGA with Docker",d={unversionedId:"content/getting-started/setup-openfga/docker-setup",id:"content/getting-started/setup-openfga/docker-setup",title:"Docker Setup Guide",description:"Setting up an OpenFGA server with Docker",source:"@site/docs/content/getting-started/setup-openfga/docker-setup.mdx",sourceDirName:"content/getting-started/setup-openfga",slug:"/getting-started/setup-openfga/docker",permalink:"/docs/getting-started/setup-openfga/docker",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/getting-started/setup-openfga/docker-setup.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Docker Setup Guide",description:"Setting up an OpenFGA server with Docker",sidebar_position:1,slug:"/getting-started/setup-openfga/docker"},sidebar:"docs",previous:{title:"Setup OpenFGA",permalink:"/docs/getting-started/setup-openfga/overview"},next:{title:"Kubernetes Setup Guide",permalink:"/docs/getting-started/setup-openfga/kubernetes"}},u={},c=[{value:"Step By Step",id:"step-by-step",level:2},{value:"Configuring The Server",id:"configuring-the-server",level:2},{value:"Configuring Data Storage",id:"configuring-data-storage",level:3},{value:"Postgres",id:"postgres",level:4},{value:"MySQL",id:"mysql",level:4},{value:"Configuring Authentication",id:"configuring-authentication",level:3},{value:"Pre-shared Key Authentication",id:"pre-shared-key-authentication",level:4},{value:"OIDC",id:"oidc",level:4},{value:"Playground",id:"playground",level:3},{value:"Profiler (pprof)",id:"profiler-pprof",level:3},{value:"Health Check",id:"health-check",level:2},{value:"Experimental Features",id:"experimental-features",level:2},{value:"Telemetry",id:"telemetry",level:2},{value:"Metrics",id:"metrics",level:3},{value:"Tracing",id:"tracing",level:3},{value:"Logging",id:"logging",level:3},{value:"Related Sections",id:"related-sections",level:2}],m={toc:c},g="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-setup-openfga-with-docker"},"\ud83d\udc33 Setup OpenFGA with Docker"),(0,r.kt)(o.AH,{mdxType:"DocumentationNotice"}),(0,r.kt)("p",null,"This article explains how to start your own OpenFGA server using Docker, and how to configure it."),(0,r.kt)("h2",{id:"step-by-step"},"Step By Step"),(0,r.kt)("p",null,"If you want to run OpenFGA locally as a Docker container, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Install Docker")," (if not already installed)."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"docker pull openfga/openfga")," to get the latest docker image."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"docker run -p 8080:8080 -p 8081:8081 -p 3000:3000 openfga/openfga run"),".")),(0,r.kt)("p",null,"This will start an HTTP server and gRPC server with the default configuration options. Port 8080 is used to serve the HTTP API, 8081 is used to serve the gRPC API, and 3000 is used for the ",(0,r.kt)("a",{parentName:"p",href:"#playground"},"Playground"),"."),(0,r.kt)("h2",{id:"configuring-the-server"},"Configuring The Server"),(0,r.kt)("p",null,"You may configure the OpenFGA server with a ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yaml")," file. The ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yaml")," can be specified in either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/etc/openfga")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$HOME/.openfga")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".")," (i.e., the current working directory).")),(0,r.kt)("p",null,"The OpenFGA server will search for the configuration file in the above order."),(0,r.kt)("p",null,"Here is a sample configuration to run OpenFGA with a Postgres database and using a preshared key for authentication:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'datastore:\n  engine: postgres\n  uri: postgres://user:password@localhost:5432/mydatabase\nauthn:\n  method: preshared\n  preshared:\n    keys: ["key1", "key2"]\n')),(0,r.kt)("p",null,"All possible configurations and their default values are defined in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openfga/openfga/blob/main/.config-schema.json"},"config-schema.json"),"."),(0,r.kt)("admonition",{title:"Information",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The OpenFGA server supports ",(0,r.kt)("strong",{parentName:"p"},"environment variables")," for configuration, and they will take priority over your configuration file.\nEach variable must be prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"OPENFGA_")," and followed by your option in uppercase (e.g ",(0,r.kt)("inlineCode",{parentName:"p"},"--grpc-tls-key")," becomes ",(0,r.kt)("inlineCode",{parentName:"p"},"OPENFGA_GRPC_TLS_KEY"),").")),(0,r.kt)("h3",{id:"configuring-data-storage"},"Configuring Data Storage"),(0,r.kt)("p",null,"OpenFGA supports multiple storage engine options, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"memory")," - The memory storage engine is the default, but it is not persistent (data is lost between server restarts)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"postgres")," - The Postgres storage engine requires a Postgres instance that the OpenFGA server can reach."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mysql")," - The MySQL storage engine requires a MySQL instance that the OpenFGA server can reach, and that the connection URI specifies the query ",(0,r.kt)("inlineCode",{parentName:"li"},"parseTime=true"),".")),(0,r.kt)("h4",{id:"postgres"},"Postgres"),(0,r.kt)(i.Z,{groupId:"installation",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"docker",label:"Docker",mdxType:"TabItem"},(0,r.kt)("p",null,"Let's assume you want to run OpenFGA and Postgres in containers. The first thing we should do is create a new network as this will make communication between containers a bit simpler:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker network create openfga\n")),(0,r.kt)("p",null,"Start Postgres in the network you created above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d --name postgres --network=openfga -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=password postgres:14\n")),(0,r.kt)("p",null,"You should now have Postgres running in a container in the ",(0,r.kt)("inlineCode",{parentName:"p"},"openfga")," network. However, it will not have the tables required for running OpenFGA. You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"migrate")," command to create the tables. Using the OpenFGA container, this will look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'docker run --rm --network=openfga openfga/openfga migrate \\\n    --datastore-engine postgres \\\n    --datastore-uri "postgres://postgres:password@postgres:5432/postgres?sslmode=disable"\n')),(0,r.kt)("p",null,"Finally, start OpenFGA:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --name openfga --network=openfga -p 3000:3000 -p 8080:8080 -p 8081:8081 openfga/openfga run \\\n    --datastore-engine postgres \\\n    --datastore-uri 'postgres://postgres:password@postgres:5432/postgres?sslmode=disable'\n"))),(0,r.kt)(l.Z,{value:"docker-compose",label:"Docker Compose",mdxType:"TabItem"},(0,r.kt)("p",null,"Copy the below code block into a local file named: ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'version: \'3.8\'\n\nnetworks:\n  openfga:\n\nservices:\n  postgres:\n    image: postgres:14\n    container_name: postgres\n    networks:\n      - openfga\n    ports:\n      - "5432:5432"\n    environment:\n      - POSTGRES_USER=postgres\n      - POSTGRES_PASSWORD=password\n    healthcheck:\n      test: [ "CMD-SHELL", "pg_isready -U postgres" ]\n      interval: 5s\n      timeout: 5s\n      retries: 5\n\n  migrate:\n    depends_on:\n      postgres:\n        condition: service_healthy\n    image: openfga/openfga:latest\n    container_name: migrate\n    command: migrate\n    environment:\n      - OPENFGA_DATASTORE_ENGINE=postgres\n      - OPENFGA_DATASTORE_URI=postgres://postgres:password@postgres:5432/postgres?sslmode=disable\n    networks:\n      - openfga\n\n  openfga:\n    depends_on:\n      migrate:\n        condition: service_completed_successfully\n    image: openfga/openfga:latest\n    container_name: openfga\n    environment:\n      - OPENFGA_DATASTORE_ENGINE=postgres\n      - OPENFGA_DATASTORE_URI=postgres://postgres:password@postgres:5432/postgres?sslmode=disable\n      - OPENFGA_LOG_FORMAT=json\n    command: run\n    networks:\n      - openfga\n    ports:\n      # Needed for the http server\n      - "8080:8080"\n      # Needed for the grpc server (if used)\n      - "8081:8081"\n      # Needed for the playground (Do not enable in prod!)\n      - "3000:3000"\n')),(0,r.kt)("p",null,"In a terminal, navigate to that directory and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose up\n")))),(0,r.kt)("p",null,"This will start the Postgres database, run ",(0,r.kt)("inlineCode",{parentName:"p"},"openfga migrate")," to configure the database and finally start the OpenFGA server."),(0,r.kt)("p",null,"Now you can try to ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/create-store"},"Create a Store"),"."),(0,r.kt)("h4",{id:"mysql"},"MySQL"),(0,r.kt)("p",null,"Setting up MySQL and OpenFGA is very similar to setting up Postgres and OpenFGA."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Note that the MySQL datastore has stricter limits for the max length of some fields for tuples compared to other datastore engines, in particular:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"object type is at most 128 characters (down from 256)"),(0,r.kt)("li",{parentName:"ul"},"object id is at most 128 characters (down from 256)"),(0,r.kt)("li",{parentName:"ul"},"user is at most 256 characters (down from 512)"))),(0,r.kt)(i.Z,{groupId:"installation_mysql",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"docker-mysql",label:"Docker",mdxType:"TabItem"},"We first make a network:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker network create openfga\n")),(0,r.kt)("p",null,"Then, start MySQL in the network you created above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d --name mysql --network=openfga -e MYSQL_ROOT_PASSWORD=secret -e MYSQL_DATABASE=openfga mysql:8\n")),(0,r.kt)("p",null,"You should now have MySQL running in a container in the ",(0,r.kt)("inlineCode",{parentName:"p"},"openfga")," network. But we still have to migrate all the tables to be able to run OpenFGA. You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"migrate")," command to create the tables. Using the OpenFGA container, this will look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm --network=openfga openfga/openfga migrate \\\n    --datastore-engine mysql \\\n    --datastore-uri 'root:secret@tcp(mysql:3306)/openfga?parseTime=true'\n")),(0,r.kt)("p",null,"Finally, start OpenFGA:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --name openfga --network=openfga -p 3000:3000 -p 8080:8080 -p 8081:8081 openfga/openfga run \\\n    --datastore-engine mysql \\\n    --datastore-uri 'root:secret@tcp(mysql:3306)/openfga?parseTime=true'\n"))),(0,r.kt)(l.Z,{value:"docker-compose-mysql",label:"Docker Compose",mdxType:"TabItem"},(0,r.kt)("p",null,"Copy the below code block into a local file named: ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3.8'\n\nnetworks:\n  openfga:\n\nservices:\n  mysql:\n    image: mysql:8\n    container_name: mysql\n    networks:\n      - openfga\n    ports:\n      - \"3306:3306\"\n    environment:\n      - MYSQL_ROOT_PASSWORD=secret\n      - MYSQL_DATABASE=openfga\n    healthcheck:\n      test: [\"CMD\", 'mysqladmin', 'ping', '-h', 'localhost', '-u', 'root', '-p$$MYSQL_ROOT_PASSWORD' ]\n      timeout: 20s\n      retries: 5\n\n  migrate:\n    depends_on:\n        mysql:\n            condition: service_healthy\n    image: openfga/openfga:latest\n    container_name: migrate\n    command: migrate\n    environment:\n      - OPENFGA_DATASTORE_ENGINE=mysql\n      - OPENFGA_DATASTORE_URI=root:secret@tcp(mysql:3306)/openfga?parseTime=true\n    networks:\n      - openfga\n\n  openfga:\n    depends_on:\n      migrate:\n        condition: service_completed_successfully\n    image: openfga/openfga:latest\n    container_name: openfga\n    environment:\n      - OPENFGA_DATASTORE_ENGINE=mysql\n      - OPENFGA_DATASTORE_URI=root:secret@tcp(mysql:3306)/openfga?parseTime=true\n      - OPENFGA_LOG_FORMAT=json\n    command: run\n    networks:\n      - openfga\n    ports:\n      # Needed for the http server\n      - \"8080:8080\"\n      # Needed for the grpc server (if used)\n      - \"8081:8081\"\n      # Needed for the playground (Do not enable in prod!)\n      - \"3000:3000\"\n")),(0,r.kt)("p",null,"In a terminal, navigate to that directory and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose up\n")))),(0,r.kt)("p",null,"This will start the MySQL database, run ",(0,r.kt)("inlineCode",{parentName:"p"},"openfga migrate")," to configure the database and finally start the OpenFGA server."),(0,r.kt)("p",null,"Now you can try to ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/create-store"},"Create a Store"),"."),(0,r.kt)("h3",{id:"configuring-authentication"},"Configuring Authentication"),(0,r.kt)("p",null,"You can configure authentication in your OpenFGA server in three ways: no authentication (the default), pre-shared key authentication or via OIDC."),(0,r.kt)("h4",{id:"pre-shared-key-authentication"},"Pre-shared Key Authentication"),(0,r.kt)("p",null,"If using ",(0,r.kt)("strong",{parentName:"p"},"Pre-shared key authentication"),", you will configure OpenFGA with a secret key and your application calling OpenFGA will have to set an ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer <YOUR-KEY-HERE>")," header. You can configure multiple keys."),(0,r.kt)("admonition",{title:"Warning",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you are going to use this setup in production, you should enable HTTP TLS in your OpenFGA server. You will need to configure the TLS certificate and key.")),(0,r.kt)(i.Z,{groupId:"configuration",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"configuration file",label:"Configuration File",mdxType:"TabItem"},(0,r.kt)("p",null,"Update the config.yaml file to "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'authn:\n  method: preshared\n  preshared:\n    keys: ["key1", "key2"]\nhttp:\n  tls:\n    enabled: true\n    cert: /Users/myuser/key/server.crt\n    key: /Users/myuser/key/server.key\n'))),(0,r.kt)(l.Z,{value:"environment variables",label:"Environment Variables",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Configure the authentication method to preshared: ",(0,r.kt)("inlineCode",{parentName:"li"},"export OPENFGA_AUTHN_METHOD=preshared"),"."),(0,r.kt)("li",{parentName:"ol"},"Configure the authentication keys: ",(0,r.kt)("inlineCode",{parentName:"li"},'export OPENFGA_AUTHN_PRESHARED_KEYS="key1,key2"')),(0,r.kt)("li",{parentName:"ol"},"Enable the HTTP TLS configuration: ",(0,r.kt)("inlineCode",{parentName:"li"},"export OPENFGA_HTTP_TLS_ENABLED=true")),(0,r.kt)("li",{parentName:"ol"},"Configure the HTTP TLS certificate location: ",(0,r.kt)("inlineCode",{parentName:"li"},"export OPENFGA_HTTP_TLS_CERT=/Users/myuser/key/server.crt")),(0,r.kt)("li",{parentName:"ol"},"Configure the HTTP TLS key location: ",(0,r.kt)("inlineCode",{parentName:"li"},"export OPENFGA_HTTP_TLS_KEY=/Users/myuser/key/server.key")))),(0,r.kt)(l.Z,{value:"docker",label:"Docker",mdxType:"TabItem"},(0,r.kt)("p",null,"To configure with pre-shared authentication and enabling TLS in http server with Docker."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Copy the certificate and key files to your Docker container."),(0,r.kt)("li",{parentName:"ol"},"Run with the following command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'docker run --name openfga --network=openfga -p 3000:3000 -p 8080:8080 -p 8081:8081 openfga/openfga run \\\n    --authn-method=preshared \\\n    --authn-preshared-keys="key1,key2" \\\n    --http-tls-enabled=true \\\n    --http-tls-cert="/Users/myuser/key/server.crt" \\\n    --http-tls-key="/Users/myuser/key/server.key"\n')))),(0,r.kt)("h4",{id:"oidc"},"OIDC"),(0,r.kt)("p",null,"To configure with OIDC authentication, you will first need to obtain the OIDC issuer and audience from your provider."),(0,r.kt)("admonition",{title:"Warning",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you are going to use this setup in production, you should enable HTTP TLS in your OpenFGA server. You will need to configure the TLS certificate and key.")),(0,r.kt)(i.Z,{groupId:"configuration",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"configuration file",label:"Configuration File",mdxType:"TabItem"},(0,r.kt)("p",null,"Update the config.yaml file to "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'authn:\n  method: oidc\n  oidc:\n    issuer: "oidc-issuer"\n    audience: "oidc-audience"\n\nhttp:\n  tls:\n    enabled: true\n    cert: /Users/myuser/key/server.crt\n    key: /Users/myuser/key/server.key\n'))),(0,r.kt)(l.Z,{value:"environment variables",label:"Environment Variables",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Configure the authentication method to preshared: ",(0,r.kt)("inlineCode",{parentName:"li"},"export OPENFGA_AUTHN_METHOD=oidc"),"."),(0,r.kt)("li",{parentName:"ol"},"Configure the authentication keys: ",(0,r.kt)("inlineCode",{parentName:"li"},"export OPENFGA_AUTHN_OIDC_ISSUER=oidc-issuer")),(0,r.kt)("li",{parentName:"ol"},"Configure the authentication keys: ",(0,r.kt)("inlineCode",{parentName:"li"},"export OPENFGA_AUTHN_OIDC_audience=oidc-audience")),(0,r.kt)("li",{parentName:"ol"},"Enable the HTTP TLS configuration: ",(0,r.kt)("inlineCode",{parentName:"li"},"export OPENFGA_HTTP_TLS_ENABLED=true")),(0,r.kt)("li",{parentName:"ol"},"Configure the HTTP TLS certificate location:\n",(0,r.kt)("inlineCode",{parentName:"li"},"export OPENFGA_HTTP_TLS_CERT=/Users/myuser/key/server.crt")),(0,r.kt)("li",{parentName:"ol"},"Configure the HTTP TLS key location:\n",(0,r.kt)("inlineCode",{parentName:"li"},"export OPENFGA_HTTP_TLS_KEY=/Users/myuser/key/server.key")))),(0,r.kt)(l.Z,{value:"docker",label:"Docker",mdxType:"TabItem"},(0,r.kt)("p",null,"To configure with pre-shared authentication and enabling TLS in http server with Docker."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Copy the certificate and key files to your docker container."),(0,r.kt)("li",{parentName:"ol"},"Run the following command")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'docker run --name openfga --network=openfga -p 3000:3000 -p 8080:8080 -p 8081:8081 openfga/openfga run \\\n    --authn-method=oidc \\\n    --authn-oidc-issuer="oidc-issuer" \\\n    --authn-oidc-audience="oidc-audience" \\\n    --http-tls-enabled=true \\\n    --http-tls-cert="/Users/myuser/key/server.crt" \\\n    --http-tls-key="/Users/myuser/key/server.key"\n')))),(0,r.kt)("h3",{id:"playground"},"Playground"),(0,r.kt)("p",null,"The Playground facilitates rapid development by allowing you to visualize and model your application's authorization model(s) and manage relationship tuples with a locally running OpenFGA instance."),(0,r.kt)("p",null,"The Playground is enabled on port 3000 by default and accessible at http://localhost:3000/playground (if using Docker, make sure port 3000 is exposed to your local network). To disable the Playground, see ",(0,r.kt)("a",{parentName:"p",href:"#configuring-the-server"},"Configuring the Server"),"."),(0,r.kt)("h3",{id:"profiler-pprof"},"Profiler (pprof)"),(0,r.kt)("admonition",{title:"Warning",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Continuous profiling can be used in production deployments, but we recommend disabling it unless it is needed to troubleshoot specific performance or memory problems.")),(0,r.kt)("p",null,"Profiling through ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/google/pprof/blob/main/doc/README.md"},(0,r.kt)("inlineCode",{parentName:"a"},"pprof"))," can be enabled on the OpenFGA server by providing the ",(0,r.kt)("inlineCode",{parentName:"p"},"--profiler-enabled")," flag. For example, in Docker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -p 8080:8080 -p 8081:8081 -p 3000:3000 -p 3001:3001 openfga/openfga run --profiler-enabled\n")),(0,r.kt)("p",null,"If you need to serve the profiler on a different port than the default ",(0,r.kt)("inlineCode",{parentName:"p"},"3001"),", you can do so by specifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"--profiler-addr")," flag. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -p 8080:8080 -p 8081:8081 -p 3000:3000 -p 3002:3002 openfga/openfga run --profiler-enabled --profiler-addr :3002\n")),(0,r.kt)("h2",{id:"health-check"},"Health Check"),(0,r.kt)("p",null,"OpenFGA is configured with an HTTP health check endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"/healthz")," and a gRPC health check ",(0,r.kt)("inlineCode",{parentName:"p"},"grpc.health.v1.Health/Check"),", which is wired to datastore testing. Possible response values are"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"UNKNOWN"),(0,r.kt)("li",{parentName:"ul"},"SERVING"),(0,r.kt)("li",{parentName:"ul"},"NOT_SERVING"),(0,r.kt)("li",{parentName:"ul"},"SERVICE_UNKNOWN")),(0,r.kt)(i.Z,{groupId:"healthcheck",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"health-curl",label:"cURL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X GET $FGA_API_HOST/healthz\n\n# {"status":"SERVING"}\n'))),(0,r.kt)(l.Z,{value:"health-grpc",label:"gRPC",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# See https://github.com/fullstorydev/grpcurl#installation\ngrpcurl -plaintext $FGA_API_HOST grpc.health.v1.Health/Check\n\n# {"status":"SERVING"}\n')))),(0,r.kt)("h2",{id:"experimental-features"},"Experimental Features"),(0,r.kt)("p",null,"Various releases of OpenFGA may have experimental features that can be enabled by providing the ",(0,r.kt)("inlineCode",{parentName:"p"},"--experimentals")," flag or the ",(0,r.kt)("inlineCode",{parentName:"p"},"experimentals")," config."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'docker run -p 8080:8080 -p 8081:8081 openfga/openfga run --experimentals="feature1, feature2"\n')),(0,r.kt)("p",null,"or if you're using environment variables,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'docker run -p 8080:8080 -p 8081:8081 openfga/openfga -e OPENFGA_EXPERIMENTALS="feature1, feature2" run\n')),(0,r.kt)("p",null,"The following table enumerates the experimental flags, a description of what they do, and the versions of OpenFGA the flag is supported in:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"OpenFGA Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"otel-metrics"),(0,r.kt)("td",{parentName:"tr",align:null},"Enables support for exposing OpenFGA metrics through OpenTelemetry"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0.3.2 <= v < v0.3.5")),(0,r.kt)("td",{parentName:"tr",align:null},"became default in ",(0,r.kt)("inlineCode",{parentName:"td"},"v0.3.5"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"list-objects"),(0,r.kt)("td",{parentName:"tr",align:null},"Enables ListObjects API"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0.2.0 <= v < v0.3.3")),(0,r.kt)("td",{parentName:"tr",align:null},"became default in ",(0,r.kt)("inlineCode",{parentName:"td"},"v0.3.3"))))),(0,r.kt)("admonition",{title:"Warning",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Experimental features are not guaranteed to be stable and may lead to server instabilities. It is not recommended to enable experimental features for anything other than experimentation."),(0,r.kt)("p",{parentName:"admonition"},"Experimental feature flags are also not considered part of API compatibility and are subject to change, so please refer to each OpenFGA specific release for a list of the experimental feature flags that can be enabled for that release.")),(0,r.kt)("h2",{id:"telemetry"},"Telemetry"),(0,r.kt)("p",null,"OpenFGA telemetry data is collected by default starting on version ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.3.5"),". The telemetry information that is captured includes Metrics, Traces, and Logs."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openfga/openfga/blob/main/docker-compose.yaml"},"docker-compose.yaml")," file as an example of how to collect Metrics and Tracing in OpenFGA in a Docker environment using the ",(0,r.kt)("a",{parentName:"p",href:"https://opentelemetry.io/docs/concepts/data-collection/"},"OpenTelemetry Collector"),". This should serve as a good example that you can adjust for your specific deployment scenario.")),(0,r.kt)("h3",{id:"metrics"},"Metrics"),(0,r.kt)("p",null,"OpenFGA metrics are collected with the ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/concepts/data_model/"},"Prometheus data format")," and exposed on address ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0.0:2112/metrics"),"."),(0,r.kt)("p",null,"Metrics are exposed by default, but you can disable this with ",(0,r.kt)("inlineCode",{parentName:"p"},"--metrics-enabled=false")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"OPENFGA_METRICS_ENABLED=false")," environment variable)."),(0,r.kt)("p",null,"To set an alternative address, you can provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"--metrics-addr")," flag (",(0,r.kt)("inlineCode",{parentName:"p"},"OPENFGA_METRICS_ADDR")," environment variable). For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"openfga run --metrics-addr=0.0.0.0:2114\n")),(0,r.kt)("p",null,"To see the request latency per endpoint of your OpenFGA deployment, you can provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"--metrics-enable-rpc-histograms")," flag (",(0,r.kt)("inlineCode",{parentName:"p"},"OPENFGA_METRICS_ENABLE_RPC_HISTOGRAMS")," environment variable)."),(0,r.kt)("h3",{id:"tracing"},"Tracing"),(0,r.kt)("p",null,"OpenFGA traces can be collected with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/otlp.md"},"OTLP data format"),"."),(0,r.kt)("p",null,"Tracing is disabled by default, but you can enable this with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--trace-enabled=true")," (",(0,r.kt)("inlineCode",{parentName:"p"},"OPENFGA_TRACE_ENABLED=true")," environment variable). Traces will be exported by default to address ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0.0:4317"),". You can change this address with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--trace-otlp-endpoint")," flag (",(0,r.kt)("inlineCode",{parentName:"p"},"OPENFGA_TRACE_OTLP_ENDPOINT")," environment variable)."),(0,r.kt)("p",null,"To increase or decrease the trace sampling ratio, you can provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"--trace-sample-ratio")," flag (",(0,r.kt)("inlineCode",{parentName:"p"},"OPENFGA_TRACE_SAMPLE_RATIO")," env variable)."),(0,r.kt)("admonition",{title:"Warning",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"It is not recommended to sample all traces (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"--trace-sample-ratio=1"),"). You will need to adjust your sampling ratio based on the amount of traffic your deployment receives. Higher traffic will require less sampling and lower traffic can tolerate higher sampling ratios.")),(0,r.kt)("h3",{id:"logging"},"Logging"),(0,r.kt)("p",null,"OpenFGA generates structured logs by default, and it can be configured with the following flags:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--log-format"),": sets the log format. Today we support ",(0,r.kt)("inlineCode",{parentName:"li"},"text")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"json")," format."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--log-level"),": sets the minimum log level (defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"info"),"). It can be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"none")," to turn off logging.")),(0,r.kt)("h2",{id:"related-sections"},"Related Sections"),(0,r.kt)(o.$q,{description:"Check the following sections for more on how to use OpenFGA.",relatedLinks:[{title:"Production Best Practices",description:"Learn the best practices of running OpenFGA in a production environment",link:"../running-in-production",id:"./running-in-production"}],mdxType:"RelatedSection"}))}k.isMDXComponent=!0}}]);