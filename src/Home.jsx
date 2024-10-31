import React from "react";
import { useState } from "react";
import YesButton from "./YesButton";
import Button from "./Button";
import Cat from "./Cat";

export default function Home() {
    return (
        <div>
            <div>
          <h1>Wanna be my birthday girl date?</h1>
        </div>
        <div className="container" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'space-around' }}>
          <YesButton />
          <Button />
        </div>
        <Cat />
        </div>
    );
}