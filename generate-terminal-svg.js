// generate-terminal-svg.js - Simplified version
const fs = require('fs');

function generateTerminalSVG() {
  const svgContent = `<svg width="800" height="500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .terminal-bg { 
        fill: #0c0c0c; 
        stroke: #00ffff; 
        stroke-width: 2; 
        filter: drop-shadow(0 0 10px #00ffff44);
      }
      .text { 
        font-family: 'Courier New', monospace; 
        font-size: 14px; 
        font-weight: bold;
      }
      .prompt { 
        fill: #00ff88; 
        filter: drop-shadow(0 0 5px #00ff88);
      }
      .command { 
        fill: #00ccff; 
        filter: drop-shadow(0 0 3px #00ccff);
      }
      .output { 
        fill: #ffffff; 
        opacity: 0.9;
      }
      .welcome-text { 
        fill: #ff6b6b; 
        font-size: 18px;
        filter: drop-shadow(0 0 8px #ff6b6b);
      }
      .cursor { 
        fill: #00ff88; 
        animation: blink 1s infinite;
      }
      
      /* Animations */
      @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
      
      @keyframes typewriter {
        from { width: 0; }
        to { width: 100%; }
      }
      
      @keyframes matrix-fall {
        0% { transform: translateY(-20px); opacity: 0; }
        10% { opacity: 0.7; }
        90% { opacity: 0.7; }
        100% { transform: translateY(500px); opacity: 0; }
      }
      
      @keyframes particle-fall {
        0% { transform: translateY(-10px); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(500px); opacity: 0; }
      }
      
      @keyframes glow-pulse {
        0%, 100% { opacity: 0.6; }
        50% { opacity: 1; }
      }
      
      .matrix-rain {
        animation: matrix-fall 3s linear infinite;
        font-size: 12px;
        fill: #00ff41;
        opacity: 0.6;
      }
      
      .particle {
        animation: particle-fall 2.5s linear infinite;
      }
      
      .welcome-glow {
        animation: glow-pulse 2s ease-in-out infinite;
      }
      
      .typing-effect {
        animation: typewriter 2s steps(20, end);
        overflow: hidden;
        white-space: nowrap;
      }
    </style>
    
    <!-- Gradients for welcome text -->
    <linearGradient id="enjoyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#ff00ff;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#00ffff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ff00ff;stop-opacity:1" />
    </linearGradient>
    
    <linearGradient id="withMeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#00ffff;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#ff00ff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#00ffff;stop-opacity:1" />
    </linearGradient>
    
    <!-- Glitch pattern -->
    <pattern id="glitchPattern" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
      <rect width="4" height="2" fill="#00ffff" opacity="0.1"/>
      <rect y="2" width="4" height="2" fill="transparent"/>
    </pattern>
  </defs>
  
  <!-- Terminal Background -->
  <rect class="terminal-bg" width="796" height="496" x="2" y="2" rx="12"/>
  
  <!-- Terminal Header -->
  <rect fill="#333" width="800" height="35" rx="12"/>
  <circle fill="#ff5f57" cx="18" cy="17.5" r="5"/>
  <circle fill="#ffbd2e" cx="35" cy="17.5" r="5"/>
  <circle fill="#28ca42" cx="52" cy="17.5" r="5"/>
  <text class="text" fill="#fff" x="70" y="22" font-size="12">Terminal - zh13u@localhost</text>
  
  <!-- Matrix Rain Background Effects -->
  <g class="matrix-rain">
    <text x="100" y="0">01010101</text>
    <animateTransform attributeName="transform" type="translate" 
                      values="0,-20; 0,500" dur="3s" repeatCount="indefinite"/>
  </g>
  <g class="matrix-rain">
    <text x="200" y="0">11001100</text>
    <animateTransform attributeName="transform" type="translate" 
                      values="0,-20; 0,500" dur="3s" repeatCount="indefinite" begin="1s"/>
  </g>
  <g class="matrix-rain">
    <text x="300" y="0">アイウエオ</text>
    <animateTransform attributeName="transform" type="translate" 
                      values="0,-20; 0,500" dur="4s" repeatCount="indefinite" begin="2s"/>
  </g>
  <g class="matrix-rain">
    <text x="500" y="0">カキクケコ</text>
    <animateTransform attributeName="transform" type="translate" 
                      values="0,-20; 0,500" dur="3.5s" repeatCount="indefinite" begin="0.5s"/>
  </g>
  
  <!-- Particle Effects -->
  <g class="particle">
    <rect fill="#00ffff" width="2" height="8" x="150" y="0" opacity="0.8"/>
    <animateTransform attributeName="transform" type="translate" 
                      values="0,-10; 0,500" dur="2.5s" repeatCount="indefinite"/>
  </g>
  <g class="particle">
    <rect fill="#ff00ff" width="2" height="8" x="350" y="0" opacity="0.8"/>
    <animateTransform attributeName="transform" type="translate" 
                      values="0,-10; 0,500" dur="2.5s" repeatCount="indefinite" begin="1s"/>
  </g>
  <g class="particle">
    <rect fill="#ffff00" width="2" height="8" x="250" y="0" opacity="0.8"/>
    <animateTransform attributeName="transform" type="translate" 
                      values="0,-10; 0,500" dur="2.5s" repeatCount="indefinite" begin="1.5s"/>
  </g>
  
  <!-- Terminal Commands -->
  <g transform="translate(15, 60)">
    <!-- Command 1: whoami -->
    <text class="text prompt" x="0" y="0">root@zh13u-computer:/#</text>
    <text class="text command" x="180" y="0">whoami</text>
    <rect class="cursor" width="8" height="2" x="235" y="-2"/>
    <text class="text output" x="15" y="20">zh13u</text>
    
    <!-- Command 2: id -->
    <g transform="translate(0, 50)">
      <text class="text prompt" x="0" y="0">root@zh13u-computer:/#</text>
      <text class="text command" x="180" y="0">id</text>
      <rect class="cursor" width="8" height="2" x="200" y="-2"/>
      <text class="text output" x="15" y="20">root at here :)</text>
    </g>
    
    <!-- Command 3: ls -->
    <g transform="translate(0, 100)">
      <text class="text prompt" x="0" y="0">root@zh13u-computer:/#</text>
      <text class="text command" x="180" y="0">ls</text>
      <rect class="cursor" width="8" height="2" x="200" y="-2"/>
      <text class="text output" x="15" y="20">welcome</text>
    </g>
    
    <!-- Command 4: ./welcome -->
    <g transform="translate(0, 150)">
      <text class="text prompt" x="0" y="0">root@zh13u-computer:/#</text>
      <text class="text welcome-text" x="180" y="0">./welcome</text>
      <rect class="cursor" width="8" height="2" x="270" y="-2"/>
      
      <!-- Welcome Animation Box -->
      <g transform="translate(15, 25)">
        <rect fill="rgba(0,0,0,0.95)" stroke="#00ffff" stroke-width="2" 
              width="500" height="120" rx="8" class="welcome-glow"/>
        
        <!-- Cyber Security Icons -->
        <text x="30" y="35" font-size="16">🔒</text>
        <text x="430" y="45" font-size="16">🛡️</text>
        <text x="40" y="90" font-size="16">⚡</text>
        <text x="420" y="100" font-size="16">🔐</text>
        
        <!-- Main Welcome Text -->
        <text fill="url(#enjoyGradient)" x="180" y="50" font-size="32" 
              font-weight="bold" text-anchor="middle" class="welcome-glow">ENJOY</text>
        <text fill="url(#withMeGradient)" x="180" y="85" font-size="24" 
              font-weight="bold" text-anchor="middle" class="welcome-glow">WITH ME</text>
        
        <!-- Animated Border -->
        <rect fill="none" stroke="url(#enjoyGradient)" stroke-width="1" 
              width="498" height="118" x="1" y="1" rx="7" opacity="0.6">
          <animate attributeName="stroke-dasharray" values="0 2000; 2000 0; 0 2000" 
                   dur="4s" repeatCount="indefinite"/>
        </rect>
        
        <!-- Rotating Elements -->
        <g class="welcome-glow">
          <animateTransform attributeName="transform" type="rotate" 
                            values="0 250 60; 360 250 60" dur="8s" repeatCount="indefinite"/>
          <circle fill="none" stroke="#00ffff" stroke-width="1" 
                  cx="250" cy="60" r="45" opacity="0.3" stroke-dasharray="5 5"/>
        </g>
      </g>
    </g>
  </g>
  
  <!-- Glitch Overlay Effect -->
  <rect fill="url(#glitchPattern)" width="800" height="500" opacity="0.05">
    <animate attributeName="opacity" values="0.05; 0.15; 0.05" 
             dur="3s" repeatCount="indefinite"/>
  </rect>
  
  <!-- Scanning Line Effect -->
  <line x1="0" y1="0" x2="800" y2="0" stroke="#00ffff" stroke-width="1" opacity="0.3">
    <animateTransform attributeName="transform" type="translate" 
                      values="0,35; 0,500; 0,35" dur="4s" repeatCount="indefinite"/>
  </line>
</svg>`;

  return svgContent;
}

// Generate and save SVG
const svgContent = generateTerminalSVG();
fs.writeFileSync('terminal-animation.svg', svgContent);
console.log('✅ Terminal SVG animation generated successfully!');
console.log('📁 File saved as: terminal-animation.svg');

module.exports = { generateTerminalSVG };
