import type { Meta, StoryObj } from '@storybook/vue3';
import { fn } from '@storybook/test';
import DeviceIcon from '~/components/DeviceIcon.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/DeviceIcon',
  component: DeviceIcon,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    imgSrc: { control: 'text'},
    width: { control: 'text' },
    height: { control: 'text' },
  },
  args: {
    imgSrc: "/src/assets/image/device/正反全红下.png",
    width: '26px',
    height: '23px',
  },
} satisfies Meta<typeof DeviceIcon>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const CheZhi1: Story = {
  args: {
    imgSrc: "/src/assets/image/device/正反全红下.png",
    width: '26px',
    height: '23px',
  },
};
export const CheZhi2: Story = {
  args: {
    imgSrc: "/src/assets/image/device/正反全黑下.png",
    width: '26px',
    height: '23px',
  },
};
