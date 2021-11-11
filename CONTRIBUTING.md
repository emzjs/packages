## Contribute A Command

### Note
1. Please credit the author if you submit a command from someone else's project
2. You should only submit a "Safe For Work" (SFW), family friendly command

### Instruction
1. Create a file in `packages/{library}/{package_name}` (e.g. `packages/discord.js/example-command`)
2. Create a json object in the file with these required object keys/values (example) :
```json
{
 "package_name": "awesome-help-command",
 "category": ["help", "list of commands"],
 "library": "discord.js",
 "description": "List of every commands",
 "author": "emzjs <https://emz.js.org>"
 "version": "1.0.0",
 "dependencies": {
   "discord.js": "^0.0.1"
 }
}
```
- You must specify every dependencies your command uses, including the library and version
- You may add these object keys/values (recognize by emz.pkg) :
```
"credit": "https://github.com/emzjs/package"
"required_permissions": ["READ_MESSAGES"]
"required_intents": ["GUILDS"]
```
