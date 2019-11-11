start android :
react-native run-android
react-native run-android --variant=release

test release :
./gradlew assembleRelease

generated APK :
app\build\outputs\apk\release

clean :
cd android
gradlew clean

list adb devices :
adb devices
