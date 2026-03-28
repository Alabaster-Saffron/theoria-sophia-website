"use client";

import { useRouter } from "sanity/router";
import { EditIcon } from "@sanity/icons";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PresentationHeader(props: any) {
  const router = useRouter();

  return (
    <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
      <div style={{ flex: 1 }}>{props.renderDefault(props)}</div>
      <button
        onClick={() =>
          router.navigateIntent("create", { type: "changeRequest" })
        }
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "6px 14px",
          marginRight: "12px",
          background: "#B8963E",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          fontSize: "13px",
          fontWeight: 500,
          cursor: "pointer",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
      >
        <EditIcon />
        Flag for Change
      </button>
    </div>
  );
}
