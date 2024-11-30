import React, { useState, useRef, useEffect } from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';
import './styles.css';

const MatrixRain = () => {
  return (
    <div className="matrix-background"></div>
  );
};

const Terminal = () => {
    const [input, setInput] = useState('');
    const [commandHistory, setCommandHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [output, setOutput] = useState([
      {
        type: 'info',
        text: `
╔══════════════════════════════════════════════════════════════╗
║                   Welcome to My Terminal                      ║
║           Type 'help' to see available commands              ║
╚══════════════════════════════════════════════════════════════╝

███╗   ███╗██╗   ██╗    ██████╗  ██████╗ ██████╗ ████████╗
████╗ ████║╚██╗ ██╔╝    ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝
██╔████╔██║ ╚████╔╝     ██████╔╝██║   ██║██████╔╝   ██║   
██║╚██╔╝██║  ╚██╔╝      ██╔═══╝ ██║   ██║██╔══██╗   ██║   
██║ ╚═╝ ██║   ██║       ██║     ╚██████╔╝██║  ██║   ██║   
╚═╝     ╚═╝   ╚═╝       ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   

[System initialized... Ready for input]`
      }
    ]);
    const [matrixEnabled, setMatrixEnabled] = useState(true);
    const inputRef = useRef(null);
    const contentRef = useRef(null);
  
    const commands = {
      help: () => ({
        type: 'info',
        text: `
╔═══════════════════════════════════════════════╗
║               Available Commands               ║
╚═══════════════════════════════════════════════╝

> system
  • about       - System information
  • clear       - Clear terminal
  • time        - Show current time
  • matrix      - Toggle matrix effect

> portfolio
  • skills      - Technical expertise
  • projects    - View my projects
  • experience  - Work history
  • education   - Academic background

> contact
  • contact     - All contact information
  • email       - Send me an email
  • social      - Social media links
  • github      - View GitHub profile
  • linkedin    - Professional profile

[Use ↑/↓ arrows to navigate command history]`
      }),
      about: () => ({
        type: 'info',
        text: `
╔═══════════════════════════════════════════════╗
║               System Information              ║
╚═══════════════════════════════════════════════╝

> USER: Rimandeep Singh
> ROLE: IT Support Engineer
> STATUS: Active Professional
> LOCATION: Duisburg, Germany

ABOUT:
IT professional with experience in cloud platform 
management, IT support, and system administration. Proficient 
in streamlining workflows on AWS and Azure, with strong expertise 
in troubleshooting and network optimization.

INTERESTS:
• Cloud Computing
• System Administration
• Network Optimization
• Automation & DevOps

Currently learning: Azure Administrator AZ-104
Learning: Advanced Cloud Architecture`
      }),
      skills: () => ({
        type: 'info',
        text: `
╔═══════════════════════════════════════════════╗
║               Technical Skills                ║
╚═══════════════════════════════════════════════╝

CLOUD & DEVOPS:
[■■■■■■■■□□] AWS
[■■■■■■■■□□] Azure
[■■■■■■■□□□] Docker
[■■■■■■■□□□] Jenkins
[■■■■■■■□□□] Terraform
[■■■■■■■□□□] Ansible

PROGRAMMING & AUTOMATION:
[■■■■■■■□□□] Python
[■■■■■■□□□□] Shell Scripting
[■■■■■□□□□□] API Integration
[■■■■■■■□□□] Android Studio

SYSTEM ADMINISTRATION:
[■■■■■■■□□□] Linux (Red Hat)
[■■■■■■□□□□] Networking
[■■■■■■■■□□] Virtualization

MONITORING & WEB:
[■■■■■■■□□□] Prometheus
[■■■■■■■□□□] Grafana
[■■■■■■■□□□] SonarQube
[■■■■■■□□□□] HTML/CSS/React`
      }),
      projects: () => ({
        type: 'info',
        text: `
╔═══════════════════════════════════════════════╗
║               Featured Projects               ║
╚═══════════════════════════════════════════════╝

1) Cloud Infrastructure Optimization
   ├─ Tech: Terraform, AWS, Kubernetes
   ├─ Achievement: 40% reduction in configuration time
   └─ Description: Automated cloud resource provisioning
      and deployed Kubernetes clusters for microservices

2) CI/CD Implementation
   ├─ Tech: Jenkins, GitHub Actions
   ├─ Achievement: 50% improvement in deployment frequency
   └─ Description: Configured multi-region deployment
      pipelines while maintaining system stability

3) Waste Management Android App
   ├─ Tech: Android Studio, Machine Learning, GPS
   ├─ Achievement: 90% accuracy in predictions
   └─ Description: Smart waste collection system with
      ML-powered collection schedule optimization

Type 'project <number>' for more details`
      }),
      experience: () => ({
        type: 'info',
        text: `
╔═══════════════════════════════════════════════╗
║               Work Experience                 ║
╚═══════════════════════════════════════════════╝

> Italtel Deutschland GmbH | IT Support Engineer
> 05/2023 - Present | Düsseldorf, Germany
> • System setup and configuration
> • Linux system image creation
> • Router configuration (30% reliability boost)
> • Automation projects (40% manual task reduction)

> Kyndryl Global Service | Junior IT Specialist
> 08/2022 - 12/2022 | Wrocław, Poland
> • Achieved 99.9% system uptime
> • AWS ecosystem management
> • 20% support efficiency improvement
> • Enhanced security implementation

> Dare Education Group | IT Support
> 2012 - 2016 | Amritsar, India
> • Workstation optimization
> • Server maintenance
> • Technical support
> • 25% reduction in support inquiries`
      }),
      education: () => ({
        type: 'info',
        text: `
╔═══════════════════════════════════════════════╗
║               Education                       ║
╚═══════════════════════════════════════════════╝

> Master of Information Engineering
> Rhine-Waal University of Applied Sciences
> 10/2022 | Kamp-Lintfort, Germany
> • Cloud Computing, Data Mining, Machine Learning
> • Network Security

> Bachelor of Computer Engineering
> University of Economy (WSG)
> 10/2017 - 11/2021 | Poland
> • Erasmus: Tallinn University of Technology
> • Research: Real-time chat app development

CERTIFICATIONS:
• AWS Certified Cloud Practitioner
• AWS Cloud Quest
• Azure Fundamentals AZ-900
• Azure Administrator AZ-104 (In Progress)
• System Administration and IT Infrastructure`
      }),
      contact: () => ({
        type: 'info',
        text: `
╔═══════════════════════════════════════════════╗
║               Contact Information             ║
╚═══════════════════════════════════════════════╝

> EMAIL: er.rimansingh@gmail.com
> PHONE: +49-15209644076
> LOCATION: Duisburg, Germany
> LINKEDIN: linkedin.com/in/rimandeep-singh
> GITHUB: github.com/rimansingh

Languages: English, Punjabi, Hindi
Feel free to reach out for professional opportunities!`
      }),
      email: () => ({
        type: 'info',
        text: `
╔═══════════════════════════════════════════════╗
║                   Email                       ║
╚═══════════════════════════════════════════════╝

📧 er.rimansingh@gmail.com

[Opening mail client...]`
      }),
      social: () => ({
        type: 'info',
        text: `
╔═══════════════════════════════════════════════╗
║               Social Media                    ║
╚═══════════════════════════════════════════════╝

• LinkedIn: linkedin.com/in/rimandeep-singh
• GitHub: github.com/rimansingh

Type 'linkedin' or 'github' to visit directly.`
      }),
      github: () => ({
        type: 'info',
        text: `
╔═══════════════════════════════════════════════╗
║                  GitHub                       ║
╚═══════════════════════════════════════════════╝

🔗 github.com/rimansingh

[Opening GitHub profile...]`
      }),
      linkedin: () => ({
        type: 'info',
        text: `
╔═══════════════════════════════════════════════╗
║                 LinkedIn                      ║
╚═══════════════════════════════════════════════╝

🔗 linkedin.com/in/rimandeep-singh

[Opening LinkedIn profile...]`
      }),
      clear: () => {
        setOutput([]);
        return null;
      },
      time: () => ({
        type: 'info',
        text: `
╔═══════════════════════════════════════════════╗
║               Current Time                    ║
╚═══════════════════════════════════════════════╝

${new Date().toLocaleString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'short'
})}`
      }),
      matrix: () => {
        setMatrixEnabled(!matrixEnabled);
        return {
          type: 'info',
          text: `Matrix effect has been ${matrixEnabled ? 'disabled' : 'enabled'}`
        };
      },
      games: () => ({
        type: 'info',
        text: `
╔═══════════════════════════════════════════════╗
║               Available Games                 ║
╚═══════════════════════════════════════════════╝

1) Guess the Number (type 'play guess')
2) Rock Paper Scissors (type 'play rps')
3) Word Scramble (type 'play word')`
      })
    };
  
    const handleCommand = (cmd) => {
      const trimmedCmd = cmd.trim().toLowerCase();
      
      // Add command to history
      if (trimmedCmd) {
        setCommandHistory(prev => [...prev, trimmedCmd]);
        setHistoryIndex(-1);
      }

      // Handle special commands that need browser interaction
      if (trimmedCmd === 'email') {
        window.open('mailto:er.rimansingh@gmail.com');
      } else if (trimmedCmd === 'github') {
        window.open('https://github.com/rimansingh', '_blank');
      } else if (trimmedCmd === 'linkedin') {
        window.open('https://linkedin.com/in/rimandeep-singh', '_blank');
      }
      
      const command = commands[trimmedCmd];
  
      if (command) {
        const result = command();
        if (result) {
          setOutput(prev => [...prev, { type: 'command', text: `$ ${cmd}` }, result]);
        }
      } else if (trimmedCmd.startsWith('project ')) {
        const projectNum = parseInt(trimmedCmd.split(' ')[1]);
        if (projectNum >= 1 && projectNum <= 3) {
          setOutput(prev => [
            ...prev,
            { type: 'command', text: `$ ${cmd}` },
            { type: 'info', text: `Detailed info for Project ${projectNum}:\n[Add detailed project description here]` }
          ]);
        } else {
          setOutput(prev => [
            ...prev,
            { type: 'command', text: `$ ${cmd}` },
            { type: 'error', text: 'Invalid project number. Use 1-3.' }
          ]);
        }
      } else if (trimmedCmd === '') {
        setOutput(prev => [...prev, { type: 'command', text: `$` }]);
      } else {
        setOutput(prev => [
          ...prev,
          { type: 'command', text: `$ ${cmd}` },
          { type: 'error', text: `Command not found: ${cmd}. Type 'help' for available commands.` }
        ]);
      }

      // Scroll to bottom
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.scrollTop = contentRef.current.scrollHeight;
        }
      }, 0);
    };
  
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        handleCommand(input);
        setInput('');
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
          const newIndex = historyIndex + 1;
          setHistoryIndex(newIndex);
          setInput(commandHistory[commandHistory.length - 1 - newIndex]);
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex > 0) {
          const newIndex = historyIndex - 1;
          setHistoryIndex(newIndex);
          setInput(commandHistory[commandHistory.length - 1 - newIndex]);
        } else if (historyIndex === 0) {
          setHistoryIndex(-1);
          setInput('');
        }
      }
    };
  
    useEffect(() => {
      inputRef.current?.focus();
    }, []);

    // Auto-focus input when clicking anywhere in the terminal
    const handleTerminalClick = () => {
      inputRef.current?.focus();
    };
  
    return (
      <div className="terminal" onClick={handleTerminalClick}>
        <div className="terminal-header">
          <div className="terminal-buttons">
            <div className="terminal-button close"></div>
            <div className="terminal-button minimize"></div>
            <div className="terminal-button maximize"></div>
          </div>
          <div className="terminal-title">rimandeep@portfolio: ~</div>
        </div>
        <div className="terminal-content" ref={contentRef}>
          {matrixEnabled && <MatrixRain />}
          {output.map((line, i) => (
            <div key={i} className={`terminal-line ${line.type}`}>
              {line.text}
            </div>
          ))}
          <div className="terminal-input-line">
            <span className="prompt">➜</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          </div>
        </div>
      </div>
    );
  };
  
  const App = () => {
    return (
      <div className="app">
        <Terminal />
      </div>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById('root'));