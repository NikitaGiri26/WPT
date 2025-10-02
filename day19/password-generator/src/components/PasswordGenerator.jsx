import React, { useState, useCallback } from "react";

const PasswordGenerator = () => {
    const [length, setLength] = useState(12);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [password, setPassword] = useState("");

    const generatePassword = useCallback(() => {
        let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (includeNumbers) chars += "0123456789";
        if (includeSymbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

        let newPassword = "";
        for (let i = 0; i < length; i++) {
            newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setPassword(newPassword);
    }, [length, includeNumbers, includeSymbols]);

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h2>Password Generator </h2>

            <label>
                Length:
                <input
                    type="number"
                    value={length}
                    onChange={(e) => setLength(Number(e.target.value))}
                    min="4"
                    max="32"
                    style={{ marginLeft: "10px" }}
                />
            </label>
            <br /><br />

            <label>
                <input
                    type="checkbox"
                    checked={includeNumbers}
                    onChange={() => setIncludeNumbers(!includeNumbers)}
                />
                Include Numbers
            </label>
            <br />

            <label>
                <input
                    type="checkbox"
                    checked={includeSymbols}
                    onChange={() => setIncludeSymbols(!includeSymbols)}
                />
                Include Symbols
            </label>
            <br /><br />

            <button onClick={generatePassword}>Generate Password</button>

            <h3>Your Password:</h3>
            <div style={{ fontFamily: "monospace", fontSize: "1.2em", wordBreak: "break-all" }}>
                {password}
            </div>
        </div>
    );
};

export default PasswordGenerator;
