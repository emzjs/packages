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
- A guide to setup your command is required
    - Steps to create a guide:
      - Create a file in `guide/package_name.md` (e.g. `guide/example.md`)
      - The file name must match the `package_name` 
      - Content inside the guide must be related to the package/command

3. Create a file in `commands/{package_name}.js` (e.g. `commands/example.js`)
4. Export an object with this formatting :
```js
module.exports = {
  name: '{{ custom/blank }}',
  description: 'Describe the command, for the command list',
  async execute(interaction) {
    // your code
  }
}
```
- You must specify the `name`, `description` object keys
- The `execute` must be an async function

5. Make sure you've tested the command
6. Create a pull request with minimum 3 file changes in these directories : `packages`, `commands`, `guide`
