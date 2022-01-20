import {Injectable} from '@angular/core';
import {Cordova, AwesomeCordovaNativePlugin, Plugin} from '@awesome-cordova-plugins/core';

/**
 * @name HMSAvailability
 * @description
 * Ionic Native wrappers for the [cordova-plugin-hms-availability](https://www.npmjs.com/package/@hmscore/cordova-plugin-hms-availability)
 * @usage
 * @interfaces
 * @classes
 * @enums
 */

@Plugin({
    pluginName: 'HMSAvailability',
    plugin: 'cordova-plugin-hms-availability',
    pluginRef: 'HMSAvailability',
    repo: '',
    platforms: ['Android', 'iOS'],
})
@Injectable()
export class HMSAvailability extends AwesomeCordovaNativePlugin {
    /**
     * Checks whether HMS Core is installed.
     * @return {Promise<number>}
     */
    @Cordova({otherPromise: true})
    isHuaweiMobileServicesAvailable(minApkVersion?: number): Promise<number> {
        return;
    }

    @Cordova({otherPromise: true})
    isHuaweiMobileNoticeAvailable(): Promise<number> {
        return;
    }

    @Cordova({otherPromise: true})
    getApiMap(): Promise<ApiMap> {
        return;
    }

    @Cordova({otherPromise: true})
    getServicesVersionCode(): Promise<number> {
        return;
    }

    @Cordova({otherPromise: true})
    setServicesVersionCode(servicesVersionCode: number): Promise<void> {
        return;
    }

    @Cordova({otherPromise: true})
    isUserResolvableError(errorCode: number): Promise<boolean> {
        return;
    }

    @Cordova({otherPromise: true})
    getErrorString(errorCode: number): Promise<string> {
        return;
    }

    @Cordova({otherPromise: true})
    resolveError(errorCode: number, requestCode: number): Promise<void> {
        return;
    }

    @Cordova({otherPromise: true})
    showErrorDialogFragment(errorCode: number, requestCode: number, cancelListener?: () => void): Promise<boolean> {
        return;
    }

    @Cordova({otherPromise: true})
    showErrorNotification(errorCode: number): Promise<void> {
        return;
    }
}

interface ApiMap {
    'HuaweiIap.API': number,
    'HuaweiID.API': number,
    'HuaweiGame.API': number,
    'HuaweiPay.API': number,
    'HuaweiSns.API': number,
    'HuaweiOpenDevice.API': number,
    'HuaweiPPSkit.API': number,
    'HuaweiPush.API': number
}
