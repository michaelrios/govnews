govnews
=================

Local government document parsing for AI generated news


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/govnews.svg)](https://npmjs.org/package/govnews)
[![Downloads/week](https://img.shields.io/npm/dw/govnews.svg)](https://npmjs.org/package/govnews)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g govnews
$ govnews COMMAND
running command...
$ govnews (--version)
govnews/0.0.0 darwin-arm64 node-v20.14.0
$ govnews --help [COMMAND]
USAGE
  $ govnews COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`govnews hello PERSON`](#govnews-hello-person)
* [`govnews hello world`](#govnews-hello-world)
* [`govnews help [COMMAND]`](#govnews-help-command)
* [`govnews plugins`](#govnews-plugins)
* [`govnews plugins add PLUGIN`](#govnews-plugins-add-plugin)
* [`govnews plugins:inspect PLUGIN...`](#govnews-pluginsinspect-plugin)
* [`govnews plugins install PLUGIN`](#govnews-plugins-install-plugin)
* [`govnews plugins link PATH`](#govnews-plugins-link-path)
* [`govnews plugins remove [PLUGIN]`](#govnews-plugins-remove-plugin)
* [`govnews plugins reset`](#govnews-plugins-reset)
* [`govnews plugins uninstall [PLUGIN]`](#govnews-plugins-uninstall-plugin)
* [`govnews plugins unlink [PLUGIN]`](#govnews-plugins-unlink-plugin)
* [`govnews plugins update`](#govnews-plugins-update)

## `govnews hello PERSON`

Say hello

```
USAGE
  $ govnews hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ govnews hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/michaelrios/govnews/blob/v0.0.0/src/commands/hello/index.ts)_

## `govnews hello world`

Say hello world

```
USAGE
  $ govnews hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ govnews hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/michaelrios/govnews/blob/v0.0.0/src/commands/hello/world.ts)_

## `govnews help [COMMAND]`

Display help for govnews.

```
USAGE
  $ govnews help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for govnews.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.3/src/commands/help.ts)_

## `govnews plugins`

List installed plugins.

```
USAGE
  $ govnews plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ govnews plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.2/src/commands/plugins/index.ts)_

## `govnews plugins add PLUGIN`

Installs a plugin into govnews.

```
USAGE
  $ govnews plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into govnews.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the GOVNEWS_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the GOVNEWS_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ govnews plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ govnews plugins add myplugin

  Install a plugin from a github url.

    $ govnews plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ govnews plugins add someuser/someplugin
```

## `govnews plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ govnews plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ govnews plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.2/src/commands/plugins/inspect.ts)_

## `govnews plugins install PLUGIN`

Installs a plugin into govnews.

```
USAGE
  $ govnews plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into govnews.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the GOVNEWS_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the GOVNEWS_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ govnews plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ govnews plugins install myplugin

  Install a plugin from a github url.

    $ govnews plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ govnews plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.2/src/commands/plugins/install.ts)_

## `govnews plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ govnews plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ govnews plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.2/src/commands/plugins/link.ts)_

## `govnews plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ govnews plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ govnews plugins unlink
  $ govnews plugins remove

EXAMPLES
  $ govnews plugins remove myplugin
```

## `govnews plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ govnews plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.2/src/commands/plugins/reset.ts)_

## `govnews plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ govnews plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ govnews plugins unlink
  $ govnews plugins remove

EXAMPLES
  $ govnews plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.2/src/commands/plugins/uninstall.ts)_

## `govnews plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ govnews plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ govnews plugins unlink
  $ govnews plugins remove

EXAMPLES
  $ govnews plugins unlink myplugin
```

## `govnews plugins update`

Update installed plugins.

```
USAGE
  $ govnews plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.2/src/commands/plugins/update.ts)_
<!-- commandsstop -->
