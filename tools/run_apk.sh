echo "=== Uninstall APK ==="
adb uninstall com.apptitle.apptitle

echo "=== Install APK ==="
adb install build/debug/apptitle/android/android-armv7-debug.apk

echo "=== Run APK ==="
adb shell monkey -p com.apptitle.apptitle -c android.intent.category.LAUNCHER 1

