import type { Meta, StoryObj } from '@storybook/vue3';
import { fn } from '@storybook/test';
import Tunnel from '~/components/Tunnel.vue';
import { tunnelConfig } from '~/config/tunnel.config'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/Tunnel',
  component: Tunnel,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    holeInfoArr: { control: 'array' },
    centerRoadInfo: { control: 'object' },
    customImg: { control: 'object' },
  },
  args: {
  },
} satisfies Meta<typeof Tunnel>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Tunnel1: Story = {
  args: tunnelConfig,
};
