#import <Cordova/CDVPlugin.h>

@interface NGNicksPlugin : CDVPlugin {
}

- (void)echo:(CDVInvokedUrlCommand *)command;
- (void)getDate:(CDVInvokedUrlCommand *)command;

@end
