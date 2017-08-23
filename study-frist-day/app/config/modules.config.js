export default
{
  messageNotice: {
    displayName: '消息通知',
    btnList: [
      {name: '消息查询', func: 'message', path: "/message/msg"},
      {name: '通知查询', func: 'notification', path: "/message/notification"},
      {name: '发送通知', func: 'sendMsg', path: "/message/send"},
    ]
  },
  organization: {
    displayName: '组织部门',
    btnList: [
      {name: '部门管理', func: 'organization-department', path: "/organization/department"},
      {name: '雇员管理', func: 'organization-employee', path: "/organization/employee/"},
      // {name: '值班查询', func: 'organization-onduty', path: "/organization/onduty"},
      // {name: '班次管理', func: 'organization-workclasses', path: "/organization/workclasses"},
      // {name: '雇员排班', func: 'organization-workschedule', path: "/organization/workschedule"},
      // {name: '考勤查询', func: 'organization-attendance', path: "/organization/attendance"},
    ]
  },
  service: {
    displayName: '服务管理',
    btnList: [
      {name: '服务动态', func: 'service-dynamic', path: "/service/dynamic"},
      {name: '服务管理', func: 'service-management', path: "/service/management"},
      {name: '评价管理', func: 'service-evaluation', path: "/service/evaluation"},
      {name: '用户反馈', func: 'service-compAndSugg', path: "/service/compAndSugg"},
    ]
  },
  config: {
    displayName: '产品配置',
    btnList: [
      {name: '产品管理', func: 'product', path: "/config/product/"},
      {name: '资源价格', func: 'config-price-scheme', path: "/config/price/"},
      {name: '*资源价格*', func: 'resource-price', path: '/config/resourcePrice/list', show: false}
    ],
  },
  apartment: {
    displayName: '客房管理',
    btnList: [
      // {name: '房源管理', path: "/apartment/house"},
      {name: '集中式公寓', func: 'apartment-centeralization', path: "/apartment/centeralization/"},
      {name: '分散式公寓', func: 'apartment-decentralized', path: "/apartment/decentralized"},
      {name: '客房白名单', func: 'apartment-roomwhitelist', path: "/apartment/roomwhitelist"},
      {name: '支付方式', func: 'apartment-rentpaymethod', path: "/apartment/rentpaymethod"},
      {name: '参数配置', func: 'apartment-ManagementCenterParameters', path: "/apartment/ManagementCenterParameters"},
      {name: '共享资源', func: 'apartment-resources', path: "/apartment/resources/", show: false},
    ]
  },
  maintain: {
    displayName: "实施维护",
    btnList: [
      {name: '设备状态', func: 'devicestatus', path: "/maintain/devicestatus"},
      {name: '门锁配置', path: "/maintain/lock-config"},
      {name: '门锁管理', func: 'lock-manage', path: "/maintain/lockmanage"},
      {name: '门锁日志', func: 'lock-log', path: "/maintain/locklog"},
      {name: '设备配置', path: "/maintain/device-config"}
    ]
  },
  zone: {
    displayName: "个人中心",
    btnList: [
      {name: '个人资料', func: 'zone-personal-information', path: "/zone/personal"},
      {name: '密码管理', func: 'zone-password-management', path: "/zone/password"},
      {name: '个人消息', func: 'zone-myMsg', path: "/zone/message"}
    ]
  },
  financial: {
    displayName: "账务管理",
    btnList: [
      {name: '预付费流水', func: 'financial-predeposit-journal', path: "/financial/predepositJournal"},
      {name: '预付费', func: 'financial-prepaid', path: "/financial/prepaid"},
      {name: '账本流水', func: 'financial-book-journal', path: "/financial/bookJournal"},
      {name: '账单管理', func: 'financial-bill-management', path: "/financial/billManagement"},
      {name: '应收账款', func: 'financial-plans-receivable', path: "/financial/plansReceivable"},
      {name: '手工入账', func: 'financial-manual-checkin', path: "/financial/manualCheckin"},
      {name: '管家结账', func: 'financial-housekeeper-checkout', path: "/financial/housekeeperCheckout/"},
      {name: '充值结账', func: 'financial-recharge-audit', path: "/financial/recharge-audit/"},
      {name: '租客退款', func: 'financial-renter-refund', path: "/financial/renterRefund"},
      {name: '平台结算', func: 'financial-platform-checkout', path: "/financial/platformCheckout"},
      {name: '退房结算', func: 'financial-settlement-approval', path: "/financial/settlementApproval"},
      {name: '收款账户', func: 'financial-account', path: "/financial/account"},
      {name: '参数管理', func: 'financial-config', path: "/financial/config"},
      {name: '代付设置', func: 'financial-payment-setting', path: "/financial/payment-setting"},
      {name: '公章管理', func: 'financial-stamp', path: "/financial/stamp"},
    ]
  },
  report: {
    displayName: "统计报表",
    btnList: [
      {name: '运营统计', func: 'report-summary', path: "/report/summary"},
      {name: '客房统计', func: 'report-guestRoom', path: "/report/guestRoom"},
      {name: '账务统计', func: 'report-finance', path: "/report/finance"},
      {name: '会员统计', func: 'report-member', path: "/report/member"},
      // {name: '服务统计', func: 'report-service', path: "/report/service"},
      // {name: '投诉建议', func: 'report-complaint', path: "/report/complaint"},
      {name: '能耗统计', func: 'report-energy', path: "/report/energy"}
    ]
  },
  energy: {
    displayName: "节能环保",
    btnList: [
      {name: '能耗概览', func: 'energy-overview'},
      {name: '月度能耗', func: 'energy-monthly'},
    ]
  },
  operationDaily: {
    displayName: "运营日报",
    btnList: [
      {name: '运营汇总', func: 'operationDaily-summary', path: "/operationDaily/summary"},
      {name: '账本流水', func: 'operationDaily-bookJournal', path: "/operationDaily/bookJournal"},
      {name: '账单管理', func: 'operationDaily-billManagement', path: "/operationDaily/billManagement"},
      {name: '平台结算', func: 'operationDaily-platformCheckout', path: "/operationDaily/platformCheckout"},
      {name: '空置客房', func: 'operationDaily-vacantRoom', path: "/operationDaily/vacantRoom"},
      {name: '服务详情', func: 'operationDaily-serviceDetails', path: "/operationDaily/serviceDetails"},
      {name: '投诉建议', func: 'operationDaily-suggestion', path: "/operationDaily/suggestion"},
    ]
  },
  systemConfig: {
    displayName: "系统配置",
    btnList: [
      {name: '系统参数', func: 'systemconfig-systemParameter', path: "/system/parameter"},
    ]
  },
  dataManage: {
    displayName: "数据管理",
    btnList: [
      {name: '数据导入', func: 'systemconfig-dataimport', path: "/data/import"},
      {name: '第三方导入', func: 'systemconfig-thirdimport', path: "/data/thirdimport"},
    ]
  },
  help: {
    displayName: "帮助中心",
    btnList: []
  },
  asset: {
    displayName: "资产管理",
    btnList: [
      {name: '资产管理', func: 'asset-management', path: "/asset/assetManagement"},
      {name: '运营报表', func: 'operation-report', path: "/asset/operationReport"},
      {name: '出租资产发布', func: 'asset-publish', path: "/asset/assetPublish"}
    ]
  },
  finance: {
    displayName: '财务管理',
    multi: true,
    btnList: [
      {
        name: "待办事项",
        code: "todo",
        children: [
          {name: '物业租金类', func: 'finance-todo-propertyRental', path: "/finance/todo/propertyRental"},
          {name: '物业资源类', func: 'finance-todo-propertyResource', path: "/finance/todo/propertyResource"},
          {name: '物业合同类', func: 'finance-todo-propertyContract', path: "/finance/todo/propertyContract"},
          {name: '客房退款类', func: 'finance-todo-houseRefund', path: "/finance/todo/houseRefund"},
          {name: '客房退租类', func: 'finance-todo-houseOffLease', path: "/finance/todo/houseOffLease"}
        ]
      },
      {
        name: "合同管理",
        code: "contract",
        children: [
          {name: '物业合同', func: 'finance-contract-property', path: "/finance/contract/property"}
        ]
      },
      {
        name: "账单管理",
        code: "bill",
        children: [
          {name: '物业账单', func: 'finance-bill-property', path: "/finance/bill/property"},
          {name: '客房账单', func: 'finance-bill-house', path: "/finance/bill/house"}
        ]
      },
      {
        name: "财务管理",
        code: "financeManage",
        children: [
          {
            name: '物业账务',
            func: 'finance-financeManage-propertyAccounting',
            path: "/finance/financeManage/propertyAccounting"
          },
          {
            name: '客房账务',
            func: 'finance-financeManage-roomAccount',
            path: "/finance/financeManage/roomAccount"
          },
        ]
      },
      {
        name: "财务设置",
        code: "financeSet",
        children: [
          {name: '收款账户', func: 'finance-financeSet-account', path: "/finance/financeSet/account"},
          {
            name: '代付设置',
            func: 'finance-financeSet-paymentSetting',
            path: "/finance/financeSet/payment-setting"
          },
          {name: '公章管理', func: 'finance-financeSet-stamp', path: "/finance/financeSet/stamp"},
        ]
      },
      {
        name: "员工代收付",
        code: "employeePayment",
        children: [
          {name: '手工入账', func: 'finance-employeePayment-manualCheckin', path: "/finance/employeePayment/manualCheckin"},
          {name: '管家结账', func: 'finance-employeePayment-housekeeperCheckout', path: "/finance/employeePayment/housekeeperCheckout"},
        ]
      },
      {
        name: "结算管理",
        code: "settlementManagement",
        children: [
          {name: '平台结算', func: 'finance-settlementManagement-platformSettlement', path: "/finance/settlementManagement/platformSettlement"},
        ]
      },
      {
        name: "流水管理",
        code: "pipelineManagement",
        children: [
          {name: '物业租金', func: 'finance-pipelineManagement-propertyRentals', path: "/finance/pipelineManagement/propertyRentals"},
          {name: '客房租金', func: 'finance-pipelineManagement-roomRentals', path: "/finance/pipelineManagement/roomRentals"},
        ]
      },
      {
        name: "组件",
        code: "component",
        children: [
          {name: '账务审批', func: 'finance-component-approval', path: "/finance/component/approval"},
          {
            name: '条件过滤',
            func: 'finance-component-conditionFilter',
            path: "/finance/component/conditionFilter"
          },
          {name: '文本详细', func: 'finance-component-textDetail', path: "/finance/component/textDetail"},
          {name: '内容过滤', func: 'finance-component-contentFilter', path: "/finance/component/contentFilter"},
          {name: '过滤', func: 'finance-component-ContentFilterTestView', path: "/finance/component/filter"}
        ]
      }
    ]
  },
  assetOpert: {
    displayName: '资产运营',
    btnList: [
      {name: '电费运营', func: "assetOpert-elecList", path: "/assetOpert/elecList"}
    ]
  },
  assetOpertElec: {
    displayName: '电费运营',
    btnList: [
      {name: '合同详情', func: 'assetOpert-elec-cont-view', path: "/assetOpert/elec/cont/view", other: true},
      {name: '关联物业', func: 'assetOpert-elec-cout-prop', path: "/assetOpert/elec/cont/prop", other: true},
    ]
  },
  houseKeeper: {
    displayName: '客房动态',
    btnList: [
      {name: '客房统计', func: 'housekeeper-roomStatistics', path: "/housekeeper/roomStatistics"},
      {name: '实时房态', func: 'housekeeper-roomStatus', path: "/housekeeper/roomStatus"},
      {name: '远期房态', func: 'housekeeper-roomStatusDiagram', path: "/housekeeper/roomStatusDiagram"},
      {name: '即将入住', func: 'housekeeper-recentCheckin', path: "/housekeeper/recentCheckin"},
      {name: '即将退房', func: 'housekeeper-recentCheckout', path: "/housekeeper/recentCheckout"},
      {name: '租房动态', func: 'housekeeper-bookingManagement', path: "/housekeeper/bookingManagement"},
      {name: '空置客房', func: 'housekeeper-vacantRoom', path: "/housekeeper/vacantRoom"},
      {name: '入住记录', func: 'housekeeper-room-history', path: "/housekeeper/room-history"},
    ]
  },
  roomStatus: {
    displayName: '实时房态',
    btnList: [
      {name: '客房统计', func: 'housekeeper-roomStatus-guestRoom', path: "/housekeeper/roomStatus/roomId/guestRoom", other: true},
      {name: '实时房态', func: 'housekeeper-roomStatus-renter', path: "/housekeeper/roomStatus/roomId/renter", other: true},
      {name: '远期房态', func: 'housekeeper-roomStatus-doorlock', path: "/housekeeper/roomStatus/roomId/doorlock", other: true},
    ]
  },
  memberManager: {
    displayName: '会员管理',
    btnList: [
      {name: '会员查询', func: 'memberManage-members', path: "/memberManage/members"},
      {name: '黑名单', func: 'memberManage-bmembers', path: "/memberManage/bmembers"},
      {name: '合同管理', func: 'memberManage-contract', path: "/memberManage/contract"},
    ]
  },
  singleMemberManager: {
    displayName: '会员',
    btnList: [
      {name: '基本信息', func: 'memberManage-basicInfo', path: "/memberManage/memberId/basicInfo", other: true},
      {name: '黑名单历史', func: 'housekeeper-blacklist', path: "/memberManage/memberId/blacklist", other: true},
      {name: '实名认证', func: 'housekeeper-authInfo', path: "/memberManage/memberId/authInfo", other: true},
      {name: '投诉建议', func: 'housekeeper-compAndSugg', path: "/memberManage/memberId/compAndSugg", other: true},
      {name: '租房记录', func: 'housekeeper-rentRecords', path: "/memberManage/memberId/rentRecords", other: true},
      {name: '退款记录', func: 'housekeeper-refundRecords', path: "/memberManage/memberId/refundRecords", other: true},
    ]
  },
  property: {
    displayName: '物业管理',
    btnList: [
      {name: '物业列表', func: 'property-manage', path: "/property/manage"},
      {name: '业主列表', func: 'property-homeOwner', path: "/property/homeOwner/action"},
      {name: '关联客房', func: 'property-houses', path: "/property/houses"}
    ]
  },
  singleProperty: {
    displayName: '物业',
    btnList: [
      {name: '物业信息', func: 'property-info', path: "/property/action/info", other: true},
      {name: '业主信息', func: 'property-owner', path: "/property/action/owner", other: true},
      {name: '合同信息', func: 'property-contract', path: "/property/action/contract", other: true},
      {name: '交割信息', func: 'property-delivery', path: "/property/action/delivery", other: true},
    ]
  },
  empty: {
    btnList: []
  }
};
