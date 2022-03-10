import type { Config } from '@jest/types'

// Sync object
const config: Config.InitialOptions = {
	verbose: true,
	extensionsToTreatAsEsm: ['.ts'],
	globals: {
		'ts-jest': {
			useESM: true
		}
	},
	moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest'
	}
}

export default config