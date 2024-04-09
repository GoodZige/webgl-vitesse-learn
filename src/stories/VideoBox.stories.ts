import type { Meta, StoryObj } from '@storybook/vue3';
import { fn } from '@storybook/test';
import VideoBox from '~/components/VideoBox.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/VideoBox',
  component: VideoBox,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    imgSrc: { control: 'text'},
    width: { control: 'text' },
    height: { control: 'text' },
  },
  args: {
  },
} satisfies Meta<typeof VideoBox>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Stake1: Story = {
  args: {
    title: 'K123+456',
    videoToken: 'token1'
  },
};
