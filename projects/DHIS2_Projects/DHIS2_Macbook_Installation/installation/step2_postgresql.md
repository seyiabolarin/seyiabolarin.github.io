# Step 2: PostgreSQL Installation

## 2.1 Install PostgreSQL 14
Install PostgreSQL 14 using Homebrew:
```bash
brew install postgresql@14
```
Start the PostgreSQL service:
```bash
brew services start postgresql@14
```

## 2.2 Verify Installation
Check the version to ensure PostgreSQL is installed correctly:
```bash
psql --version
```

### Output Example
![PostgreSQL Version](../images/postgres_version.png)

The output should display something like:
```
psql (PostgreSQL) 14.5
```

## 2.3 Install pgAdmin (GUI Interface)
pgAdmin provides a graphical interface to manage your PostgreSQL databases.
Install pgAdmin using Homebrew:
```bash
brew install --cask pgadmin4
```

### Launch pgAdmin
Open pgAdmin from your Applications or via Terminal:
```bash
open /Applications/pgAdmin\ 4.app
```

### Link PostgreSQL to pgAdmin
1. Open pgAdmin and create a new server connection.
2. Enter the following details:
   - **Name:** DHIS2 Database
   - **Host:** localhost
   - **Port:** 5432
   - **Username:** dhis
   - **Password:** dhis
3. Click **Save** to connect.

## 2.4 Create a User and Database
Create a new user named 'dhis':
```bash
createuser -s dhis
```
Set the password for the user:
```bash
psql -c "ALTER USER dhis WITH PASSWORD 'dhis';"
```
Create a new database owned by the user:
```bash
createdb -O dhis dhis2
```

### Verify the Database in pgAdmin
Open pgAdmin and navigate to **Servers → DHIS2 Database → Databases** to see your new database.

This confirms that PostgreSQL 14 and pgAdmin are successfully installed and configured.
