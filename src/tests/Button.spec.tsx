import { describe, expect, it, vi } from "vitest";
import Button from "../components/Button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<Button/>", () => {
  it("should render button with correct label", () => {
    render(<Button>Login</Button>);
    const button = screen.getByRole("button", { name: "Login" });

    expect(button).toBeInTheDocument();
  });
  it("should respond to click events", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Login</Button>);
    const button = screen.getByRole("button", { name: "Login" });
    await user.click(button);

    expect(onClick).toBeCalledTimes(1);
  });
  it("should render button with correct label", () => {
    render(<Button type="submit">Login</Button>);
    const button = screen.getByRole("button", { name: "Login" });

    expect(button).toHaveAttribute("type", "submit");
  });
});
