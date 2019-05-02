
//////////////////// CONFIG APP

import Expo from 'expo';

const isStandAloneApp = Expo.Constants.appOwnership == "standalone";

const ConfigApp = {

    // backend url
    URL: "https://alqassim.x10.ltd",

    // facebook page url
    FACEBOOK: "https://facebook.com",

    // youtube page url
    YOUTUBE: "https://youtube.com",

    // twitter page url
    TWITTER: "https://twitter.com",

    // twitter page url
    INSTAGRAM: "https://instagram.com",

    // banner admob unit id, Replace with your-admob-unit-id
    BANNER_ID: "ca-app-pub-3940256099942544/6300978111",

    // testdevice id, DON'T CHANGE IT
    TESTDEVICE_ID : isStandAloneApp?"EMULATOR" : "EMULATOR"
};

export default ConfigApp;
