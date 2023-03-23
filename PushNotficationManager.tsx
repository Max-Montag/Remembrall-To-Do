import PushNotification from 'react-native-push-notification'

const showNotification = (): void => {
  PushNotification.localNotification({
    channelId: 'default-channel',
    title: 'My Title',
    message: 'My Notification Text',
    playSound: true,
    soundName: 'default',
    vibrate: true,
  })
}
