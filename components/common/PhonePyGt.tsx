import PhonepeGateway from 'phonepepg';

export const gateway = new PhonepeGateway({
    merchantId: 'M228XR6AHKBZ0',
    saltKey: '5368e0ab-2b33-40d4-b3c5-76ca3f2dd929',
    saltIndex: 1,
    isDev: false // false for production
  });