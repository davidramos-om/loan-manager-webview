
# Errors:

### CommandError: No development build (com.babylon-labs.baby-loan) for this project is installed. Please make and install a development build on the device first.

Solution:
```bash
    # refers to [expo doc](https://docs.expo.dev/develop/development-builds/create-a-build/?redirected)
    # essentially, you need to run `eas build --platform ios` or `eas build --platform android` first
 npm run build-ios-dev 
```


### Authentication with Apple Developer Portal failed!
Cookie not in this host's domain. Cookie:developer-mdn.apple.com Request:developer.apple.com

Solution:
```bash
    # update eas-cli to the latest version did the trick, but not sure if it's the only solution
    npm install -g eas-cli
```