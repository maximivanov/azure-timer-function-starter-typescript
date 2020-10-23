# azure-timer-function-starter-node

Typescript starter for a timer-triggered (CRON job) Azure Function.

Motivation: I had some trouble setting up a local dev environment to run an Azure Function with a Timer trigger. Google and StackOverflow wisdom usually implies you're on Windows where Storage Emulator seems to be installed as part of developer toolkit. On Mac and Linux it has to be installed; as well as some configuration has to be made.

The code in this repo is for a minimal function which is triggered every minute and prints the timer object passed by the Azure binding.

Typescript code is almost non-existent in the starter repo but I included linter and security check scripts as a best practice for the time when code grows.

## Getting Started

### Prerequisites

- Node.js installed

### Installing

Install the Azure Functions Core Tools (Mac)

```sh
brew tap azure/functions
brew install azure-functions-core-tools@3
```

Install npm dependencies

```sh
npm i
```

Install [Azurite](https://github.com/Azure/Azurite) - an open-source Azure Storage Emulator, which is going to [replace the Storage Emulator](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-emulator).

There are a few ways to install it:

- [VS Code plugin](https://marketplace.visualstudio.com/items?itemName=Azurite.azurite)
- [azurite npm package](https://github.com/Azure/Azurite#npm)
- Run as [Docker container](https://github.com/Azure/Azurite#dockerhub)

Choose whichever works best for you. After installation you should have Azurite running locally and listening on a port.

### Configuration

For local development when using a storage emulator, `UseDevelopmentStorage=true` [shortcut](https://docs.microsoft.com/en-us/azure/storage/common/storage-configure-connection-string#connect-to-the-emulator-account-using-a-shortcut) can be used.

It lives in the git-ignored `local.settings.json`:

```json
{
  "IsEncrypted": false,
  "Values": {
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "AzureWebJobsStorage": "UseDevelopmentStorage=true"
  }
}
```

## Usage

Start the function app locally. It will trigger the function according to the schedule defined in `cron-job/function.json`. Here we have `0 */1 * * * *` which is at the top of every minute.

```sh
npm run start
```

Alternatively you can run/debug the function in VS Code, for that you'd need to install [Azure Functions for Visual Studio Code](https://github.com/Microsoft/vscode-azurefunctions)

### Coding Style & Linter

Make sure code has no syntax errors and is properly formatted.
Make sure docs are valid Markdown.

```sh
npm run lint
```

### Security Checks

Make sure there are no known vulnerabilities in dependencies.

```sh
npm run audit-security
```

## License

This project is licensed under the MIT License -
see the [LICENSE.md](LICENSE.md) file for details
