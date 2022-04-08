import { Meteor } from 'meteor/meteor'
import { ServiceConfiguration } from 'meteor/service-configuration'

Meteor.startup(() => {})

ServiceConfiguration.configurations.upsert(
  { service: 'github' },
  {
    $set: {
      loginStyle: 'popup',
      clientId: 'ec5bc93fb62e77a1d968', // insert your clientId here
      secret: '49cdd36a3c238ffb00c0694090cf8086f38bd7fd', // insert your secret here
    },
  },
)
