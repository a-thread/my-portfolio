import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PortCard from "./index";
import type { Project } from "./project.model";

const project: Project = {
  id: 1,
  key: 1,
  image: "/images/portfolio/example.png",
  title: "Example Project",
  description: "An example project used for testing.",
  tech: "React, TypeScript",
  github: "https://github.com/a-thread/example",
  deployed: "https://example.com",
};

describe("PortCard", () => {
  it("renders the title, description, and tech pills", () => {
    render(<PortCard {...project} />);

    expect(
      screen.getByRole("heading", { name: project.title }),
    ).toBeInTheDocument();
    expect(screen.getByText(project.description)).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("links to the live app and GitHub repo when provided", () => {
    render(<PortCard {...project} />);

    expect(screen.getByRole("link", { name: /live app/i })).toHaveAttribute(
      "href",
      project.deployed,
    );
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      project.github,
    );
  });

  it("omits the live app and demo links when not provided", () => {
    const withoutOptionalLinks: Project = {
      id: project.id,
      key: project.key,
      image: project.image,
      title: project.title,
      description: project.description,
      tech: project.tech,
      github: project.github,
    };
    render(<PortCard {...withoutOptionalLinks} />);

    expect(
      screen.queryByRole("link", { name: /live app/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /demo/i }),
    ).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: "GitHub" })).toBeInTheDocument();
  });
});
