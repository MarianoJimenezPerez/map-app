import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import CustomModal from "./CustomModal";
import { Typography } from "@mui/material";

describe("<CustomModal />", () => {
  test("Should render a modal open", () => {
    render(
      <CustomModal isOpen={true} onClose={() => console.log("close")}>
        <Typography>Mi test children for custom modal open</Typography>
      </CustomModal>
    );

    expect(
      screen.getByText("Mi test children for custom modal open")
    ).toBeDefined();
  });
  test("Should not render a modal when closed", () => {
    render(
      <CustomModal isOpen={false} onClose={() => console.log("close")}>
        <Typography>Mi test children for custom modal closed</Typography>
      </CustomModal>
    );

    expect(
      screen.queryByText("Mi test children for custom modal closed")
    ).toBeNull();
  });
});
