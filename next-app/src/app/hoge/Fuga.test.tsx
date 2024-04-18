import { expect, test } from 'vitest';
import { render, screen, within } from "@testing-library/react";
import Fuga from './Fuga';

test("renders Fuga", () => {
  render(<Fuga />);
  const fuga = screen.getByText("Fuga");
  expect(fuga).toBeDefined();
});
