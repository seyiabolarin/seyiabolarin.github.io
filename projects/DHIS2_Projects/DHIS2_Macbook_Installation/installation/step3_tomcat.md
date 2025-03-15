# Step 3: Tomcat Server Configuration

## 3.1 Install Tomcat
Install Apache Tomcat using Homebrew:
```bash
brew install tomcat
```
Verify the installation:
```bash
catalina version
```

### Output Example
![Tomcat Version](../images/tomcat_version.png)

The output should display something like:
```
Server version: Apache Tomcat/9.0.71
Server built:   Sep 20 2023
```

## 3.2 Set Environment Variables
Add the following to your `~/.zshrc` file to set the `CATALINA_HOME` environment variable:
```bash
export CATALINA_HOME=$(brew --prefix)/opt/tomcat/libexec
source ~/.zshrc
```

## 3.3 Start the Tomcat Server
To start the Tomcat server, run:
```bash
$CATALINA_HOME/bin/startup.sh
```
Access the Tomcat homepage to verify the setup:
```
http://localhost:8080/
```

This confirms that the Apache Tomcat server is successfully installed and configured.
