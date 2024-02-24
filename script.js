function handleConnectionRequest(event) {
    if (event.origin !== location.origin) return;
  
    if (event.data.type === "connected") {
      connectionStatusElement.textContent = "Connected"
    }
  }