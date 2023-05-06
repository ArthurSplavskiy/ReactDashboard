import { StatusLabel } from '@/widgets/Dashboard/Table/StatusLabel';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
	title: 'Example/StatusLabel',
	component: StatusLabel,
	tags: ['autodocs']
} satisfies Meta<typeof StatusLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Active: Story = {
	args: {
		status: 'active'
	}
};

export const Inactive: Story = {
	args: {
		status: 'inactive'
	}
};
