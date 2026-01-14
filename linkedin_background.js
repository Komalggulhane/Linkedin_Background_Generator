class LinkedInBackgroundGenerator {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.generateBackground(); // Generate initial background
    }

    setupEventListeners() {
        document.getElementById('downloadBtn').addEventListener('click', () => this.downloadImage());
        document.getElementById('backgroundStyle').addEventListener('change', () => this.generateBackground());
    }

    generateBackground() {
        const style = document.getElementById('backgroundStyle').value;

        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw background only
        this.drawBackground(style);
    }

    drawBackground(style) {
        const ctx = this.ctx;
        const width = this.canvas.width;
        const height = this.canvas.height;

        switch (style) {
            case 'ai_neural':
                // AI Neural Network
                const grad1 = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, width/2);
                grad1.addColorStop(0, '#1a1a2e');
                grad1.addColorStop(1, '#16213e');
                ctx.fillStyle = grad1;
                ctx.fillRect(0, 0, width, height);
                this.drawNeuralNetwork();
                break;

            case 'ml_data':
                // ML Data Flow
                const grad2 = ctx.createLinearGradient(0, 0, width, height);
                grad2.addColorStop(0, '#0f4c75');
                grad2.addColorStop(0.5, '#3282b8');
                grad2.addColorStop(1, '#bbe1fa');
                ctx.fillStyle = grad2;
                ctx.fillRect(0, 0, width, height);
                this.drawDataFlow();
                break;

            case 'llm_brain':
                // LLM Brain Pattern
                const grad3 = ctx.createLinearGradient(0, 0, width, height);
                grad3.addColorStop(0, '#2d1b69');
                grad3.addColorStop(0.5, '#11998e');
                grad3.addColorStop(1, '#38ef7d');
                ctx.fillStyle = grad3;
                ctx.fillRect(0, 0, width, height);
                this.drawBrainPattern();
                break;

            case 'rag_knowledge':
                // RAG Knowledge Graph
                const grad4 = ctx.createLinearGradient(0, 0, width, height);
                grad4.addColorStop(0, '#1e3c72');
                grad4.addColorStop(1, '#2a5298');
                ctx.fillStyle = grad4;
                ctx.fillRect(0, 0, width, height);
                this.drawKnowledgeGraph();
                break;

            case 'tech_matrix':
                // Tech Matrix
                const grad5 = ctx.createLinearGradient(0, 0, width, height);
                grad5.addColorStop(0, '#000000');
                grad5.addColorStop(1, '#1a1a1a');
                ctx.fillStyle = grad5;
                ctx.fillRect(0, 0, width, height);
                this.drawMatrixCode();
                break;

            case 'ai_circuit':
                // AI Circuit Board
                const grad6 = ctx.createLinearGradient(0, 0, width, height);
                grad6.addColorStop(0, '#0f3460');
                grad6.addColorStop(1, '#16537e');
                ctx.fillStyle = grad6;
                ctx.fillRect(0, 0, width, height);
                this.drawAICircuit();
                break;

            case 'deep_learning':
                // Deep Learning Layers
                const grad7 = ctx.createLinearGradient(0, 0, width, 0);
                grad7.addColorStop(0, '#667eea');
                grad7.addColorStop(0.5, '#764ba2');
                grad7.addColorStop(1, '#f093fb');
                ctx.fillStyle = grad7;
                ctx.fillRect(0, 0, width, height);
                this.drawDeepLearningLayers();
                break;

            case 'data_science':
                // Data Science Visualization
                const grad8 = ctx.createLinearGradient(0, 0, width, height);
                grad8.addColorStop(0, '#ff9a9e');
                grad8.addColorStop(0.5, '#fecfef');
                grad8.addColorStop(1, '#fecfef');
                ctx.fillStyle = grad8;
                ctx.fillRect(0, 0, width, height);
                this.drawDataVisualization();
                break;

            case 'quantum_ai':
                // Quantum AI
                const grad9 = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, width/2);
                grad9.addColorStop(0, '#4b0082');
                grad9.addColorStop(0.5, '#8a2be2');
                grad9.addColorStop(1, '#000080');
                ctx.fillStyle = grad9;
                ctx.fillRect(0, 0, width, height);
                this.drawQuantumPattern();
                break;

            case 'nlp_text':
                // NLP Text Processing
                const grad10 = ctx.createLinearGradient(0, 0, width, height);
                grad10.addColorStop(0, '#134e5e');
                grad10.addColorStop(1, '#71b280');
                ctx.fillStyle = grad10;
                ctx.fillRect(0, 0, width, height);
                this.drawTextProcessing();
                break;
        }
    }

    drawNeuralNetwork() {
        const ctx = this.ctx;
        const nodes = [];
        const layers = 4;
        const nodesPerLayer = 6;
        
        // Create nodes
        for (let layer = 0; layer < layers; layer++) {
            for (let node = 0; node < nodesPerLayer; node++) {
                nodes.push({
                    x: (this.canvas.width / (layers + 1)) * (layer + 1),
                    y: (this.canvas.height / (nodesPerLayer + 1)) * (node + 1),
                    layer: layer
                });
            }
        }
        
        // Draw connections
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.3)';
        ctx.lineWidth = 1;
        nodes.forEach(node1 => {
            nodes.forEach(node2 => {
                if (node2.layer === node1.layer + 1) {
                    ctx.beginPath();
                    ctx.moveTo(node1.x, node1.y);
                    ctx.lineTo(node2.x, node2.y);
                    ctx.stroke();
                }
            });
        });
        
        // Draw nodes
        ctx.fillStyle = 'rgba(0, 255, 255, 0.8)';
        nodes.forEach(node => {
            ctx.beginPath();
            ctx.arc(node.x, node.y, 8, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    drawDataFlow() {
        const ctx = this.ctx;
        const particles = [];
        
        // Create flowing particles
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 4 + 2,
                opacity: Math.random() * 0.8 + 0.2
            });
        }
        
        // Draw data streams
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 2;
        for (let i = 0; i < 8; i++) {
            const y = (this.canvas.height / 9) * (i + 1);
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.bezierCurveTo(
                this.canvas.width * 0.3, y + Math.sin(i) * 30,
                this.canvas.width * 0.7, y - Math.sin(i) * 30,
                this.canvas.width, y
            );
            ctx.stroke();
        }
        
        // Draw particles
        particles.forEach(particle => {
            ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    drawBrainPattern() {
        const ctx = this.ctx;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        // Draw brain-like neural pathways
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 2;
        
        for (let i = 0; i < 20; i++) {
            const angle = (Math.PI * 2 / 20) * i;
            const radius = 80 + Math.random() * 60;
            const x1 = centerX + Math.cos(angle) * radius;
            const y1 = centerY + Math.sin(angle) * radius;
            
            // Create branching patterns
            for (let j = 0; j < 3; j++) {
                const branchAngle = angle + (Math.random() - 0.5) * 0.8;
                const branchRadius = radius + Math.random() * 40;
                const x2 = centerX + Math.cos(branchAngle) * branchRadius;
                const y2 = centerY + Math.sin(branchAngle) * branchRadius;
                
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.quadraticCurveTo(
                    centerX + Math.cos(angle + 0.2) * (radius * 0.7),
                    centerY + Math.sin(angle + 0.2) * (radius * 0.7),
                    x2, y2
                );
                ctx.stroke();
            }
        }
        
        // Draw synapses
        ctx.fillStyle = 'rgba(56, 239, 125, 0.8)';
        for (let i = 0; i < 30; i++) {
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * 120 + 60;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            
            ctx.beginPath();
            ctx.arc(x, y, Math.random() * 4 + 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    drawKnowledgeGraph() {
        const ctx = this.ctx;
        const nodes = [];
        const connections = [];
        
        // Create knowledge nodes
        for (let i = 0; i < 15; i++) {
            nodes.push({
                x: Math.random() * (this.canvas.width - 100) + 50,
                y: Math.random() * (this.canvas.height - 100) + 50,
                size: Math.random() * 15 + 10,
                type: Math.floor(Math.random() * 3) // Different node types
            });
        }
        
        // Create connections between nearby nodes
        nodes.forEach((node1, i) => {
            nodes.forEach((node2, j) => {
                if (i !== j) {
                    const distance = Math.sqrt(
                        Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2)
                    );
                    if (distance < 200 && Math.random() > 0.7) {
                        connections.push({ from: i, to: j });
                    }
                }
            });
        });
        
        // Draw connections
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 2;
        connections.forEach(conn => {
            const node1 = nodes[conn.from];
            const node2 = nodes[conn.to];
            ctx.beginPath();
            ctx.moveTo(node1.x, node1.y);
            ctx.lineTo(node2.x, node2.y);
            ctx.stroke();
        });
        
        // Draw nodes with different colors based on type
        nodes.forEach(node => {
            const colors = ['rgba(255, 107, 107, 0.8)', 'rgba(78, 205, 196, 0.8)', 'rgba(255, 195, 113, 0.8)'];
            ctx.fillStyle = colors[node.type];
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
            ctx.fill();
            
            // Add glow effect
            ctx.shadowColor = colors[node.type];
            ctx.shadowBlur = 10;
            ctx.fill();
            ctx.shadowBlur = 0;
        });
    }

    drawMatrixCode() {
        const ctx = this.ctx;
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
        
        // Draw falling code
        ctx.fillStyle = 'rgba(0, 255, 0, 0.8)';
        ctx.font = '14px monospace';
        
        for (let i = 0; i < 100; i++) {
            const x = Math.random() * this.canvas.width;
            const y = Math.random() * this.canvas.height;
            const char = chars[Math.floor(Math.random() * chars.length)];
            const opacity = Math.random() * 0.8 + 0.2;
            
            ctx.fillStyle = `rgba(0, 255, 0, ${opacity})`;
            ctx.fillText(char, x, y);
        }
        
        // Add some binary patterns
        ctx.fillStyle = 'rgba(0, 255, 0, 0.3)';
        ctx.font = '12px monospace';
        for (let i = 0; i < 20; i++) {
            const x = Math.random() * this.canvas.width;
            const y = Math.random() * this.canvas.height;
            const binary = Math.random() > 0.5 ? '1' : '0';
            ctx.fillText(binary, x, y);
        }
    }

    drawAICircuit() {
        const ctx = this.ctx;
        
        // Draw circuit pathways
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.6)';
        ctx.lineWidth = 2;
        
        // Horizontal lines
        for (let i = 0; i < 8; i++) {
            const y = (this.canvas.height / 9) * (i + 1);
            ctx.beginPath();
            ctx.moveTo(50, y);
            ctx.lineTo(this.canvas.width - 50, y);
            ctx.stroke();
        }
        
        // Vertical connectors
        for (let i = 0; i < 12; i++) {
            const x = (this.canvas.width / 13) * (i + 1);
            const startY = Math.random() * this.canvas.height * 0.3 + this.canvas.height * 0.1;
            const endY = Math.random() * this.canvas.height * 0.3 + this.canvas.height * 0.6;
            
            ctx.beginPath();
            ctx.moveTo(x, startY);
            ctx.lineTo(x, endY);
            ctx.stroke();
        }
        
        // Draw AI processing units
        ctx.fillStyle = 'rgba(255, 165, 0, 0.8)';
        for (let i = 0; i < 10; i++) {
            const x = Math.random() * (this.canvas.width - 100) + 50;
            const y = Math.random() * (this.canvas.height - 60) + 30;
            
            ctx.fillRect(x, y, 20, 15);
            
            // Add glow
            ctx.shadowColor = 'rgba(255, 165, 0, 0.8)';
            ctx.shadowBlur = 8;
            ctx.fillRect(x, y, 20, 15);
            ctx.shadowBlur = 0;
        }
    }

    drawDeepLearningLayers() {
        const ctx = this.ctx;
        const layers = 6;
        
        // Draw neural network layers
        for (let layer = 0; layer < layers; layer++) {
            const x = (this.canvas.width / (layers + 1)) * (layer + 1);
            const opacity = 0.3 + (layer / layers) * 0.5;
            
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 3;
            
            // Draw layer representation
            ctx.beginPath();
            ctx.moveTo(x, 50);
            ctx.lineTo(x, this.canvas.height - 50);
            ctx.stroke();
            
            // Add nodes in each layer
            const nodes = 5;
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
            for (let node = 0; node < nodes; node++) {
                const y = (this.canvas.height / (nodes + 1)) * (node + 1);
                ctx.beginPath();
                ctx.arc(x, y, 6, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        // Draw connections between layers
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 1;
        for (let layer = 0; layer < layers - 1; layer++) {
            const x1 = (this.canvas.width / (layers + 1)) * (layer + 1);
            const x2 = (this.canvas.width / (layers + 1)) * (layer + 2);
            
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 5; j++) {
                    const y1 = (this.canvas.height / 6) * (i + 1);
                    const y2 = (this.canvas.height / 6) * (j + 1);
                    
                    if (Math.random() > 0.7) {
                        ctx.beginPath();
                        ctx.moveTo(x1, y1);
                        ctx.lineTo(x2, y2);
                        ctx.stroke();
                    }
                }
            }
        }
    }

    drawDataVisualization() {
        const ctx = this.ctx;
        
        // Draw data points
        const dataPoints = [];
        for (let i = 0; i < 80; i++) {
            dataPoints.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 8 + 3,
                color: `hsl(${Math.random() * 360}, 70%, 60%)`
            });
        }
        
        // Draw connecting lines for clustering
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 1;
        dataPoints.forEach((point1, i) => {
            dataPoints.forEach((point2, j) => {
                if (i !== j) {
                    const distance = Math.sqrt(
                        Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2)
                    );
                    if (distance < 100 && Math.random() > 0.9) {
                        ctx.beginPath();
                        ctx.moveTo(point1.x, point1.y);
                        ctx.lineTo(point2.x, point2.y);
                        ctx.stroke();
                    }
                }
            });
        });
        
        // Draw data points
        dataPoints.forEach(point => {
            ctx.fillStyle = point.color;
            ctx.beginPath();
            ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    drawQuantumPattern() {
        const ctx = this.ctx;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        // Draw quantum interference patterns
        for (let i = 0; i < 8; i++) {
            const radius = 40 + i * 25;
            const opacity = 0.8 - i * 0.1;
            
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.stroke();
        }
        
        // Draw quantum particles
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        for (let i = 0; i < 20; i++) {
            const angle = (Math.PI * 2 / 20) * i;
            const radius = 60 + Math.sin(i * 0.5) * 30;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Add quantum entanglement lines
        ctx.strokeStyle = 'rgba(138, 43, 226, 0.6)';
        ctx.lineWidth = 1;
        for (let i = 0; i < 10; i++) {
            const angle1 = Math.random() * Math.PI * 2;
            const angle2 = Math.random() * Math.PI * 2;
            const radius = 80;
            
            const x1 = centerX + Math.cos(angle1) * radius;
            const y1 = centerY + Math.sin(angle1) * radius;
            const x2 = centerX + Math.cos(angle2) * radius;
            const y2 = centerY + Math.sin(angle2) * radius;
            
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        }
    }

    drawTextProcessing() {
        const ctx = this.ctx;
        const words = ['AI', 'NLP', 'TEXT', 'PARSE', 'TOKEN', 'EMBED', 'VECTOR', 'SEMANTIC'];
        
        // Draw text processing flow
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.font = '16px monospace';
        
        for (let i = 0; i < words.length; i++) {
            const x = (this.canvas.width / (words.length + 1)) * (i + 1);
            const y = this.canvas.height / 2 + Math.sin(i * 0.8) * 30;
            
            ctx.fillText(words[i], x - ctx.measureText(words[i]).width / 2, y);
            
            // Draw arrows between words
            if (i < words.length - 1) {
                const nextX = (this.canvas.width / (words.length + 1)) * (i + 2);
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(x + ctx.measureText(words[i]).width / 2 + 10, y - 5);
                ctx.lineTo(nextX - ctx.measureText(words[i + 1]).width / 2 - 10, y - 5);
                ctx.stroke();
                
                // Arrow head
                ctx.beginPath();
                ctx.moveTo(nextX - ctx.measureText(words[i + 1]).width / 2 - 10, y - 5);
                ctx.lineTo(nextX - ctx.measureText(words[i + 1]).width / 2 - 15, y - 10);
                ctx.lineTo(nextX - ctx.measureText(words[i + 1]).width / 2 - 15, y);
                ctx.closePath();
                ctx.fill();
            }
        }
        
        // Add floating text particles
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.font = '12px monospace';
        const chars = 'abcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < 50; i++) {
            const x = Math.random() * this.canvas.width;
            const y = Math.random() * this.canvas.height;
            const char = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(char, x, y);
        }
    }





    downloadImage() {
        // Create download link
        const link = document.createElement('a');
        link.download = 'linkedin-background.png';
        link.href = this.canvas.toDataURL('image/png');
        
        // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show success message
        this.showNotification('Background image downloaded successfully!');
    }

    showNotification(message) {
        // Create notification
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #28a745;
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            z-index: 1000;
            font-weight: 500;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            animation: slideIn 0.3s ease;
        `;
        
        // Add animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => {
                document.body.removeChild(notification);
                document.head.removeChild(style);
            }, 300);
        }, 3000);
    }
}

// Initialize the generator
document.addEventListener('DOMContentLoaded', () => {
    new LinkedInBackgroundGenerator();
});
