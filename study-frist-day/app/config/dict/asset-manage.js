/**
 * Created by neo on 2017/3/24.
 */

const dict = {};

//完好状态
dict.HealthStatus = {
  Good: 1,              //完好
  Damaged: 2,           //损坏
  ScrappedConfirm: 3,   //报废确认
  Scrapped: 4,          //已经报废
};

//区域位置
dict.Position = {
  None: 0,              //未定 没有选择
  Warehouse: 1,         //仓库
  Room: 2,              //客房
  ManageCenter: 3,      //客房 local custom
};

//成色
dict.Fineness = {
  New: 10,
  Night: 9,
  Eight: 8,
  SEVEN: 7,
  SIX: 6,
  FIVE: 5,
  OLD: 4,
};

export default dict;
