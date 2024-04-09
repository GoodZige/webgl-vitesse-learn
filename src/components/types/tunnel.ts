import { CustomImg } from '~/components/types/common'
interface VideoInfo {
    name: string,
    x: number,
    videoCode: string,
    token: string,
    status: string,
    customImg?: CustomImg,
}
// 基础定位及自定义图片信息
interface DisplayInfo {
    x: number,
    y: number,
    customImg?: CustomImg,
}
// 洞口信息
interface HoleInfo extends DisplayInfo {
    direction: 'LEFT' | 'RIGHT'
}
// 横通路 连线方式top1 top2 bottom2 bottom1
interface CrossRoad {
    type?: 'man' | 'car'
    xTop1: number,
    xTop2: number,
    xBottom1: number,
    xBottom2: number,
}
// 横通路放置信息
interface CenterRoadInfo {
    height: string,//横通高度
    y: number,//距隧道底图top百分比
    crossRoadArr: CrossRoad[],
}
// 停车区信息
interface ParkInfo {
    direction: 'TOP' | 'BOTTOM',
    y: number,
    minX: number,
    maxX: number,
    customImg?: CustomImg,
}
interface DetectArea {
    y: number,
    minX: number,
    maxX: number,
    customImg?: CustomImg,
}
interface TextInfo {
    x: number,
    y: number,
    text: string,
}
interface StakeInfo{
    x: number,
    text: string,
    imgSrc?: string,
    width?: string,
    height?: string,
}
interface StakeConfig{
    height?: string,
    topStakeArr?: StakeInfo[],
    bottomStakeArr?: StakeInfo[],
}
interface TunnelConfig {
    holeInfoArr?: HoleInfo[],
    parkArr?: ParkInfo[],
    detectAreaArr?: DetectArea[],
    textArr?: TextInfo[],
    stakeConfig?: StakeConfig,
    centerRoadInfo?: CenterRoadInfo,
    customImg?: CustomImg,
}

export type { HoleInfo, ParkInfo,StakeConfig, StakeInfo, DetectArea, TextInfo, CenterRoadInfo, TunnelConfig }