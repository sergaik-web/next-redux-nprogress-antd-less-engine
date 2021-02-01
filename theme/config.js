const Config = {
  mainSettings: {
    title: 'Title',
    mainUrl: 'MainPageUrl',
    supportUrl: 'supportURL',
    countryPhoneCode: '7',
    countryPhoneMask: '+# (###) ### ## ##',
    dateFormat: 'DD.MM.YYYY'
  },
  mainMenu: [
    {
      title: 'История заказов',
      url: '/',
      icon: 'FieldTimeOutlined',
    },
    {
      title: 'Лицевой счет',
      url: '/bill',
      icon: 'CreditCardOutlined',
    },
    {
      title: 'Настройки',
      url: '/settings/profile',
      icon: 'SettingOutlined',
    },
    {
      title: 'Документы',
      icon: 'FileTextOutlined',
      url: '/documents',
      subItems: [
        {
          title: 'Акты',
          portableTitle: 'Акты',
          key: 'acts',
          url: '/documents/acts',
        },
        {
          title: 'Счета',
          portableTitle: 'Счета',
          key: 'invoice',
          url: '/documents/invoice',
        },
        {
          title: 'Транзакции',
          portableTitle: 'Транзакции',
          key: 'transactions',
          url: '/documents/transactions',
        },
      ],
    },
    {
      title: 'Вопросы  и ответы',
      url: '/faq',
      icon: 'QuestionCircleOutlined',
    },
    {
      title: 'Поддержка',
      url: 'https://help.taxibeloe.ru/help',
      icon: 'MessageOutlined',
    },
  ],
  mainMenuNDS: [
    {
      title: 'История заказов',
      url: '/',
      icon: 'FieldTimeOutlined',
    },
    {
      title: 'Лицевой счет',
      url: '/bill',
      icon: 'CreditCardOutlined',
    },
    {
      title: 'Настройки',
      url: '/settings/profile',
      icon: 'SettingOutlined',
    },
    {
      title: 'Документы',
      icon: 'FileTextOutlined',
      url: '/documents',
      subItems: [
        {
          title: 'Акты',
          portableTitle: 'Акты',
          key: 'acts',
          url: '/documents/acts',
        },
        {
          title: 'Счета',
          portableTitle: 'Счета',
          key: 'invoice',
          url: '/documents/invoice',
        },
        {
          title: 'Счета-фактуры',
          portableTitle: 'СФ',
          key: 'factureInvoice',
          url: '/documents/factureInvoice',
        },
        {
          title: 'УПД',
          portableTitle: 'УПД',
          key: 'updInvoice',
          url: '/documents/updInvoice',
        },
        {
          title: 'Транзакции',
          portableTitle: 'Транзакции',
          key: 'transactions',
          url: '/documents/transactions',
        },
      ],
    },
    {
      title: 'Вопросы  и ответы',
      url: '/faq',
      icon: 'QuestionCircleOutlined',
    },
    {
      title: 'Поддержка',
      url: 'https://help.taxibeloe.ru/help',
      icon: 'MessageOutlined',
    },
  ],
  drawerMenu: [
    {
      title: 'Главная',
      url: 'https://taxibeloe.ru',
    },
    {
      title: 'Для корпораций',
      url: 'https://taxibeloe.ru/korporativnym-klientam',
    },
    {
      title: 'Рекламодателям',
      url: 'https://taxibeloe.ru/reklamodatelyam/razmestit-reklamu',
    },
    {
      title: 'Способы оплаты',
      url: 'https://taxibeloe.ru/oplata-uslug-platezhnymi-kartami-layn',
    },
    {
      title: 'Вакансии',
      url: 'https://taxibeloe.ru/oplata-uslug-platezhnymi-kartami-layn',
    },
    {
      title: 'Документы',
      url: 'https://help.taxibeloe.ru/docs/privacy-policy',
    },
    {
      title: 'Вопросы  и ответы',
      url: 'https://help.taxibeloe.ru/docs/faq',
    },
    {
      title: 'Поддержка',
      url: 'https://help.taxibeloe.ru/help',
    },
  ],
  orderStatus: [
    {
      eng: 'NEW',
      rus: 'Новая'
    },
    {
      eng: 'CONFIRM',
      rus: 'Принята'
    },
    {
      eng: 'LEFT',
      rus: 'Выехал'
    },
    {
      eng: 'ON_SPOT',
      rus: 'На месте'
    },
    {
      eng: 'RIDE',
      rus: 'В пути'
    },
    {
      eng: 'FINISH',
      rus: 'Завершен'
    },
    {
      eng: 'CANCELED_DRIVER',
      rus: 'Отказ водителя'
    },
    {
      eng: 'NO_DRIVER',
      rus: 'Нет водителя'
    },
    {
      eng: 'FIND_DRIVER',
      rus: 'Поиск водителя'
    },
    {
      eng: 'CANCELED_CLIENT',
      rus: 'Отказ клиента'
    },
    {
      eng: 'MODERATE',
      rus: 'Требует подтверждения'
    },
    {
      eng: 'PREBOOK',
      rus: 'Предварительная'
    }
    ,
    {
      eng: 'PAYMENT',
      rus: 'Ожидание оплаты'
    }
  ],
  payTypes: [
    {
      eng: 'CASH',
      rus: 'НАЛИЧНЫЙ'
    },
    {
      eng: 'CASHLESS',
      rus: 'БЕЗНАЛ'
    },
    {
      eng: 'TERMINAL',
      rus: 'КАРТОЙ'
    }
  ],
  transactionTypes: [
    {
      eng: 'PUSH',
      rus: 'ПОПОЛНЕНИЕ'
    },
    {
      eng: 'PULL',
      rus: 'ОПЛАТА'
    },
    {
      eng: 'CASHLESS',
      rus: 'БЕЗНАЛ'
    },
    {
      eng: 'SERVICES',
      rus: 'УСЛУГА'
    },
    {
      eng: 'PENALTY',
      rus: 'ШТРАФ'
    },
    {
      eng: 'PERCENTS',
      rus: 'ПРОЦЕНТ'
    },
    {
      eng: 'COMMISSION',
      rus: 'КОММИССИЯ'
    },
    {
      eng: 'BONUS',
      rus: 'БОНУС'
    },
    {
      eng: 'DEBTS',
      rus: 'ЗАДОЛЖЕНОСТЬ'
    },
  ]
};

export default Config;
