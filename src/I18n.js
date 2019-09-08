import I18n from 'react-native-i18n';
const  Langoage ={
    'en':{
        "conctinError" : "This application cannot be used without internet connection",
        "lang"         : "English",
        "code"         : "en"
    },
    'ar':{
        "conctinError" : "لايمكن استخدام هذا التطبيق دون الإتصال بالإنترنت" ,
        "lang"         : "عربـي",
        "code"         : "ar"
    }
};
I18n.fallbacks = true;
I18n.translations = Langoage ;


export default I18n ;