<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DHIS2 Installation Guide on macOS (M1)</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 20px; }
        h1, h2, h3, h4 { color: #333; }
        code { background-color: #f4f4f4; padding: 4px; border-radius: 4px; }
        pre { background-color: #f4f4f4; padding: 10px; border-radius: 4px; overflow-x: auto; }
        table { border-collapse: collapse; width: 100%; margin: 10px 0; }
        th, td { padding: 8px; text-align: left; border: 1px solid #ddd; }
        th { background-color: #f4f4f4; }
        img { max-width: 100%; height: auto; }
    </style>
</head>
<body>
    <h1>DHIS2 Installation Guide on macOS (M1)</h1>
    <p>This guide provides a step-by-step process for installing <strong>DHIS2</strong> on a <strong>MacBook with an M1 (Apple Silicon) processor</strong>. It covers environment setup, PostgreSQL installation, Tomcat server configuration, and DHIS2 deployment.</p>
    <h2>🚀 Why DHIS2?</h2>
    <p>DHIS2 (District Health Information System 2) is an open-source platform widely used for health information management and monitoring. It is designed to capture, analyze, and visualize data, making it an essential tool for public health systems worldwide.</p>
    <h2>🛠️ System Requirements</h2>
    <ul>
        <li>Operating System: macOS Monterey or later</li>
        <li>Processor: Apple Silicon (M1 or later)</li>
        <li>Java Development Kit (JDK): Version 11</li>
        <li>Database: PostgreSQL (Version 12 or higher)</li>
        <li>Web Server: Apache Tomcat (Version 9 or higher)</li>
        <li>Disk Space: Minimum 10 GB free</li>
    </ul>
    <h2>📂 Project Structure</h2>
    <pre>
DHIS2-Installation/
├── README.md
├── installation/
│   ├── step1_environment_setup.md
│   ├── step2_postgresql.md
│   ├── step3_tomcat.md
│   └── step4_dhis2_configuration.md
└── images/
    ├── java_version.png
    ├── postgres_version.png
    ├── tomcat_version.png
    └── dhis2_login.png
    </pre>
    <h2>📝 Installation Steps</h2>
    <ol>
        <li>Environment Setup: Install Homebrew, OpenJDK 11, and verify the Java installation.</li>
        <li>PostgreSQL Installation: Install PostgreSQL using Homebrew, create a database and user, and set up configurations.</li>
        <li>Tomcat Server Configuration: Install Tomcat, configure environment variables, and deploy the DHIS2 WAR file.</li>
        <li>DHIS2 Configuration: Set up the DHIS2 home directory, configure the dhis.conf file, and start the server.</li>
    </ol>
    <h2>🌐 Accessing DHIS2</h2>
    <p>Once the server is up and running, access DHIS2 at:</p>
    <pre>http://localhost:8080/dhis</pre>
    <p><strong>Default Login Credentials:</strong></p>
    <ul>
        <li>Username: admin</li>
        <li>Password: district</li>
    </ul>
    <h2>🖼️ Screenshots</h2>
    <table>
        <tr><th>Step</th><th>Screenshot</th></tr>
        <tr><td>Environment Setup</td><td><img src="images/java_version.png" alt="Java Version"></td></tr>
        <tr><td>PostgreSQL Installation</td><td><img src="images/postgres_version.png" alt="PostgreSQL Version"></td></tr>
        <tr><td>Tomcat Server Configuration</td><td><img src="images/tomcat_version.png" alt="Tomcat Version"></td></tr>
        <tr><td>DHIS2 Login Page</td><td><img src="images/dhis2_login.png" alt="DHIS2 Login"></td></tr>
    </table>
    <h2>🚑 Troubleshooting</h2>
    <p>Here are some common issues and solutions:</p>
    <ul>
        <li><strong>Java Version Not Recognized:</strong> Check with <code>java -version</code> and ensure correct installation.</li>
        <li><strong>PostgreSQL Connection Error:</strong> Restart the service with <code>brew services restart postgresql</code>.</li>
        <li><strong>DHIS2 Not Starting:</strong> Check Tomcat logs using <code>tail -f $CATALINA_HOME/logs/catalina.out</code>.</li>
    </ul>
    <h2>💡 Contributing</h2>
    <p>If you encounter issues or have suggestions, feel free to open an issue or submit a pull request.</p>
    <h2>📄 License</h2>
    <p>This project is licensed under the MIT License. See the LICENSE file for details.</p>
    <h2>✨ Acknowledgements</h2>
    <ul>
        <li>DHIS2 Documentation</li>
        <li>Homebrew</li>
        <li>PostgreSQL Official Site</li>
        <li>Apache Tomcat</li>
    </ul>
</body>
</html>
