webapp
===
A web based application template.

It comes with build scripts that make it possible to target:

- Windows
- Mac OS X
- Linux
- Android
- iOS (*Future*)

Copy or fork it. Modify it. Create an application.

Technology
---
Program an application with the following:

- HTML
- CSS
- Javascript

Target the web, desktops, and mobile platforms with:

- NW.js
- Cordova

Requirements
---
To use all of this project's features, the following programs are required:

- nodejs
- npm (node package manager)
- grunt-cli

Installation
---
Checkout or [download](https://github.com/puzzud/webapp/archive/master.zip) this project for GitHub.

Install **nodejs** and **npm**.

For Windows, it's possible to download it from [https://nodejs.org/en/download](https://nodejs.org/en/download).

Install **grunt-cli**, via the command line:

```
npm install -g grunt-cli
```

From the same console, navigate to the **webapp** root directory.

Install its dependencies, via the command line (this can take a few minutes):

```
npm install
```

Building
---
**Commands**

Use the following commands to create debug builds:

```
npm run build_web
```

```
npm run build_desktop
```

```
npm run build_android
```

```
npm run build_mobile
```

```
npm run build
```

*npm run build* will build for all possible targets.

Use the following commands to create release builds:

```
npm run release_web
```

```
npm run release_desktop
```

```
npm run release_android
```

```
npm run release_mobile
```

```
npm run release
```

*npm run release* will build release builds for all possible targets.

**Location**

Resulting debug builds will populate */path/to/webapp/build/debug/apptitle*.
Resulting release builds will populate */path/to/webapp/build/debug/apptitle-<version>*.

The build directories will be contain the follow target subdirectories.
- win64
- osx64
- linux64
- android
- ios (*Future*)
- web

Usage
---
**Web**

To run the web version of the application (particularly during development), set up a web server to point to the root direcctory of **webapp**.

It's possible to create a basic web server with this Python command:

```
python -m SimpleHTTPServer 8081 /path/to/webapp
```

Then, navigate a web server to:

[http://localhost:8081](http://localhost:8081)

It's possible to start Google Chrome with the following parameter to allow a web browser to read directly from the **webapp** file system directory:

```
google-chrome  --allow-file-access-from-files
```

**Desktop**

Desktop OS executables are accessible in the build directories mentioned in the **Building** section.

**Android**

APKs are accessible in the *android* build directory mentioned in the **Building** section.

**iOS**

*(Future)*
