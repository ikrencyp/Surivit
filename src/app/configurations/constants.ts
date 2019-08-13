import { FILE_PATH } from './file-path';

export const CONSTANTS = {
  IS_IE: /msie\s|trident\//i.test(window.navigator.userAgent),
  STYLES: {
    CLASS: {
      ACTIVE: 'active'
    }
  },
  DISPLAY: {
    DIGEST: 767.98
  },
  PAGES: {
    UNAUTHENTICATED: {
      HOME: {
        PATH: '/home',
        NAME: 'COMMON.HOME',
        COMPONENTS: {
          HOW_WE_WORK: [
            {
              CLASS: 'col-lg-4 margin-bottom-content',
              ROW: [
                {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.HOME.ESTABLISH_AND_DEFINE_THE_RELATIONSHIP_WITH_THE_CLIENT,
                  ORDER: '1',
                  TITLE: 'UNAUTHENTICATION.HOME.ESTABLISH_AND_DEFINE_THE_RELATIONSHIP_WITH_THE_CLIENT',
                  SUB_TITLE: 'UNAUTHENTICATION.HOME.SUB_ESTABLISH_AND_DEFINE_THE_RELATIONSHIP_WITH_THE_CLIENT'
                },
                {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.HOME.EXPLORE_A_STATE_OF_YOUR_FINANCIAL_WELL_BEING,
                  ORDER: '2',
                  TITLE: 'UNAUTHENTICATION.HOME.EXPLORE_A_STATE_OF_YOUR_FINANCIAL_WELL_BEING',
                  SUB_TITLE: 'UNAUTHENTICATION.HOME.SUB_EXPLORE_A_STATE_OF_YOUR_FINANCIAL_WELL_BEING'
                },
                {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.HOME.START_WITH_YOUR_DREAMS_AND_IDENTIFY_YOUR_GOALS,
                  ORDER: '3',
                  TITLE: 'UNAUTHENTICATION.HOME.START_WITH_YOUR_DREAMS_AND_IDENTIFY_YOUR_GOALS',
                  SUB_TITLE: 'UNAUTHENTICATION.HOME.SUB_START_WITH_YOUR_DREAMS_AND_IDENTIFY_YOUR_GOALS'
                }
              ]
            },
            {
              CLASS: 'col-lg-4 margin-bottom-content',
              ROW: [
                {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.HOME.DEVELOP_THE_FINANCIAL_PLAN_TO_ADDRESS_THE_CLIENT_S_GOALS,
                  ORDER: '4',
                  TITLE: 'UNAUTHENTICATION.HOME.DEVELOP_THE_FINANCIAL_PLAN_TO_ADDRESS_THE_CLIENT_S_GOALS',
                  SUB_TITLE: 'UNAUTHENTICATION.HOME.SUB_DEVELOP_THE_FINANCIAL_PLAN_TO_ADDRESS_THE_CLIENT_S_GOALS'
                },
                {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.HOME.PRESENT_THE_FINANCIAL_PLAN_TO_THE_CLIENT,
                  ORDER: '5',
                  TITLE: 'UNAUTHENTICATION.HOME.PRESENT_THE_FINANCIAL_PLAN_TO_THE_CLIENT',
                  SUB_TITLE: 'UNAUTHENTICATION.HOME.SUB_PRESENT_THE_FINANCIAL_PLAN_TO_THE_CLIENT'
                },
                {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.HOME.REVIEW_THE_CLIENT_S_SITUATION_AND_ADJUST_THE_PLAN_REGULARLY,
                  ORDER: '6',
                  TITLE: 'UNAUTHENTICATION.HOME.REVIEW_THE_CLIENT_S_SITUATION_AND_ADJUST_THE_PLAN_REGULARLY',
                  SUB_TITLE: 'UNAUTHENTICATION.HOME.SUB_REVIEW_THE_CLIENT_S_SITUATION_AND_ADJUST_THE_PLAN_REGULARLY'
                }
              ]
            }
          ],
          SERVICES: [
            {
              CLASS: 'col-lg-3 margin-bottom-content',
              ROW: [
                {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.HOME.ACCIDENT_AND_HEALTH_PROTECTION,
                  TITLE: 'UNAUTHENTICATION.HOME.ACCIDENT_AND_HEALTH_PROTECTION'
                },
                {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.HOME.ESTATE_PLANNING,
                  TITLE: 'UNAUTHENTICATION.HOME.ESTATE_PLANNING'
                },
                {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.HOME.RETIREMENT_PLANNING,
                  TITLE: 'UNAUTHENTICATION.HOME.RETIREMENT_PLANNING'
                },
                {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.HOME.FAMILY_INCOME_PROTECTION,
                  TITLE: 'UNAUTHENTICATION.HOME.FAMILY_INCOME_PROTECTION'
                }
              ]
            },
            {
              CLASS: 'col-lg-3 margin-bottom-content',
              ROW: [
                {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.HOME.EDUCATION_PLANNING,
                  TITLE: 'UNAUTHENTICATION.HOME.EDUCATION_PLANNING'
                },
                {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.HOME.INVESMENT_PLANNING,
                  TITLE: 'UNAUTHENTICATION.HOME.INVESMENT_PLANNING'
                },
                {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.HOME.TAX_PLANNING,
                  TITLE: 'UNAUTHENTICATION.HOME.TAX_PLANNING'
                },
                {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.HOME.LONG_TERM_HEALTH_CARE,
                  TITLE: 'UNAUTHENTICATION.HOME.LONG_TERM_HEALTH_CARE'
                }
              ]
            }
          ]
        }
      },
      COMPANY: {
        PATH: '/company',
        NAME: 'COMMON.COMPANY',
        COMPONENTS: {
          STAFFS: [
            {
              CLASS: 'col-lg-6 margin-bottom-content',
              ROW: [
                {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.COMPANY.K_SURIVIT,
                  NAME: 'UNAUTHENTICATION.COMPANY.STAFFS.K_SURIVIT.NAME',
                  NICK_NAME: 'UNAUTHENTICATION.COMPANY.STAFFS.K_SURIVIT.NICK_NAME',
                  ROLE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_SURIVIT.ROLE',
                  CONTACT: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_SURIVIT.CONTACT_1',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_SURIVIT.CONTACT_2',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_SURIVIT.CONTACT_3',
                    }
                  ],
                  EDUCATION_EXPERIENCE: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_SURIVIT.EDUCATION_EXPERIENCE_1',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_SURIVIT.EDUCATION_EXPERIENCE_2',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_SURIVIT.EDUCATION_EXPERIENCE_3',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_SURIVIT.EDUCATION_EXPERIENCE_4',
                    }
                  ],
                  JOB_EXPERIENCE: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_SURIVIT.JOB_EXPERIENCE_1',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_SURIVIT.JOB_EXPERIENCE_2',
                    }
                  ]
                }, {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.COMPANY.K_LADDAWAN,
                  NAME: 'UNAUTHENTICATION.COMPANY.STAFFS.K_LADDAWAN.NAME',
                  NICK_NAME: 'UNAUTHENTICATION.COMPANY.STAFFS.K_LADDAWAN.NICK_NAME',
                  ROLE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_LADDAWAN.ROLE',
                  CONTACT: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_LADDAWAN.CONTACT_1',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_LADDAWAN.CONTACT_2',
                    }
                  ],
                  EDUCATION_EXPERIENCE: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_LADDAWAN.EDUCATION_EXPERIENCE_1',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_LADDAWAN.EDUCATION_EXPERIENCE_2',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_LADDAWAN.EDUCATION_EXPERIENCE_3',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_LADDAWAN.EDUCATION_EXPERIENCE_4',
                    }
                  ],
                  JOB_EXPERIENCE: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_LADDAWAN.JOB_EXPERIENCE_1',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_LADDAWAN.JOB_EXPERIENCE_2',
                    }
                  ]
                }
              ]
            }, {
              CLASS: 'col-lg-4 margin-bottom-content',
              ROW: [
                {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.COMPANY.K_RUNGRUDEE,
                  NAME: 'UNAUTHENTICATION.COMPANY.STAFFS.K_RUNGRUDEE.NAME',
                  NICK_NAME: 'UNAUTHENTICATION.COMPANY.STAFFS.K_RUNGRUDEE.NICK_NAME',
                  ROLE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_RUNGRUDEE.ROLE',
                  CONTACT: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_RUNGRUDEE.CONTACT_1',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_RUNGRUDEE.CONTACT_2',
                    }
                  ],
                  EDUCATION_EXPERIENCE: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_RUNGRUDEE.EDUCATION_EXPERIENCE_1',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_RUNGRUDEE.EDUCATION_EXPERIENCE_2',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_RUNGRUDEE.EDUCATION_EXPERIENCE_3',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_RUNGRUDEE.EDUCATION_EXPERIENCE_4',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_RUNGRUDEE.EDUCATION_EXPERIENCE_5',
                    }
                  ],
                  JOB_EXPERIENCE: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_RUNGRUDEE.JOB_EXPERIENCE_1',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_RUNGRUDEE.JOB_EXPERIENCE_2',
                    }
                  ]

                }, {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.COMPANY.K_INGCHARIDA,
                  NAME: 'UNAUTHENTICATION.COMPANY.STAFFS.K_INGCHARIDA.NAME',
                  NICK_NAME: 'UNAUTHENTICATION.COMPANY.STAFFS.K_INGCHARIDA.NICK_NAME',
                  ROLE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_INGCHARIDA.ROLE',
                  CONTACT: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_INGCHARIDA.CONTACT_1',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_INGCHARIDA.CONTACT_2',
                    }
                  ],
                  EDUCATION_EXPERIENCE: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_INGCHARIDA.EDUCATION_EXPERIENCE_1',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_INGCHARIDA.EDUCATION_EXPERIENCE_2',
                    }
                  ],
                  JOB_EXPERIENCE: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_INGCHARIDA.JOB_EXPERIENCE_1',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_INGCHARIDA.JOB_EXPERIENCE_2',
                    }
                  ]

                }, {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.COMPANY.K_WONGNARIN,
                  NAME: 'UNAUTHENTICATION.COMPANY.STAFFS.K_WONGNARIN.NAME',
                  NICK_NAME: 'UNAUTHENTICATION.COMPANY.STAFFS.K_WONGNARIN.NICK_NAME',
                  ROLE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_WONGNARIN.ROLE',
                  CONTACT: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_WONGNARIN.CONTACT_1',
                    }
                  ],
                  EDUCATION_EXPERIENCE: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_WONGNARIN.EDUCATION_EXPERIENCE_1',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_WONGNARIN.EDUCATION_EXPERIENCE_2',
                    }
                  ],
                  JOB_EXPERIENCE: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_WONGNARIN.JOB_EXPERIENCE_1',
                    }
                  ]
                }
              ]
            }, {
              CLASS: 'col-lg-4 margin-bottom-content',
              ROW: [
                {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.COMPANY.K_CHANOKNUN,
                  NAME: 'UNAUTHENTICATION.COMPANY.STAFFS.K_CHANOKNUN.NAME',
                  NICK_NAME: 'UNAUTHENTICATION.COMPANY.STAFFS.K_CHANOKNUN.NICK_NAME',
                  ROLE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_CHANOKNUN.ROLE',
                  CONTACT: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_CHANOKNUN.CONTACT_1',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_CHANOKNUN.CONTACT_2',
                    },
                  ],
                  EDUCATION_EXPERIENCE: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_CHANOKNUN.EDUCATION_EXPERIENCE_1',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_CHANOKNUN.EDUCATION_EXPERIENCE_2',
                    }
                  ],
                  JOB_EXPERIENCE: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_CHANOKNUN.JOB_EXPERIENCE_1',
                    }
                  ]
                }, {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.COMPANY.K_SUNTI,
                  NAME: 'UNAUTHENTICATION.COMPANY.STAFFS.K_SUNTI.NAME',
                  NICK_NAME: 'UNAUTHENTICATION.COMPANY.STAFFS.K_SUNTI.NICK_NAME',
                  ROLE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_SUNTI.ROLE',
                  CONTACT: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_SUNTI.CONTACT_1',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_SUNTI.CONTACT_2',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_SUNTI.CONTACT_3',
                    }
                  ],
                  EDUCATION_EXPERIENCE: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_SUNTI.EDUCATION_EXPERIENCE_1',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_SUNTI.EDUCATION_EXPERIENCE_2',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_SUNTI.EDUCATION_EXPERIENCE_3',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_SUNTI.EDUCATION_EXPERIENCE_4',
                    }
                  ],
                  JOB_EXPERIENCE: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_SUNTI.JOB_EXPERIENCE_1',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_SUNTI.JOB_EXPERIENCE_2',
                    }
                  ]
                }, {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.COMPANY.K_NUTCHYA,
                  NAME: 'UNAUTHENTICATION.COMPANY.STAFFS.K_NUTCHYA.NAME',
                  NICK_NAME: 'UNAUTHENTICATION.COMPANY.STAFFS.K_NUTCHYA.NICK_NAME',
                  ROLE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_NUTCHYA.ROLE',
                  CONTACT: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_NUTCHYA.CONTACT_1',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_NUTCHYA.CONTACT_2',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_NUTCHYA.CONTACT_3',
                    }
                  ],
                  EDUCATION_EXPERIENCE: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_NUTCHYA.EDUCATION_EXPERIENCE_1',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_NUTCHYA.EDUCATION_EXPERIENCE_2',
                    }
                  ],
                  JOB_EXPERIENCE: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_NUTCHYA.JOB_EXPERIENCE_1',
                    }
                  ]
                }
              ]
            }, {
              CLASS: 'col-lg-4 margin-bottom-content',
              ROW: [
                {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.COMPANY.K_EMAON,
                  NAME: 'UNAUTHENTICATION.COMPANY.STAFFS.K_EMAON.NAME',
                  NICK_NAME: 'UNAUTHENTICATION.COMPANY.STAFFS.K_EMAON.NICK_NAME',
                  ROLE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_EMAON.ROLE',
                  CONTACT: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_EMAON.CONTACT_1',
                    }
                  ],
                  EDUCATION_EXPERIENCE: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_EMAON.EDUCATION_EXPERIENCE_1',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_EMAON.EDUCATION_EXPERIENCE_2',
                    }
                  ],
                  JOB_EXPERIENCE: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_EMAON.JOB_EXPERIENCE_1',
                    }
                  ]
                }, {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.COMPANY.K_KOON,
                  NAME: 'UNAUTHENTICATION.COMPANY.STAFFS.K_KOON.NAME',
                  NICK_NAME: 'UNAUTHENTICATION.COMPANY.STAFFS.K_KOON.NICK_NAME',
                  ROLE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_KOON.ROLE',
                  CONTACT: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_KOON.CONTACT_1',
                    }
                  ],
                  EDUCATION_EXPERIENCE: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_KOON.EDUCATION_EXPERIENCE_1',
                    }
                  ],
                  JOB_EXPERIENCE: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_KOON.JOB_EXPERIENCE_1',
                    }
                  ]
                }, {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.COMPANY.K_BOONRERD,
                  NAME: 'UNAUTHENTICATION.COMPANY.STAFFS.K_BOONRERD_1.NAME',
                  NICK_NAME: 'UNAUTHENTICATION.COMPANY.STAFFS.K_BOONRERD_1.NICK_NAME',
                  ROLE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_BOONRERD_1.ROLE',
                  CONTACT: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_BOONRERD_1.CONTACT_1',
                    }
                  ],
                  EDUCATION_EXPERIENCE: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_BOONRERD_1.EDUCATION_EXPERIENCE_1',
                    }
                  ],
                  JOB_EXPERIENCE: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_BOONRERD_1.JOB_EXPERIENCE_1',
                    }
                  ]
                }
              ]
            }, {
              CLASS: 'col-lg-4 margin-bottom-content',
              ROW: [
                {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.COMPANY.K_VIJITRA,
                  NAME: 'UNAUTHENTICATION.COMPANY.STAFFS.K_VIJITRA.NAME',
                  NICK_NAME: 'UNAUTHENTICATION.COMPANY.STAFFS.K_VIJITRA.NICK_NAME',
                  ROLE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_VIJITRA.ROLE',
                  CONTACT: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_VIJITRA.CONTACT_1',
                    }
                  ],
                  EDUCATION_EXPERIENCE: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_VIJITRA.EDUCATION_EXPERIENCE_1',
                    }
                  ],
                  JOB_EXPERIENCE: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_VIJITRA.JOB_EXPERIENCE_1',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_VIJITRA.JOB_EXPERIENCE_2',
                    }
                  ]
                }, {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.COMPANY.K_JUNJIRA,
                  NAME: 'UNAUTHENTICATION.COMPANY.STAFFS.K_JUNJIRA.NAME',
                  NICK_NAME: 'UNAUTHENTICATION.COMPANY.STAFFS.K_JUNJIRA.NICK_NAME',
                  ROLE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_JUNJIRA.ROLE',
                  CONTACT: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_JUNJIRA.CONTACT_1',
                    },
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_JUNJIRA.CONTACT_2',
                    }
                  ],
                  EDUCATION_EXPERIENCE: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_JUNJIRA.EDUCATION_EXPERIENCE_1',
                    }
                  ],
                  JOB_EXPERIENCE: [
                    {
                      VALUE: 'UNAUTHENTICATION.COMPANY.STAFFS.K_JUNJIRA.JOB_EXPERIENCE_1',
                    }
                  ]
                }
              ]
            }
          ]
        }
      },
      SERVICES: {
        PATH: '/services',
        NAME: 'COMMON.SERVICES',
        COMPONENTS: {
          PRODUCTS: [
            {
              CLASS: 'col-lg-6 margin-bottom-content',
              ROW: [
                {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.SERVICES.BUSINESS_CARE_CLINIC,
                  TITLE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.LIFETIME_20.TITLE',
                  NAME: 'UNAUTHENTICATION.SERVICES.PRODUCTS.LIFETIME_20.NAME',
                  SUB_NAME: 'UNAUTHENTICATION.SERVICES.PRODUCTS.LIFETIME_20.SUB_NAME',
                  COVERAGE_TIME: 'UNAUTHENTICATION.SERVICES.PRODUCTS.LIFETIME_20.COVERAGE_TIME',
                  AGE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.LIFETIME_20.AGE',
                  SALES_CHANNEL: 'UNAUTHENTICATION.SERVICES.PRODUCTS.LIFETIME_20.SALES_CHANNEL',
                  DESCRIPTION: 'UNAUTHENTICATION.SERVICES.PRODUCTS.LIFETIME_20.DESCRIPTION',
                  INFORMATIONS: [
                    {
                      VALUE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.LIFETIME_20.INFORMATIONS.1',
                    }, {
                      VALUE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.LIFETIME_20.INFORMATIONS.2',
                    }, {
                      VALUE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.LIFETIME_20.INFORMATIONS.3',
                    }, {
                      VALUE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.LIFETIME_20.INFORMATIONS.4',
                    }
                  ]
                }, {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.SERVICES.APPLICATION_BUSINESS_BUSINESSMAN,
                  TITLE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.ISSARA_PLUS.TITLE',
                  NAME: 'UNAUTHENTICATION.SERVICES.PRODUCTS.ISSARA_PLUS.NAME',
                  SUB_NAME: 'UNAUTHENTICATION.SERVICES.PRODUCTS.ISSARA_PLUS.SUB_NAME',
                  COVERAGE_TIME: 'UNAUTHENTICATION.SERVICES.PRODUCTS.ISSARA_PLUS.COVERAGE_TIME',
                  AGE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.ISSARA_PLUS.AGE',
                  SALES_CHANNEL: 'UNAUTHENTICATION.SERVICES.PRODUCTS.ISSARA_PLUS.SALES_CHANNEL',
                  DESCRIPTION: 'UNAUTHENTICATION.SERVICES.PRODUCTS.ISSARA_PLUS.DESCRIPTION',
                  INFORMATIONS: []
                }
              ]
            },
            {
              CLASS: 'col-lg-6 margin-bottom-content',
              ROW: [
                {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.SERVICES.AFFECTION_BABY_BABY_GIRL,
                  TITLE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.ACCUMULATE_30_15.TITLE',
                  NAME: 'UNAUTHENTICATION.SERVICES.PRODUCTS.ACCUMULATE_30_15.NAME',
                  SUB_NAME: 'UNAUTHENTICATION.SERVICES.PRODUCTS.ACCUMULATE_30_15.SUB_NAME',
                  COVERAGE_TIME: 'UNAUTHENTICATION.SERVICES.PRODUCTS.ACCUMULATE_30_15.COVERAGE_TIME',
                  AGE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.ACCUMULATE_30_15.AGE',
                  SALES_CHANNEL: 'UNAUTHENTICATION.SERVICES.PRODUCTS.ACCUMULATE_30_15.SALES_CHANNEL',
                  DESCRIPTION: 'UNAUTHENTICATION.SERVICES.PRODUCTS.ACCUMULATE_30_15.DESCRIPTION',
                  INFORMATIONS: [
                    {
                      VALUE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.ACCUMULATE_30_15.INFORMATIONS.1',
                    }, {
                      VALUE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.ACCUMULATE_30_15.INFORMATIONS.2',
                    }, {
                      VALUE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.ACCUMULATE_30_15.INFORMATIONS.3',
                    }, {
                      VALUE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.ACCUMULATE_30_15.INFORMATIONS.4',
                    }
                  ]
                }, {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.SERVICES.ARMS_CARE_CHECK,
                  TITLE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.H_S_PLUS_GOLD.TITLE',
                  NAME: 'UNAUTHENTICATION.SERVICES.PRODUCTS.H_S_PLUS_GOLD.NAME',
                  SUB_NAME: 'UNAUTHENTICATION.SERVICES.PRODUCTS.H_S_PLUS_GOLD.SUB_NAME',
                  COVERAGE_TIME: 'UNAUTHENTICATION.SERVICES.PRODUCTS.H_S_PLUS_GOLD.COVERAGE_TIME',
                  AGE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.H_S_PLUS_GOLD.AGE',
                  SALES_CHANNEL: 'UNAUTHENTICATION.SERVICES.PRODUCTS.H_S_PLUS_GOLD.SALES_CHANNEL',
                  DESCRIPTION: 'UNAUTHENTICATION.SERVICES.PRODUCTS.H_S_PLUS_GOLD.DESCRIPTION',
                  INFORMATIONS: [
                    {
                      VALUE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.H_S_PLUS_GOLD.INFORMATIONS.1',
                    }, {
                      VALUE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.H_S_PLUS_GOLD.INFORMATIONS.2',
                    }, {
                      VALUE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.H_S_PLUS_GOLD.INFORMATIONS.3',
                    }
                  ]
                }
              ]
            },
            {
              CLASS: 'col-lg-6 margin-bottom-content',
              ROW: [
                {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.SERVICES.BUSINESS_CARE_CLINIC,
                  TITLE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.AIAPA2500.TITLE',
                  NAME: 'UNAUTHENTICATION.SERVICES.PRODUCTS.AIAPA2500.NAME',
                  SUB_NAME: 'UNAUTHENTICATION.SERVICES.PRODUCTS.AIAPA2500.SUB_NAME',
                  COVERAGE_TIME: 'UNAUTHENTICATION.SERVICES.PRODUCTS.AIAPA2500.COVERAGE_TIME',
                  AGE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.AIAPA2500.AGE',
                  SALES_CHANNEL: 'UNAUTHENTICATION.SERVICES.PRODUCTS.AIAPA2500.SALES_CHANNEL',
                  DESCRIPTION: 'UNAUTHENTICATION.SERVICES.PRODUCTS.AIAPA2500.DESCRIPTION',
                  INFORMATIONS: [
                    {
                      VALUE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.AIAPA2500.INFORMATIONS.1',
                    }, {
                      VALUE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.AIAPA2500.INFORMATIONS.2',
                    }, {
                      VALUE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.AIAPA2500.INFORMATIONS.3',
                    }
                  ]
                }, {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.SERVICES.ALONE_ARCHITECTURE_BOY,
                  TITLE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.ECIR.TITLE',
                  NAME: 'UNAUTHENTICATION.SERVICES.PRODUCTS.ECIR.NAME',
                  SUB_NAME: 'UNAUTHENTICATION.SERVICES.PRODUCTS.ECIR.SUB_NAME',
                  COVERAGE_TIME: 'UNAUTHENTICATION.SERVICES.PRODUCTS.ECIR.COVERAGE_TIME',
                  AGE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.ECIR.AGE',
                  SALES_CHANNEL: 'UNAUTHENTICATION.SERVICES.PRODUCTS.ECIR.SALES_CHANNEL',
                  DESCRIPTION: 'UNAUTHENTICATION.SERVICES.PRODUCTS.ECIR.DESCRIPTION',
                  INFORMATIONS: [
                    {
                      VALUE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.ECIR.INFORMATIONS.1',
                    }, {
                      VALUE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.ECIR.INFORMATIONS.2',
                    }, {
                      VALUE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.ECIR.INFORMATIONS.3',
                    }, {
                      VALUE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.ECIR.INFORMATIONS.4',
                    }
                  ]
                }
              ]
            },
            {
              CLASS: 'col-lg-6 margin-bottom-content',
              ROW: [
                {
                  IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.SERVICES.ADULT_BEACH_BENCH,
                  TITLE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.SMART_60.TITLE',
                  NAME: 'UNAUTHENTICATION.SERVICES.PRODUCTS.SMART_60.NAME',
                  SUB_NAME: 'UNAUTHENTICATION.SERVICES.PRODUCTS.SMART_60.SUB_NAME',
                  COVERAGE_TIME: 'UNAUTHENTICATION.SERVICES.PRODUCTS.SMART_60.COVERAGE_TIME',
                  AGE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.SMART_60.AGE',
                  SALES_CHANNEL: 'UNAUTHENTICATION.SERVICES.PRODUCTS.SMART_60.SALES_CHANNEL',
                  DESCRIPTION: 'UNAUTHENTICATION.SERVICES.PRODUCTS.SMART_60.DESCRIPTION',
                  INFORMATIONS: [
                    {
                      VALUE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.SMART_60.INFORMATIONS.1',
                    }, {
                      VALUE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.SMART_60.INFORMATIONS.2',
                    }, {
                      VALUE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.SMART_60.INFORMATIONS.3',
                    }, {
                      VALUE: 'UNAUTHENTICATION.SERVICES.PRODUCTS.SMART_60.INFORMATIONS.4',
                    }
                  ]
                }
              ]
            }
          ]
        }
      },
      OUR_CLIENTS: {
        PATH: '/our-clients',
        NAME: 'COMMON.OUR_CLIENTS',
        COMPONENTS: {
          CLIENTS: [
            {
              IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.OUR_CLIENTS.MR_NOIZAA,
              NAME: 'UNAUTHENTICATION.OUR_CLIENTS.MR_NOIZAA_NAME',
              ROLE: 'UNAUTHENTICATION.OUR_CLIENTS.MR_NOIZAA_ROLE',
              DESCRIPTION: 'UNAUTHENTICATION.OUR_CLIENTS.MR_NOIZAA_DESCIRPTION',
            }
          ]
        }
      },
      APPLYING_FOR_A_JOB: {
        PATH: '/applying-for-a-job',
        NAME: 'COMMON.APPLYING_FOR_A_JOB',
        COMPONENTS: {
          JOBS: [
            {
              IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.APPLYING_FOR_A_JOB.FA_STANDARD,
              NAME: 'UNAUTHENTICATION.APPLYING_FOR_A_JOB.FA_STANDARD_NAME',
              DESCRIPTION: 'UNAUTHENTICATION.APPLYING_FOR_A_JOB.FA_STANDARD_DESCRIPTION',
            },
            {
              IMG: FILE_PATH.IMAGES.UNAUTHENTICATION.APPLYING_FOR_A_JOB.FA_PRIME,
              NAME: 'UNAUTHENTICATION.APPLYING_FOR_A_JOB.FA_PRIME_NAME',
              DESCRIPTION: 'UNAUTHENTICATION.APPLYING_FOR_A_JOB.FA_PRIME_DESCRIPTION',
            }
          ]
        }
      },
      CONTACT: {
        PATH: '/contact',
        NAME: 'COMMON.CONTACT'
      }
    }
  },
  SCROLL_TO_CONFIG_OPTIONS: {
    EASING: 'easeInOutQuint',
    DURATION: 1000
  },
  FACEBOOK: {
    AIA_BY_SURIVIT: 'https://www.facebook.com/surivit.duangchai.3'
  },
  EMAIL: {
    KREN_CYP: 'krencyp@gmail.com'
  }
};
