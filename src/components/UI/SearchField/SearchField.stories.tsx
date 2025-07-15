import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import SearchField from "./SearchField";

const meta: Meta<typeof SearchField> = {
  title: "Components/SearchField",
  component: SearchField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A controlled search input with clear button and Escape support.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchField>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return <SearchField value={value} onChange={setValue} />;
  },
};
