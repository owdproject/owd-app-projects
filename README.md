# Project module for OWD Client
> The perfect module to show your portfolio in a folder-like way

<p>
    <a href="https://github.com/owdproject/owd-client/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-green.svg" /></a>
    <a href="https://github.com/owdproject/owd-client"><img src="https://img.shields.io/badge/owd-client-3A9CB6?logo=vue" /></a>
    <a href="https://patreon.com/hacklover"><img src="https://img.shields.io/badge/become-a%20patron-orange" alt="Become a Patron" /></a>
    <a href="https://hacklover.net/discord"><img src="https://img.shields.io/badge/chat-on%20discord-7289da.svg" alt="Join us on Discord" /></a>
</p>

## Demo
[Try it out](https://hacklover.net), just open the terminal and type "projects"

## Features
- Show projects in a folder
- Open project link in a new tab
- Open project link in an iframe window (optional)

## Quick install
- Copy the content of the `client` module folder into `owd-client/src/modules/projects`
- Copy the configuration module into `owd-client/config/projects/config.json`
- Add the reference of this module into `owd-client/config/modules.json` 

## Configuration
#### Show project in an OWD window iframe
Add to the project configuration the "window" property to define the window name (for example `WindowProjectACME`) to open when you click on it.
It must correspond to an existing window that uses the <WindowIframe> component. A demo is attached to this module.
```json
"example": {
  "title": "ACME",
  "name": "ACME",
  "url": "https://acme.gov",
  "target": "_blank",
  "window": "WindowProjectACME",
  "icon": "data:image/png;base64,iVB...",
  "year": "1988",
  "end": 0,
  "comingSoon": false,
  "inactive": false,
  "hidden": false
}
```

## License
This project is released under the [MIT License](LICENSE).