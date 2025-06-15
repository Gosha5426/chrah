document.addEventListener('DOMContentLoaded', function() {
    const terminal = document.getElementById('terminal');
    let commandInput = document.getElementById('command-input');
    
    // Инициализация матричного эффекта
    function initMatrixEffect() {
        const container = document.querySelector('.matrix-effect');
        container.innerHTML = '';
        const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
        const columns = Math.min(100, Math.floor(window.innerWidth / 20));
        
        for (let i = 0; i < columns; i++) {
            const column = document.createElement('div');
            column.className = 'matrix-column';
            column.style.left = `${i * 20}px`;
            column.style.animationDuration = `${3 + Math.random() * 5}s`;
            column.style.animationDelay = `${Math.random() * 2}s`;
            
            const length = 10 + Math.floor(Math.random() * 20);
            for (let j = 0; j < length; j++) {
                const char = document.createElement('span');
                char.textContent = chars[Math.floor(Math.random() * chars.length)];
                char.style.opacity = j / length;
                column.appendChild(char);
            }
            container.appendChild(column);
        }
    }
    
    // Фокус на ввод при загрузке
    commandInput.focus();
    
    // История команд
    let commandHistory = [];
    let historyIndex = -1;
    
    // Обработка ввода команд
    commandInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const command = this.textContent.trim();
            if (command) {
                commandHistory.push(command);
                historyIndex = commandHistory.length;
                processCommand(command);
            }
            this.textContent = '';
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (commandHistory.length > 0 && historyIndex > 0) {
                historyIndex--;
                this.textContent = commandHistory[historyIndex];
                moveCursorToEnd(this);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                this.textContent = commandHistory[historyIndex];
                moveCursorToEnd(this);
            } else {
                historyIndex = commandHistory.length;
                this.textContent = '';
            }
        }
    });
    
    // Обработчик команд
    function processCommand(command) {
        addLine(`root@h4ck3r:~$ ${command}`);
        
        switch(command.toLowerCase()) {
            case 'help':
                showHelp();
                break;
                
            case 'scan':
                simulateLoading('Сканирование сети...', () => {
                    addLine('> Найдено 3 устройства:');
                    addLine('> 192.168.1.1 - Маршрутизатор');
                    addLine('> 192.168.1.2 - Рабочая станция');
                    addLine('> 192.168.1.3 - Принтер');
                });
                break;
                
            case 'clear':
                clearTerminal();
                break;
                
            case 'connect':
                simulateLoading('Установка соединения через TOR...', () => {
                    addLine('> Соединение установлено: 7F3A...D9C4.onion');
                    addLine('> Анонимность: Высокая');
                    addLine('> Шифрование: AES-256');
                });
                break;
                
            case 'encrypt':
                showEncryptionOptions();
                break;
                
            case 'decode':
                simulateDecoding();
                break;
                
            case 'sysinfo':
                showSystemInfo();
                break;

            case 'blood':
                activateBloodProtocol();
                break;
                
            case 'scream':
                playSound('scream');
                addLine("> AUDIO INPUT: ██████████ LOUD NOISE DETECTED", "error");
                break;
                
            case 'hack':
                simulateHacking();
                break;
                
            case 'panic':
                startPanicMode();
                break;
                
            case 'ghost':
                spawnGhost();
                break;
                
            case 'destroy':
                startDestruction();
                break;
                
            case 'bitcoin':
                simulateMining();
                break;
                
            case 'ddos':
                simulateDDoS();
                break;
                
            default:
                addLine(`> Команда не найдена: ${command}`);
                addLine('> Введите "help" для списка команд');
        }
    }

    // ===== КОМАНДЫ ===== //
    function showHelp() {
        addLine('> Доступные команды:');
        addLine('> help - показать это сообщение');
        addLine('> scan - сканировать сеть');
        addLine('> clear - очистить терминал');
        addLine('> connect - установить соединение');
        addLine('> encrypt - запустить шифрование');
        addLine('> decode - декодировать данные');
        addLine('> sysinfo - информация о системе');
        addLine('> blood - активировать протокол крови');
        addLine('> scream - экстренный сигнал');
        addLine('> hack - режим взлома');
        addLine('> panic - аварийный режим');
        addLine('> ghost - вызвать призрака');
        addLine('> bitcoin - майнить биткоины');
        addLine('> ddos - атака на сервер');
        addLine('> destroy - АКТИВИРОВАТЬ РЕЖИМ УНИЧТОЖЕНИЯ');
    }

    function showEncryptionOptions() {
        addLine('> Доступные алгоритмы:');
        addLine('> 1. AES-256 (рекомендуется)');
        addLine('> 2. RSA-4096');
        addLine('> 3. Blowfish');
        addLine('> Введите номер алгоритма:');
    }

    function simulateDecoding() {
        simulateLoading('Анализ данных...', () => {
            addLine('> Обнаружен шифр: AES-256');
            addLine('> Попытка взлома...');
            setTimeout(() => {
                addLine('> Взлом завершен успешно!');
                addLine('> Данные: Lorem ipsum dolor sit amet');
            }, 1500);
        });
    }

    function showSystemInfo() {
        addLine('> Информация о системе:');
        addLine(`> ОС: ${navigator.platform}`);
        addLine(`> Браузер: ${navigator.userAgent.split(')')[0].split('(')[1]}`);
        addLine(`> Время: ${new Date().toLocaleString()}`);
        addLine(`> Разрешение: ${window.screen.width}x${window.screen.height}`);
    }

    function activateBloodProtocol() {
        showBloodEffect();
        addLine("> WARNING: SYSTEM CORRUPTED", "error");
        setTimeout(() => {
            addLine("> CRITICAL ERROR: BLOOD.EXE ACTIVATED", "error");
        }, 1000);
        playSound('drip');
    }

    function simulateHacking() {
        addLine("> INITIATING HACK...");
        const phrases = [
            "BYPASSING FIREWALL...",
            "INJECTING SQL...",
            "CRACKING HASHES...",
            "ACCESS GRANTED"
        ];
        
        let i = 0;
        const glitchInterval = setInterval(() => {
            if (i < phrases.length) {
                addLine(`> ${phrases[i]}`, "glitch");
                i++;
            } else {
                clearInterval(glitchInterval);
                addLine("> SYSTEM COMPROMISED", "error");
                document.title = "// H4CK3D //";
            }
        }, 800);
    }

    function startPanicMode() {
        document.body.classList.add('destruction-mode');
        addLine("> EMERGENCY MODE ACTIVATED!", "error");
        setTimeout(() => {
            document.body.classList.remove('destruction-mode');
        }, 3000);
    }

    function spawnGhost() {
        const ghost = document.createElement('div');
        ghost.className = 'ghost';
        ghost.textContent = '👻';
        ghost.style.top = `${Math.random() * 80}vh`;
        ghost.style.left = `${Math.random() * 80}vw`;
        ghost.style.animationDuration = `${8 + Math.random() * 7}s`;
        document.body.appendChild(ghost);
        setTimeout(() => ghost.remove(), 15000);
    }

    function simulateMining() {
        simulateLoading('Запуск майнера...', () => {
            let balance = 0;
            addLine('> Майнинг Bitcoin...');
            
            const mining = setInterval(() => {
                balance += Math.random() * 0.0001;
                const lastLine = terminal.lastChild;
                if (lastLine) {
                    lastLine.textContent = `> Баланс: ${balance.toFixed(6)} BTC`;
                }
            }, 500);
            
            setTimeout(() => {
                clearInterval(mining);
                addLine('> Майнинг остановлен');
                addLine(`> Итоговый баланс: ${balance.toFixed(6)} BTC`);
            }, 5000);
        });
    }

    function simulateDDoS() {
        simulateLoading('Подготовка к DDoS атаке...', () => {
            addLine('> Цель: 192.168.1.1');
            addLine('> Запуск ботнета...');
            
            let packets = 0;
            const attack = setInterval(() => {
                packets += 1000 + Math.floor(Math.random() * 9000);
                const lastLine = terminal.lastChild;
                if (lastLine) {
                    lastLine.textContent = `> Отправлено пакетов: ${packets.toLocaleString()}`;
                }
            }, 300);
            
            setTimeout(() => {
                clearInterval(attack);
                addLine('> Атака завершена');
                addLine(`> Всего пакетов: ${packets.toLocaleString()}`);
                addLine('> Сервер не отвечает', "error");
            }, 4000);
        });
    }

    function startDestruction() {
        document.body.classList.add('destruction-mode');
        addLine("> АКТИВАЦИЯ РЕЖИМА УНИЧТОЖЕНИЯ", "error");
        
        setTimeout(() => {
            const skull = document.createElement('div');
            skull.className = 'skull-screen';
            skull.innerHTML = `
                <pre style="color: red; font-size: 24px; margin: 0;">
                  _____
                 /     \\
                | () () |
                 \\  ^  /
                  |||||
                  |||||
                </pre>
                <div class="skull-text">
                  Я ПОРВУ ТВОЮ ЖОПУ
                </div>
            `;
            document.body.appendChild(skull);
            
            setTimeout(() => {
                skull.remove();
                document.body.classList.remove('destruction-mode');
                addLine("> РЕЖИМ УНИЧТОЖЕНИЯ ДЕАКТИВИРОВАН", "error");
            }, 5000);
        }, 2000);
    }

    // ===== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ===== //
    function addLine(text, className = '') {
        const line = document.createElement('div');
        line.className = `terminal-line ${className}`;
        line.textContent = text;
        terminal.appendChild(line);
        scrollToBottom();
    }

    function scrollToBottom() {
        terminal.scrollTop = terminal.scrollHeight;
    }

    function clearTerminal() {
        terminal.innerHTML = '';
        addPrompt();
    }

    function simulateLoading(text, callback) {
        const dots = ['.', '..', '...'];
        let i = 0;
        const loadingLine = document.createElement('div');
        loadingLine.className = 'terminal-line';
        loadingLine.textContent = `> ${text}`;
        terminal.appendChild(loadingLine);
        
        const interval = setInterval(() => {
            loadingLine.textContent = `> ${text}${dots[i % dots.length]}`;
            i++;
        }, 300);
        
        setTimeout(() => {
            clearInterval(interval);
            callback();
        }, 1500 + Math.random() * 1000);
    }

    function playSound(type) {
        const sounds = {
            drip: 'https://assets.mixkit.co/sfx/preview/mixkit-water-drops-woosh-112.mp3',
            scream: 'https://assets.mixkit.co/sfx/preview/mixkit-horror-scream-2886.mp3'
        };
        
        try {
            const audio = new Audio(sounds[type]);
            audio.volume = 0.3;
            audio.play().catch(e => console.log("Audio blocked:", e));
        } catch (e) {
            console.log("Audio error:", e);
        }
    }

    function showBloodEffect() {
        const blood = document.createElement('div');
        blood.className = 'blood-effect';
        document.body.appendChild(blood);
        blood.style.display = 'block';
        setTimeout(() => blood.remove(), 5000);
    }

    function moveCursorToEnd(element) {
        const range = document.createRange();
        const selection = window.getSelection();
        range.selectNodeContents(element);
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
    }

    function addPrompt() {
        const promptLine = document.createElement('div');
        promptLine.className = 'terminal-line';
        promptLine.innerHTML = `
            <span class="prompt">root@h4ck3r:~$</span>
            <span class="input" id="command-input" contenteditable="true"></span>
            <span class="cursor blink">|</span>
        `;
        terminal.appendChild(promptLine);
        
        const newInput = promptLine.querySelector('.input');
        newInput.focus();
        
        newInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const command = this.textContent.trim();
                if (command) {
                    commandHistory.push(command);
                    historyIndex = commandHistory.length;
                    processCommand(command);
                }
                this.textContent = '';
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (commandHistory.length > 0 && historyIndex > 0) {
                    historyIndex--;
                    this.textContent = commandHistory[historyIndex];
                    moveCursorToEnd(this);
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (historyIndex < commandHistory.length - 1) {
                    historyIndex++;
                    this.textContent = commandHistory[historyIndex];
                    moveCursorToEnd(this);
                } else {
                    historyIndex = commandHistory.length;
                    this.textContent = '';
                }
            }
        });
        
        commandInput = newInput;
    }

    // Инициализация
    initMatrixEffect();
    addLine('> Система инициализирована');
    addLine('> Введите "help" для списка команд');
    
    // Адаптация при изменении размера окна
    window.addEventListener('resize', initMatrixEffect);
});