import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button/as';

const meta = {
  title: 'Components/Button',
  component: Button,

  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A reusable button component supporting primary and secondary variants, multiple sizes, and native button behavior.',
      },
    },
  },

  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary'],
      description: 'Visual style of the button',
    },

    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button',
    },

    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },

    children: {
      control: 'text',
      description: 'Button content',
    },

    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Button',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};
