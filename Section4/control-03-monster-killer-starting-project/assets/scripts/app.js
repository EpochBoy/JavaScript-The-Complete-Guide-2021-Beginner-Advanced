const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 18;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 10;
const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

let enteredValue = parseInt(prompt('Maximum life for you and monster', '100'));
let chosenMaxLife = enteredValue;
let battleLog = [];

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
	chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(event, value, monsterHealth, playerHealth) {
	let logEntry;
	if (event === LOG_EVENT_PLAYER_ATTACK) {
		logEntry = {
			event: event,
			value: value,
			target: 'MONSTER',
			finalMonsterHealth: monsterHealth,
			finalPlayerHealth: playerHealth,
		};
		battleLog.push(logEntry);
	} else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
		logEntry = {
			event: event,
			value: value,
			target: 'MONSTER',
			finalMonsterHealth: monsterHealth,
			finalPlayerHealth: playerHealth,
		};
	} else if (event === LOG_EVENT_MONSTER_ATTACK) {
		logEntry = {
			event: event,
			value: value,
			target: 'PLAYER',
			finalMonsterHealth: monsterHealth,
			finalPlayerHealth: playerHealth,
		};
	} else if (event === LOG_EVENT_PLAYER_HEAL) {
		logEntry = {
			event: event,
			value: value,
			target: 'PLAYER',
			finalMonsterHealth: monsterHealth,
			finalPlayerHealth: playerHealth,
		};
	} else if (event === LOG_EVENT_GAME_OVER) {
		logEntry = {
			event: event,
			value: value,
			finalMonsterHealth: monsterHealth,
			finalPlayerHealth: playerHealth,
		};
	}
	battleLog.push(logEntry);
}

function reset() {
	currentMonsterHealth = chosenMaxLife;
	currentPlayerHealth = chosenMaxLife;
	resetGame(chosenMaxLife);
}

function endRound() {
	const initialPlayerHealth = currentPlayerHealth;
	const monsterDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
	currentPlayerHealth -= monsterDamage;
	writeToLog(LOG_EVENT_MONSTER_ATTACK, monsterDamage, currentMonsterHealth, currentPlayerHealth);

	if (currentPlayerHealth <= 0 && hasBonusLife) {
		hasBonusLife = false;
		removeBonusLife();
		currentPlayerHealth = initialPlayerHealth;
		console.log('You would be dead, but bonus life saved you');
	}

	if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
		console.log('You won!');
		// reset();
		writeToLog(LOG_EVENT_GAME_OVER, 'PLAYER WON', currentMonsterHealth, currentPlayerHealth);
	} else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
		console.log('You lost');
		// reset();
		writeToLog(LOG_EVENT_GAME_OVER, 'MONSTER WON', currentMonsterHealth, currentPlayerHealth);
	} else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
		console.log('You have a draw!');
		// reset();
		writeToLog(LOG_EVENT_GAME_OVER, 'A DRAW', currentMonsterHealth, currentPlayerHealth);
	}

	// Either reset within above if statements or do as below
	if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
		reset();
	}
}

function attackMonster(attackMode) {
	// Replaced below ifs with a ternary expression
	const maxDamage = attackMode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
	const logEvent = attackMode === MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;
	// let maxDamage;
	// let logEvent;
	// if (attackMode === MODE_ATTACK) {
	// 	maxDamage = ATTACK_VALUE;
	// 	logEvent = LOG_EVENT_PLAYER_ATTACK;
	// } else if (attackMode === MODE_STRONG_ATTACK) {
	// 	maxDamage = STRONG_ATTACK_VALUE;
	// 	logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
	// }
	const playerDamage = dealMonsterDamage(maxDamage);
	currentMonsterHealth -= playerDamage;
	writeToLog(logEvent, playerDamage, currentMonsterHealth, currentPlayerHealth);
	endRound();
}

function attackHandler() {
	attackMonster('ATTACK');
}

function strongAttackHandler() {
	attackMonster('STRONG_ATTACK');
}

function healPlayerHandler() {
	let healValue;
	if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
		console.log('You are already full health');
		healValue = chosenMaxLife - currentPlayerHealth;
	} else {
		healValue = HEAL_VALUE;
	}
	increasePlayerHealth(healValue);
	currentPlayerHealth += healValue;
	writeToLog(LOG_EVENT_PLAYER_HEAL, healValue, currentMonsterHealth, currentPlayerHealth);
	endRound();
}

function printLogHandler() {
	console.log(battleLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);
