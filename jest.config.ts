import type { Config } from '@jest/types'

// Sync object
const config: Config.InitialOptions = {
	verbose: true,
	extensionsToTreatAsEsm: ['.ts'],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest'
	}
}

export default config