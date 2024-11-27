import { describe, expect, it } from "vitest";
import Button from "../components/Button";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("<Button/>", () => {
  it("should render button with correct label", () => {
    render(<Button>Login</Button>);

    const button = screen.getByRole("button", { name: "Login" });
    expect(button).toBeInTheDocument();
  });
  it("should render button with correct label", () => {
    render(<Button>Login</Button>);

    const button = screen.getByRole("button", { name: "Login" });
    expect(button).toBeInTheDocument();
  });
});
