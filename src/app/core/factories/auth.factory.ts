import { Platform } from '@ionic/angular';
import { StorageBackend, Requestor } from '@openid/appauth';
import { AuthService, Browser, ConsoleLogObserver } from 'ionic-appauth';
import { Plugins } from '@capacitor/core';
import { environment } from 'src/environments/environment';
import { NgZone } from '@angular/core';

const { App } = Plugins;

export let authFactory = (platform: Platform, ngZone: NgZone,
    requestor: Requestor, browser: Browser,  storage: StorageBackend) => {

    const authService = new AuthService(browser, storage, requestor);
    authService.authConfig = environment.auth_config;

    if (!platform.is('cordova')) {
        console.log('overide the redirect url with window.location.origin');
        authService.authConfig.redirect_url = window.location.origin + '/loginCallback';
        authService.authConfig.end_session_redirect_url = window.location.origin + '/logout';
    }

    if (platform.is('capacitor')) {
        console.log('add the appUrlOpen listener');
        App.addListener('appUrlOpen', (data: any) => {
            if (data.url !== undefined) {
                ngZone.run(() => {
                    authService.handleCallback(data.url);
                });
            }
        });
    }

    authService.addActionObserver(new ConsoleLogObserver());
    console.log('dump the config: ' + JSON.stringify(authService.authConfig));
    return authService;
};
