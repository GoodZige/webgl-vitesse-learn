import cheZhiTop0 from '~/assets/image/device/正反全黑上.png'
import cheZhiTop1 from '~/assets/image/device/正绿反红上.png'
import cheZhiTop2 from '~/assets/image/device/正红反绿上.png'
import cheZhiTop3 from '~/assets/image/device/正反全红上.png'
import cheZhiTop4 from '~/assets/image/device/正反全黑上.png'
import cheZhiTop5 from '~/assets/image/device/正反故障上.png'
import cheZhiTop6 from '~/assets/image/device/正左反红上.png'
import cheZhiBottom0 from '~/assets/image/device/正反全黑下.png'
import cheZhiBottom1 from '~/assets/image/device/正绿反红下.png'
import cheZhiBottom2 from '~/assets/image/device/正红反绿下.png'
import cheZhiBottom3 from '~/assets/image/device/正反全红下.png'
import cheZhiBottom4 from '~/assets/image/device/正反全黑下.png'
import cheZhiBottom5 from '~/assets/image/device/正左反红下.png'
import signal0 from '~/assets/image/device/洞口交通灯3控-关.png'
import signal1 from '~/assets/image/device/洞口交通灯3控-绿.png'
import signal2 from '~/assets/image/device/洞口交通灯3控-红.png'
import signal3 from '~/assets/image/device/洞口交通灯3控-黄.png'
import signal4 from '~/assets/image/device/洞口交通灯4控-关反向.png'
import signal5 from '~/assets/image/device/洞口交通灯4控-绿反向.png'
import signal6 from '~/assets/image/device/洞口交通灯4控-红反向.png'
import signal7 from '~/assets/image/device/洞口交通灯4控-黄反向.png'
import signal8 from '~/assets/image/device/洞口交通灯4控-绿.png'
import signal9 from '~/assets/image/device/洞口交通灯4控-红.png'
import signal10 from '~/assets/image/device/洞口交通灯4控-黄.png'
import signal11 from '~/assets/image/device/洞口交通灯4控-关.png'
import emergencyLight0 from '~/assets/image/device/应急照明灯-故障.png'
import emergencyLight1 from '~/assets/image/device/应急照明灯-P_LYJ本地开.png'
import emergencyLight2 from '~/assets/image/device/应急照明灯-P_LYJ本地关.png'
import strongLight0 from '~/assets/image/device/加强灯-P_LJQ本地关.png'
import strongLight1 from '~/assets/image/device/加强灯-P_LJQ本地开.png'
import baseLight0 from '~/assets/image/device/P_L未知.png'
import baseLight1 from '~/assets/image/device/P_L本地开.png'
import baseLight2 from '~/assets/image/device/P_L本地关.png'
import wind0 from '~/assets/image/device/离线.png'
import wind1 from '~/assets/image/device/正转.png'
import wind2 from '~/assets/image/device/反转.png'
import wind3 from '~/assets/image/device/停止.png'
import door0 from '~/assets/image/device/P_TD未知.png'
import door1 from '~/assets/image/device/车行横通门-上升_05.png'
import door2 from '~/assets/image/device/P_TD半开半闭.png'
import door3 from '~/assets/image/device/P_TD下降.png'

let typeMap = {
    '1': {
        name: '车道指示器',
        topPicMap: {
            '0': cheZhiTop0,
            '1': cheZhiTop1,//正绿反红
            '2': cheZhiTop2,//正红反绿
            '3': cheZhiTop3,//正红反红
            '4': cheZhiTop4,//正反全关
        },
        bottomPicMap: {
            '0': cheZhiBottom0,
            '1': cheZhiBottom1,//正绿反红
            '2': cheZhiBottom2,//正红反绿
            '3': cheZhiBottom3,//正红反红
            '4': cheZhiBottom4,//正反全关
        },
        width: '26px',
        height: '23px',
    },
    '2': {
        name: '带左转车道指示器',
        topPicMap: {
            '0': cheZhiTop0,
            '1': cheZhiTop1,//正绿反红
            '2': cheZhiTop2,//正红反绿
            '3': cheZhiTop3,//正红反红（缺失）
            '4': cheZhiTop4,//正反全关
            '5': cheZhiTop6,//正左反红
        },
        bottomPicMap: {
            '0': cheZhiBottom0,
            '1': cheZhiBottom1,//正绿反红
            '2': cheZhiBottom2,//正红反绿
            '3': cheZhiBottom3,//正红反红（缺失）
            '4': cheZhiBottom4,//正反全关
            '5': cheZhiBottom5,//正左反红
        },
        width: '26px',
        height: '23px',
    },
    '3': {
        name: '交通信号灯',
        topPicMap: {
            '0': signal0,
            '1': signal1,//绿灯
            '2': signal2,//红灯
            '3': signal3,//黄灯
            '4': signal0,//关
        },
        bottomPicMap: {
            '0': signal0,
            '1': signal1,//绿灯
            '2': signal2,//红灯
            '3': signal3,//黄灯
            '4': signal0,//关
        },
        width: '27px',
        height: '79px',
    },
    '4': {
        name: '带左转交通信号灯',
        topPicMap: {
            '0': signal4,
            '1': signal5,//绿灯
            '2': signal6,//红灯
            '3': signal7,//黄灯
            '4': signal4,//关
        },
        bottomPicMap: {
            '0': signal11,
            '1': signal8,//绿灯
            '2': signal9,//红灯 
            '3': signal10,//黄灯 
            '4': signal11,//关 
        },
        width: '27px',
        height: '106px',
    },
    '6': {
        name: '应急照明',
        topPicMap: {
            '0': emergencyLight0,
            '1': emergencyLight1,//开
            '2': emergencyLight2,//关
        },
        bottomPicMap: {
            '0': emergencyLight0,
            '1': emergencyLight1,//开
            '2': emergencyLight2,//关
        },
        width: '20px',
        height: '20px',
    },
    '7': {
        name: '加强照明',
        topPicMap: {
            '0': strongLight0,
            '1': strongLight1,//开
            '2': strongLight0,//关
        },
        bottomPicMap: {
            '0': strongLight0,
            '1': strongLight1,//开
            '2': strongLight0,//关
        },
        width: '20px',
        height: '20px',
    },
    '9': {
        name: '基本照明',
        topPicMap: {
            '0': baseLight0,
            '1': baseLight1,//开
            '2': baseLight2,//关
        },
        bottomPicMap: {
            '0': baseLight0,
            '1': baseLight1,//开
            '2': baseLight2,//关
        },
        width: '21px',
        height: '26px',
    },
    '10': {
        name: '风机',
        topPicMap: {
            '0': wind0,
            '1': wind1,//正转
            '2': wind2,//反转
            '3': wind3,//停止
        },
        bottomPicMap: {
            '0': wind0,
            '1': wind1,//正转
            '2': wind2,//反转
            '3': wind3,//停止
        },
        width: '40px',
        height: '20px',
    },
    '12': {
        name: '卷帘门',
        topPicMap: {
            '0': door0,
            '1': door1,//上升
            '2': door2,//停止
            '3': door3,//下降
        },
        bottomPicMap: {
            '0': door0,
            '1': door1,//上升
            '2': door2,//停止
            '3': door3,//下降
        },
        width: '20px',
        height: '20px',
    },
}
export {typeMap}