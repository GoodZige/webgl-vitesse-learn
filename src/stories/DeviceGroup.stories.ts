import type { Meta, StoryObj } from '@storybook/vue3';
import { fn } from '@storybook/test';
import DeviceGroup from '~/components/DeviceGroup.vue';
import { DeviceInfo } from '~/components/types/device'
let deviceInfoArr:DeviceInfo[] = [
  {
    stakeNum: 'K123+456',
    deviceType: '1',
    runStatus: '1'
  },
  {
    stakeNum: 'K123+456',
    deviceType: '1',
    runStatus: '2'
  },
  {
    stakeNum: 'K123+456',
    deviceType: '1',
    runStatus: '3'
  },
]
let deviceInfoArr1:DeviceInfo[] = [
  {
    stakeNum: 'K100+200',
    deviceType: '10',
    runStatus: '1'
  },
  {
    stakeNum: 'K100+200',
    deviceType: '10',
    runStatus: '2'
  },
  {
    stakeNum: 'K100+200',
    deviceType: '10',
    runStatus: '3'
  },
]
const meta = {
  title: 'Example/DeviceGroup',
  component: DeviceGroup,
  tags: ['autodocs'],
  argTypes: {
    isShow: { control: 'boolean'},
    isTop: { control: 'boolean' },
    deviceInfoArr: { control: 'object' },
  },
  args: {
    isShow: true,
    isTop: true,
    deviceInfoArr: deviceInfoArr,
  },
} satisfies Meta<typeof DeviceGroup>;

export default meta;
type Story = StoryObj<typeof meta>;
export const DeviceGroup1: Story = {
  args: {
    isShow: true,
    isTop: true,
    deviceInfoArr: deviceInfoArr,
  },
};

export const DeviceGroup2: Story = {
  args: {
    isShow: true,
    isTop: true,
    deviceInfoArr: deviceInfoArr1,
  },
};

