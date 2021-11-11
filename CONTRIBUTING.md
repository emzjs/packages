## Contribute A Command

### Note
1. Please credit the author if you submit a command from someone else's project
2. You should only submit a "Safe For Work" (SFW), family friendly command

### Instruction
1. Create a file in `packages/{library}/{package_name}` (e.g. `packages/discord.js/example-command`)
2. Create a json object in the file with these required object keys/values :
```json
{
 "package_name": "Specify A Name For Your Command (e.g. Awesome Help Command)",
 "category": ["(e.g. help)"],
 "library": "Specify A Library This Command Supports (e.g. discord.js)",
 "description": "Describe Your Command",
 "author": "Your Name <your_email/website:optional:>"
 "version": "Your Command's Version (e.g. 1.0.0)",
 "directory": "/commands/{{package_name}}",
 "dependencies": {
   "specify-required-dependencies-for-this-command": "^0.1.0",
   "example: emz": "^0.3.5",
   "discord.js": "^0.0.1"
 }
}```
