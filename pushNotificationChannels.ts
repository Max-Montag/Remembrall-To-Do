import PushNotification from 'react-native-push-notification'

export const createNotificationChannels = (): void => {
  PushNotification.createChannel(
    {
      channelId: 'default-channel',
      channelName: 'Default Channel',
      channelDescription: 'A default channel for notifications',
      playSound: true,
      soundName: 'default',
      importance: 4,
      vibrate: true,
    },
    created => console.log(`createChannel returned '${created}'`),
  )
}
