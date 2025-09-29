function copyCode() {
    const realmCodeInput = document.getElementById("realmCode");
    realmCodeInput.select();
    realmCodeInput.setSelectionRange(0, 99999); // For mobile devices

    // Use the modern Clipboard API if available
    if (navigator.clipboard) {
        navigator.clipboard.writeText(realmCodeInput.value)
            .then(() => {
                alert("Realm code copied to clipboard!");
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
                alert("Could not copy code. Please try manually.");
            });
    } else {
        // Fallback for older browsers
        document.execCommand("copy");
        alert("Realm code copied to clipboard!");
    }
}
