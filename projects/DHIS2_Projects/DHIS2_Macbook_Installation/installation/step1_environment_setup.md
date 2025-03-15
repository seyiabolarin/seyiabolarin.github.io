# Step 1: Environment Setup

## 1.1 Install Homebrew
To install Homebrew, run the following command in your terminal:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## 1.2 Install JDK 17
Install the OpenJDK 17 using Homebrew:
```bash
brew install openjdk@17
```
Link the JDK to your system:
```bash
sudo ln -sfn $(brew --prefix)/opt/openjdk@17/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-17.jdk
```
Verify the installation:
```bash
java -version
```

### Output Example
![Java Version](../images/java_version.png)

The output should display something like:
```
openjdk version "17.0.8" 2024-01-10 LTS
OpenJDK Runtime Environment
OpenJDK 64-Bit Server VM
```

This confirms that Java 17 is successfully installed and linked on your system.
