"use client";

import React, { useState, useEffect } from "react";
import BreakReminder from "./breakPage";
import { stringify } from "querystring";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function ClientBreakReminder() {
  return (
    <div className="w-auto h-auto flex flex-col items-center justify-center">
      <Alert className="hover:bg-blue-100">
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    </div>
  );
}
