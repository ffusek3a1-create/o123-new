"use client";

import { useEffect } from "react";

import { captureAnalyticsAttribution } from "@/lib/analytics-attribution";

export default function AnalyticsAttributionCapture() {
  useEffect(() => {
    captureAnalyticsAttribution();
  }, []);

  return null;
}