#import <Cordova/CDVPlugin.h>

@interface NicksPlugin : CDVPlugin {
}

- (void)echo:(CDVInvokedUrlCommand *)command;
- (void)getDate:(CDVInvokedUrlCommand *)command;

@end
