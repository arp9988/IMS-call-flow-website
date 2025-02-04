function startCall() {
    const callStatus = document.getElementById('callStatus');
    const callFlowDiagram = document.getElementById('callFlowDiagram');
    const selectedCallType = document.getElementById('network').value;

    // Update call status with animation
    callStatus.textContent = `Call Flow started: ${selectedCallType}`;
    callStatus.style.transition = 'color 0.5s ease';
    callStatus.style.color = '#007bff';

    // Clear previous diagram
    callFlowDiagram.innerHTML = '';

    // Display the correct image based on the selected call type
    let imageUrl = '';
    switch (selectedCallType) {
        case 'Registration':
            imageUrl = 'https://github.com/cbsprabu/VoLTEcall/blob/main/IMS%20registration%20flow.png?raw=true';
            break;
        case 'Third-party Registration':
            imageUrl = 'https://github.com/cbsprabu/VoLTEcall/blob/main/Third-Party%20Registration.png?raw=true';
            break;
        case 'VoLTE to VoLTE call':
            imageUrl = 'https://github.com/cbsprabu/VoLTEcall/blob/main/VoLTE%20to%20VoLTE%20Call%20flow.png?raw=true';
            break;
        case 'VoLTE to CS(Pure) call':
            imageUrl = 'https://github.com/cbsprabu/VoLTEcall/blob/main/VoLTE%20to%20CS%20call%20flow.png?raw=true';
            break;
        case 'CS to VoLTE call':
            imageUrl = 'https://github.com/cbsprabu/VoLTEcall/blob/main/CS%20to%20VoLTE%20call%20flow.png?raw=true';
            break;
        default:
            imageUrl = '';
    }

    if (imageUrl) {
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.alt = `${selectedCallType} Diagram`;
        imgElement.style.opacity = '0';
        callFlowDiagram.appendChild(imgElement);

        // Fade-in effect for the image
        setTimeout(() => {
            imgElement.style.transition = 'opacity 1s ease';
            imgElement.style.opacity = '1';
        }, 100);
    } else {
        callFlowDiagram.innerHTML = '<p>No diagram available for this call type.</p>';
    }
}
