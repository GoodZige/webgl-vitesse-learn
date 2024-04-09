/**
 * 该配置表暴露给用户
 * x,y均以整张底图的左上角为坐标原点
**/
import { CenterRoadInfo, DetectArea, HoleInfo, ParkInfo, StakeInfo, TextInfo, TunnelConfig } from '~/components/types/tunnel'
let leftTopHole: HoleInfo = {
    x: 0.0,
    y: 0.06,
    direction: 'LEFT'
}
let rightTopHole: HoleInfo = {
    x: 1,
    y: 0.06,
    direction: 'RIGHT'
}
let leftBottomHole: HoleInfo = {
    x: 0.1,
    y: 0.6,
    direction: 'LEFT'
}
let rightBottomHole: HoleInfo = {
    x: 0.9,
    y: 0.6,
    direction: 'RIGHT'
}
let holeInfoArr: HoleInfo[] = [
    leftTopHole,
    rightTopHole,
    leftBottomHole,
    rightBottomHole
]
let centerRoadInfo: CenterRoadInfo = {
    height: '58px',
    y: 0.405,
    crossRoadArr: [
        {
            xTop1: 0.1,
            xTop2: 0.2,
            xBottom1: 0.05,
            xBottom2: 0.15,
        },
        {
            xTop1: 0.3,
            xTop2: 0.4,
            xBottom1: 0.25,
            xBottom2: 0.35,
        }
    ]
}
let parkArr: ParkInfo[] = [
    {
        direction: 'TOP',
        y: 0.033,
        minX: 0.2,
        maxX: 0.3,
    },
    {
        direction: 'BOTTOM',
        y: 0.945,
        minX: 0.3,
        maxX: 0.4,
    },
]
let detectAreaArr: DetectArea[] = [
    {
        y: 0.124,
        minX: 0,
        maxX: 0.05
    },
]
let textArr: TextInfo[] = [
    {
        x: 0.01,
        y: 0.00,
        text: '往潍坊方向',
    },
    {
        x: 0.97,
        y: 0.00,
        text: '往潍坊方向',
    },
    {
        x: 0.01,
        y: 0.54,
        text: '往济南方向',
    },
    {
        x: 0.97,
        y: 0.54,
        text: '往济南方向',
    },
]
let topStakeArr: StakeInfo[] = [
    {
        x: 0.1,
        text: 'K34+100',
    },
    {
        x: 0.2,
        text: 'K34+200',
    },
]
let bottomStakeArr: StakeInfo[] = [
    {
        x: 0.1,
        text: 'K34+100',
    },
    {
        x: 0.2,
        text: 'K34+200',
    },
]
let stakeConfig = {
    height: '20px',
    topStakeArr: topStakeArr,
    bottomStakeArr: bottomStakeArr,
}
let tunnelConfig: TunnelConfig = {
    holeInfoArr: holeInfoArr,
    parkArr: parkArr,
    detectAreaArr: detectAreaArr,
    textArr: textArr,
    stakeConfig: stakeConfig,
    centerRoadInfo: centerRoadInfo,
}

export { tunnelConfig };
