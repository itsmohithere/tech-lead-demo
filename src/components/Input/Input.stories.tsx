import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,

  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'An accessible text input with label, helper text, error state, and native input attributes.',
      },
    },
  },

  tags: ['autodocs'],

  argTypes: {
    label: {
      control: 'text',
      description: 'Accessible label for the input',
    },

    placeholder: {
      control: 'text',
    },

    helperText: {
      control: 'text',
      description: 'Supporting text displayed below the input',
    },

    error: {
      control: 'text',
      description: 'Error message displayed below the input',
    },

    disabled: {
      control: 'boolean',
    },

    required: {
      control: 'boolean',
    },

    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url'],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    helperText: 'We will never share your email.',
    error: '',
    disabled: false,
    required: false,
    type: 'email',
  },
};

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    helperText: 'Use your work email address.',
  },
};

export const Error: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    error: 'Please enter a valid email address.',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    required: true,
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
  },
};
