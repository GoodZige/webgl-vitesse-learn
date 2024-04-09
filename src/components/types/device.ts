//声明deviceInfo类型
type DeviceInfo = {
    stakeNum: string,//设备桩号
    deviceType: string,//设备类型
    runStatus: string,//运行状态
    data?: any,//设备数据 如CO含量等
}
const cheZhiType = ['1','2'] //车指的类型
export {cheZhiType}
export type { DeviceInfo }
