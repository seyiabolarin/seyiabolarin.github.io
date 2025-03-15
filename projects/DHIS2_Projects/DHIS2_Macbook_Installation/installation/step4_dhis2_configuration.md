# Step 4

## DHIS2 Configuration
Download the latest DHIS2 WAR file from the official DHIS2 releases:
```bash
curl -L -o dhis.war https://releases.dhis2.org/2.39/dhis.war
```
Move the WAR file to the Tomcat webapps directory:
```bash
mv dhis.war $CATALINA_HOME/webapps/
```

## Configure DHIS2 Settings
Create the DHIS2 home directory:
```bash
mkdir -p ~/dhis2_home
```
Create the DHIS2 configuration file:
```bash
nano ~/dhis2_home/dhis.conf
```

Add the following configuration:
```
# PostgreSQL Configuration
connection.url = jdbc:postgresql://localhost:5432/dhis2
connection.username = dhis
connection.password = dhis
connection.driver_class = org.postgresql.Driver
connection.dialect = org.hibernate.dialect.PostgreSQLDialect

# Database Connection Pooling
connection.pool.max_size = 80

# Encryption Password (Change to a strong and unique password)
encryption.password = StrongUniquePassword123

# Server Configuration
server.port = 8080

# External Directory for File Storage
system.external_dir = /home/dhis/config
```

## Start DHIS2
Start the Tomcat server to run DHIS2:
```bash
$CATALINA_HOME/bin/startup.sh
```

## Access DHIS2
Open your browser and navigate to:
```
http://localhost:8080/dhis
```

### Login Page Example
Access the DHIS2 login page and use the default credentials:
- **Username:** admin
- **Password:** district

This confirms that DHIS2 is successfully configured and running.
