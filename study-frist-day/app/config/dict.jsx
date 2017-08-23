/**
 * Created by neo on 16/1/19.
 */

import dictData from './dict/index';
import objectAssign from 'object-assign';

const Dict = {
  Page: {
    sizePerPage: 10,
    currentPage: 1,
  },
  // APARTMENT_TYPE: {
  //     CONCENTRATED: 1016001,
  //     DISTRIBUTED: 1016002
  // },
  PRODUCT_TYPE: { //所使用的管理中心类型
    CONCENTRATED: 1051001,
    DISTRIBUTED: 1051002
  },
  Product_Status: {
    Enable: 1052001,
    Disable: 1052002
  },
  SEX: {
    MALE: 1048001,
    FEMALE: 1048002
  },
  TOWARDS: {
    East: "1042001",
    South: "1042002",
    West: "1042003",
    North: "1042004",
    NorthSouth: "1042005",
    WestEast: "1042006",
    SouthEast: "1042007",
    SouthWest: "1042008",
    NorthEast: "1042009",
    NorthWest: "1042010"
  },
  ROOM_STATUS: {
    All: 0, //所有
    Config: 1005001, //配置中
    ConfigToRent: 1005002,//配置中待租
    Empty: 1005003,//空房待租
    Checked: 1005004,//租出
    Expiration: 1005005,//到期待租
    OwnerDisabled: 1005006,//业主停用
    SystemDisabled: 1005007,//运营商停用
  },
  SERVICES: {
    Clean: 1041001,
    Repair: 1041002,
    CheckOut: 1041014,
    Arrears: 1041019,
    Lock: 1041020,
  },
  DUTY: {
    DUTY_RANGE_TYPE_ROOM: 1028001,
    DUTY_RANGE_TYPE_MANAGECENTER: 1028002,
    DUTY_RANGE_TYPE_BUILDING: 1028003,
    DUTY_RANGE_TYPE_FLOOR: 1028004,
    DUTY_RANGE_TYPE_CITY: 1028005
  },
  FINANCIAL_REFUND_STATUS: {
    WaitingApproval: 1063001,
    ApprovalAgreement: 1063002,
    ApprovalRefusal: 1063003,
    AlreadyRefund: 1063004
  },
  FLOW_STATUS: {
    PENDING: 1035001,//待处理-待确认
    HANDLING: 1035002,//处理中-已确认
    START: 1035003,//已开始
    FINISH: 1035004,//已完成
    CANCEL: 1035005,//已取消
    REDIRECT: 1035006,//已转发-即重新分配
    RETURN: 1035007,//已退回
    CLOSE: 1035008,//已关闭
    INVALID: 1035009//无效
  },
  FLOW_TYPE: {
    Cleaning: 1041001,//保洁
    Maintenance: 1041002,//维修
    MeterReading: 1041011,//抄表
  },
  UNOVO_TRANSFOR_OUT_APPLICATION_STATUS: {
    Pending: 0, //待审批
    Approved: 1,//审批通过
    NotApproved: 2,//审批未通过
    NotFullyTransferOut: 3,//未完全放款
    TransferOutDone: 4,//放款完成
    TransferOutFailed: 5,//放款失败
    TransferOutCanceled: 6//放款取消
  },
  ORDER_STATUS: {
    Paid: 0,//已支付
    NotPay: 1,//待支付
    NotFullyPaid: 2,//未完全支付
    Canceled: 3,//已取消
    Invalid: 4,//无效订单
    BadDebts: 5//坏账
  },
  BillType: {
    Normal: 0,//正常
    Invalid: 1,//无效
    Bad: 2,//坏账
    Error: 3,//错账
    Revised: 4,//修正
  },
  BUSINESS_TYPES: {
    RoomServiceBill: 0, //"客房服务类账单"
    RoomResourceBill: 1, //"客房资源类账单"
    RoomRentDepositBill: 2, //"客房房租押金类账单"
    PropertyResourceBill: 4, //"物业资源类账单"
    PropertyRentDepositBill: 5, //"物业房租押金类账单"
    TenantRechargeBill: 6, //"租客充值类账单"
    OrgSettlementBill: 7, //"运营商结算类账单"
    TenantWithdrawBill: 6, //"租客充值类账单"
    ProfitDistributionBill: 7, //"分利类账单"
    RefundBill: 8, //"退款类账单"
    ErrorCorrectionBill: 9, //"纠错类账单"
    CutOverBill: 10, //"交割类账单"
    Other: 100, //"其他"
  },
  APPROVAL_STATUS: {
    Pending: 0, //待审批
    Approved: 1,//已同意
    Rejected: 2,//已驳回
    Freezen: 3,//已冻结
    Scrapped: 4//已废止
  },
  ERROR_TYPE: {
    CollectionError: 0,//收款错误
    CalculationError: 1,//计算错误
    OthersError: 2//其它
  },
  REVISED_TYPE: {
    GenerateBill: 0,//生成账单
    RefundMoney: 1,//退款
    ResponsibilityByContractor: 2,//责任人承担
    OthersError: 3//其它
  },
  CONSTRACT_STATUS: {
    Create: 1039001,//创建
    Effective: 1039002,//生效
    Relieve: 1039003,//解约
    Close: 1039004,//关闭
    Cancel: 1039005//取消
  },
  SETTLEMENT_STATUS: {
    GenSettlementApplication: 2,//生成结算单申请
    Settlemented: 4,//结算完成
    SettlementedNotFully: 5//部分结算完成
  },
  CHECK_STATUS: {
    Pending: 1063001, //待审批
    Approved: 1063002,//审批通过
    NotApproved: 1063003,//审批未通过
  },
  PARTA_TYPE: {
    Proprietor: 0,//业主
    Principal: 1//委托人
  },
  TENANT_REFUND_STATUS: [
    {
      checkStatusId: "1063002",
      checkStatusName: "审批通过"
    },
    {
      checkStatusId: "1063004",
      checkStatusName: "已放款"
    },
    {
      checkStatusId: "1063005",
      checkStatusName: "拒绝放款"
    }],

  workstatus: {
    "1055001": "上班",
    "1055002": "下班"
  },


  IDTYPE: {
    '1024001': '身份证',
    '1024002': '护照',
    '1024003': '港澳通行证',
    '1024004': '军官证',
    '1024005': '学生证'
  },
  IdTypeDict: {
    IDCard: "1024001",
    Passport: "1024002",
    Permit: "1024003",
    MilitaryIDCard: "1024004",
    StudentCard: "1024005"
  },
  //出租方式
  RentWay: {
    ShortRent: 1059001,
    LongRent: 1059002
  },
  Certification: {
    IdCard: 1061001,
    Social: 1061002
  },
  //出租类型
  RentType: {
    Whole: 1060001,
    Part: 1060002
  },
  Common: {
    productListLogo: 'static/img/config/product-default-logo.png',
    defaultCity: {
      "value": "",
      "code": "",
    }
  },
  ResourcesSubject: {
    Water: "10400",
    Electricity: "10500",
    Gas: "10600",
    HotWater: "10700",
    Laundry: "10900",
    CenterAC: "12100",
    Shower: "10909",
    Heating: "12300",
    Meeting: "10901",
    Activity: "10910",
    KitchenOne: "10904",
    KitchenTwo: "10906",
    KitchenThree: "10907",
    KitchenFour: "10908",
  },
  Measurement: {
    LianYong: "0",
    Artificial: "1",
    HouseHolder: "2",
    Guest: "3",
    Time: "4"
  },
  ManagerCenter: {
    Enable: "1053001",
    Disable: "1053002"
  },
  CommunityStatus: {
    WaitSubmit: 1089001,
    WaitCheck: 1089002,
    Passed: 1089003,
    Reject: 1089004,
    Disabled: 1089005
  },
  BillChildSubject: {
    Water: "10400",
    Electricity: "10500",
    Gas: "10600",
    HotWater: "10700"
  },
  Roll: {
    FinancialOfficer: 22,//出纳
    HouseKeeper: 31//客房管家
  },
  AccountStatus: {
    Enable: 1023001,
    Disable: 1023009,
  },
  ResourcesSubjectUnit: {
    '10400': "元/吨",
    '10500': "元/度",
    '10600': "元/立方米",
    '10700': "元/吨",
    '10900': "元/分钟",
    '10904': "元/分钟",
    '10906': "元/分钟",
    '10907': "元/分钟",
    '10908': "元/分钟"
  },
  Towards: {
    '1042001': '东',
    '1042002': '南',
    '1042003': '西',
    '1042004': '北',
    '1042005': '南北',
    '1042006': '东西',
    '1042007': '东南',
    '1042008': '西南',
    '1042009': '东北',
    '1042010': '西北'
  },
  ChinaNum: {
    '0': '零',
    '1': '一',
    '2': '二',
    '3': '三',
    '4': '四',
    '5': '五',
    '6': '六',
    '7': '七',
    '8': '八',
    '9': '九'
  },
  BillSubject: {
    RoomRent: 10100, //客房租金
    Deposit: 10200,  //租金押金
    CardDeposit: 10201,  //门卡押金
    ElectricDeposit: 10202,  //电器押金
    HouseholdDeposit: 10203,  //家居押金
    DecorationDeposit: 10204,  //装修押金
    OtherDeposit: 10205,  //其他押金
    Service: 10300, //客房服务费
    Earnest: 11600, //定金
    PlatFormService: 11702,
    Bargain: 12200,  //议价
    RefundDeposit: 10101,  //退还定金抵房租
    PropertyCosts: 11500  //物业费
  },
  MainBillSubject: {
    RoomService: 103,  //客房服务费
    RoomRepair: 114,   //客房维修费用
    RoomSourceNormal: 115,   //房源日常费用
    Water: 104,   // 资源类订单
    Electricity: 105,  //电费
    Gas: 106,   //煤气费
    HotWater: 107,  //热水费
    PublicResource: 109,  //公共资源费
    RoomRent: 101,  //客房租金
    Deposit: 102,   //押金
    Earnest: 116,  //定金   租约策略排除
    BreachOfContract: 119, //违约金 租约策略排除
    Compensation: 120, //损毁赔偿金, 租约策略排除
    RoomSource: 112  //房源租金 租约策略排除
  },
  OrdersTypeCode: { //
    Service: 0,  //服务类订单
    Resources: 1,   //资源类订单
    RoomDeposit: 2,   //房租押金类订单
    RoomSource: 4    //房源类订单
  },
  BillSubjectConst: {
    RoomRent: 101
  },
  ModulesDict: {
    "0010001": {
      path: "housekeeper",
      show: true
    },//客房动态
    "0020001": {
      path: "apartment",
      show: true
    },  //客房管理
    "0030001": {
      path: "financial",
      show: true
    },  //账务管理
    "0040001": {
      path: "service",
      show: true
    },  //服务管理
    "0050001": {
      path: "organization",
      show: true
    }, //组织部门
    "0060001": {
      path: "memberManage",
      show: true
    }, //会员管理
    "0070001": {
      path: "report",
      show: true
    },   //统计报表
    "0080001": {
      path: "config",
      show: true
    },  //产品配置
    "0090001": {
      path: "message",
      show: true
    }, //消息通知
    "0100001": {
      path: "maintain",
      show: true
    },   //实施维护
    "0110001": {
      path: "property",
      show: true
    },   //物业管理
    // "0120001": {
    //   path: "system",
    //   show: false
    // },   //系统管理
    "0130001": {
      path: "help",
      show: true
    },   //帮助中心
    "0140001": {
      path: "data",
      show: true
    },   //数据管理
    "0150001": {
      path: "operationDaily",
      show: true
    },   //经营日报
  },
  ROOM_STATUS_COLOR_CLASS: {
    '0': 'room-status-all',
    '1005001': 'room-config',
    '1005002': 'room-configing',
    '1005003': 'room-empty',
    '1005004': 'room-checked',
    '1005005': 'room-expiration',
    '1005006': 'room-ownerDisabled',
    '1005007': 'room-systemDisabled',
    '1005010': 'room-booked',
    '1005011': 'room-signed',
  },
  Room_Status_Color: {
    '1005001': '#a36ba4',
    '1005002': '#219dee',
    '1005003': '#f8782b',
    '1005004': '#629a73',
    '1005005': '#c19f5c',
    '1005006': '#db2b2b',
    '1005007': '#b16c57',
    '1005010': '#00cc05',
    '1005011': '#15e4e2',
  },
  COMPANDSUGG_STATUS: {
    pending: 1081001,
    handled: 1081002,
    close: 1081003,
  },
  initSuggestionObj() {
    let obj = {};

    obj[Dict.COMPANDSUGG_STATUS.pending] = "待处理";
    obj[Dict.COMPANDSUGG_STATUS.handled] = "已处理";
    obj[Dict.COMPANDSUGG_STATUS.close] = "关闭";

    return obj;
  },
  CONTRACT_TYPE: {
    All: 0,//所有合同类型
    SoftCopy: 1,//电子合同类型
    HardCopy: 2//纸质合同类型
  },
  PAYMENT_TERM: {
    One: 1,//月付
    Two: 2,//两月付
    Three: 3,//季付
    Six: 6,//半年付
    Twelve: 12, //年付
    Unit: "M"
  },
  PAYMENT_TERM_DICT: [
    {value: 1, name: "月付"},
    {value: 2, name: "两月付"},
    {value: 3, name: "季付"},
    {value: 6, name: "半年付"},
    {value: 12, name: "年付"}
  ],
  PLAN_STATUS: {
    Unfinished: 1,//未完成
    Finished: 2//已完成
  },
  CHECKIN_TYPE: {
    Cash: 0,//现金
    DebitCard: 1,//借记卡
    HuiFenQi: 2,//会分期
    CreditCard: 3//信用卡
  },
  FEE_TYPE: {
    ElectricityFee: 105,//电费
    WaterFee: 104,//水费
    GasFee: 106,//气费
    HotWaterFee: 107,//热水费
    ExclusiveResource: 109//独占资源费
  },
  PAY_PERIOD: {
    One: "1M",//月
    Three: "3M",//季
    Six: "6M",//半年
    Twelve: "12M",//年
  },
  SETTLEMENT_APPROVAL_TYPE: {
    Settlement: 1041025,//退房结算
    Refund: 1041026//退房结算退款
  },
  Code_Contract_Status: 1039,
  DictCode: {
    DirectionCode: 1042,
    LandlordSource: 1108,
    PayType: 1109,
    PayMode: 1100,
    BankList: 1117, //银行
    Channels: 1118, //收款渠道,
    PropertyStatus: 1120,   //物业状态
    RefStatus: 1127,    //关联状态
    parameterName: 1128, //参数名称
    PreDepositConfig: 1131 //预付费充值配置
  },
  Message: {
    Notice: 1096001,
    Information: 1096002,
    Announcement: 1096003
  },
  initMessageTypeObj() {
    let obj = {};

    obj[Dict.Message.Notice] = "通知";
    obj[Dict.Message.Information] = "消息";
    obj[Dict.Message.Announcement] = "公告";

    return obj;
  },
  DecorateStyles: { //装修类型
    1104001: '精装',
    1104002: '简装',
    1104003: '毛坯'
  },
  HouseNatures: { //房屋性质
    1105001: '民用',
    1105002: '商品房',
    1105003: '回迁房',
    1105004: '商住两用',
  },
  FeeMeters: { //表项
    1106001: '水表',
    1106002: '电表',
    1106003: '燃气表',
    1106004: '中水表',
  },
  FeeMeterTypes: { //表项
    1107001: '余数',
    1107002: '底数',
    1107003: '金额',
  },
  ContractType: {
    1099001: "精装分成合约",
    1099002: "精装保底合约",
    1099003: "租赁托管合约"
  },
  Messages: {
    title: {
      10001: '请求数据失败',
      10002: '提示信息',
      10003: '提交失败',
      10004: '删除失败',
      10005: '错误提示',
      10006: '添加失败',
      10007: '编辑失败',
      10008: '克隆失败',
      10009: '获取管理中心失败',
      10010: '发送失败',
      10011: '更新失败',
      10012: '授权失败',
      10013: '安装失败',
    },
    content: {
      10001: '和服务器失去连接，请检查你的网络是否畅通！',
      10002: '提交成功！',
      10003: '删除成功！',
      10004: '请首先提交基本信息！',
      10005: '请填写信息！',
      10006: '添加成功！',
      10007: '编辑成功！',
      10008: '克隆基本信息成功,您可以继续克隆价格项！',
      10009: '获取模板地址失败！',
      10010: '获取员工信息失败！',
      10011: '发送成功！',
      10012: '更新成功！',
      10013: '授权成功！',
      10014: '安装成功！',
    }
  },
  RoomLock: {
    NoLock: 1075001,
    Lock: 1075002
  },
  MessageStatus: {
    UnRead: 1018001,
    Received: 1018002,
    Read: 1018003,
    Invalid: 1018004
  },
  initMessageStatusObj() {
    let obj = {};

    obj[Dict.MessageStatus.UnRead] = "未读";
    obj[Dict.MessageStatus.Received] = "已接收";
    obj[Dict.MessageStatus.Read] = "已读";
    obj[Dict.MessageStatus.Invalid] = "无效";

    return obj;
  },
  initCommunityStatusObj() {
    let obj = {};

    obj[Dict.CommunityStatus.WaitSubmit] = "待提交";
    obj[Dict.CommunityStatus.WaitCheck] = "待审核";
    obj[Dict.CommunityStatus.Passed] = "审核通过";
    obj[Dict.CommunityStatus.Reject] = "驳回";
    obj[Dict.CommunityStatus.Disabled] = "停用";

    return obj;
  },
  SettleStatus: {
    PaidToSettle: 9,
    ToCheck: 10,
    NoNeed: 11,
    NotPaid: 12,
    Other: 100
  },
  ContractUploadType: {
    PlatFormContract: 1110001,
    ThirdPartyContract: 1110002,
    ThirdPartyBill: 1110003,
    Property: 1110004,
  },
  initContractUploadTypeObj(){
    let obj = {};

    obj[Dict.ContractUploadType.PlatFormContract] = "平台合同";
    obj[Dict.ContractUploadType.ThirdPartyContract] = "第三方合同";
    obj[Dict.ContractUploadType.ThirdPartyBill] = "第三方账单";
    obj[Dict.ContractUploadType.Property] = "物业";

    return obj;
  },
  AuthType: {
    NotCertified: 0,  //未认证
    Certified: 1,   //已认证
    Certifying: 2,  //认证中
    Denied: 3   //认证拒绝
  },
  //收款渠道
  MoneyChannels: {
    Bank: 1118002  //银行卡
  },
  PropertyStatus: {
    OwnerToBeEntered: '1120001', //待录入业主
    ToSigned: '1120002', //待签约
    ToDelivery: '1120003', //待交割
    CheckCommunity: '1120004', //小区审核中
    CommunityRejected: '1120005', //小区审核驳回
    FinanceAudit: '1120006', //账务审核中
    AuditWithdraw: '1120007', //审核驳回
    FinanceAuditReject: '1120008', //账务审核驳回
    Execution: '1120009', //履约中
    ContractFreeze: '1120010', //合约冻结
    ContractRepeal: '1120011', //合约废止
    ContractExpire: '1120012', //合约到期
  },
  //共享资源
  BossUseScope: {
    User: 1,
    Organization: 2,
    ManageCenter: 3,
    Building: 4,
    Floor: 5,
    Room: 6
  },
  BossUseType: {
    Queue: 1,
    Book: 2,
    MeetingRoom: 10901,
    ActivityRoom: 10902
  },
  TimeType: {
    Workday: 0,
    Weekend: 1
  },
  //end 共享资源
  //antd-form组件中支持解析的字符
  Char_Split: ".",
  PaymentConfigItemStatus: {
    Opened: 0,  //已开通
    Disabled: 1,  //已冻结
    Stopped: 2 //已停止
  },
  initPaymentConfigItemStatus(){
    let obj = {};

    obj[Dict.PaymentConfigItemStatus.Opened] = "已开通";
    obj[Dict.PaymentConfigItemStatus.Disabled] = "已冻结";
    obj[Dict.PaymentConfigItemStatus.Stopped] = "已终止";

    return obj;
  },
};

Dict.suggestionObj = Dict.initSuggestionObj();  //
Dict.messageStatusObj = Dict.initMessageStatusObj();   //消息通知状态
Dict.messageTypeObj = Dict.initMessageTypeObj();       //消息类型
Dict.communityStatusObj = Dict.initCommunityStatusObj();       //申请状态
Dict.contractUploadTypeObj = Dict.initContractUploadTypeObj();       //上传分类

Dict.PROCESS_NODE_KEY = {
  BILL_APPROVAL_UPMS: "bill_approval_upms",//upms账单审批
  BILL_MODIFY_UPMS: "bill_modify_upms",//修改账单-upms
  PAY_SURE_UPMS: "pay_sure_upms",//付款确认-upms
  BILL_APPROVAL_UPORTAL: "bill_approval_uportal",//账单审批-UPORTAL
  PAY_SUREL_UPORTAL: "pay_sure_uportal",//付款确认-uportal

  ELECTRIC_BILL_APPROVAL_UPORTAL: "electric_bill_approval_uportal",//电费核算审批-uportal
  ELECTRIC_BILL_MODIFY_UPORTAL: "electric_bill_modify_uportal",//电费核算账单修改-uportal

  ELECTRIC_SHARE_BENEFIT_APPROVAL_UPORTAL: "electric_share_benefit_approval_uportal", //电费分利审批-uportal

  PROPERTY_CONTRACT_APPROVAL: "property_contract_approval",//物业合同审批
  PROPERTY_CONTRACT_MODIFY: "property_contract_modify",//物业合同修改

  PROPERTY_RENTAL_BILL_APPROVAL: "property_rental_bill_approval",//物业租金账单审批
  PROPERTY_RENTAL_BILL_MODIFY: "property_rental_bill_modify",//物业租金账单修改

  PROPERTY_RESOURCE_BILL_APPROVAL: "property_resource_bill_approval",//物业资源账单审批
  PROPERTY_RESOURCE_BILL_MODIFY: "property_resource_bill_modify"//物业资源账单修改
}

Dict.FLOW_BUSINESS_TYPE = {
  PROPERTY: "PROPERTY",//物业
  PROPERTY_CONTRACT: "PROPERTY_CONTRACT",//物业合同
  PROPERTY_RENTAL_BILL: "PROPERTY_RENTAL_BILL",//物业租金账单
  PROPERTY_RESOURCE_BILL: "PROPERTY_RESOURCE_BILL",//物业资源账单
  ELECTRIC_BILL_ACCOUNTING: "ELECTRIC_BILL_ACCOUNTING",//电费运营核算
  ELECTRIC_SHARE_BENEFIT: "ELECTRIC_SHARE_BENEFIT"//电费运营分利
}

Dict.SYSTEM_CODE = {
  BillRejectReason: 1133,//账单驳回原因
  ContractRejectReason: 1134//物业驳回原因
}

Dict.APPROVE_OPERATION = {
  Agree: 1063002,//同意
  Reject: 1063003//驳回
}

Dict.APPROVE_TYPE = {
  Bill: "bill",//账单
  Contract: "contract"//合同
}

Dict.CONTRACT_STATUS = {
  SIGNED: "000003",//已签约
  EFFECTIVE: "000004",//合约生效
  FREEZE: "000005",//合约冻结
  CANCEL_FREEZE: "000006",//取消冻结
  CANCEL: "000007",//合约废止
  EXPIRE: "000008"//合约到期
}

Dict.EXAM_STATUS = {
  INIT: "000001",//财务审核中
  APPROVED: "000002",//财务审核通过
  REJECTED: "000003",//财务审核驳回
  BACK: "000004"//审批撤回
}

Dict.BILL_OPERTION = {
  Payment: "1",//支付
  Revise: "2",//修正
  Abolish: "3"//废止
}

Dict.BossAreaCode = {
  BUILDING: 1,   //楼栋
  FLOOR: 2,      //楼层
  ROOM: 3,       //客房
  MGR_CENTER: 4, //管理中心
  PROPERTY: 5,   //物业
};

//物业能耗中客房、物业类型
Dict.PropertyQueryType = {
  Property: 0,   //物业
  Room: 1,      //客房
};


module.exports = objectAssign({}, Dict, dictData);
